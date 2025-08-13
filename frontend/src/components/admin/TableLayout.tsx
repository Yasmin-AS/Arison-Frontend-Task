import React, { useState } from "react";
import { Table, Tag, Avatar, Modal } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { fetchDrivers } from "../../services/driverService";
import Suspended from "../Suspension";
import element from "../../assets/icons/elements.png";

function TableLayout() {
  const { data: drivers = [] } = useQuery({
    queryKey: ["drivers"],
    queryFn: fetchDrivers,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [suspendedDriver, setSuspendedDriver] = useState<any>(null);

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  };

  const openSuspendedModal = (record: any) => {
    setSuspendedDriver(record);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSuspendedDriver(null);
  };

  const columns = [
    {
      title: "Driver Id & Name",
      dataIndex: "name",
      key: "name",
      render: (_: string, record: any) => (
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
          <Avatar src={record.avatar} />
          <div className="flex flex-col">
            <a href="#" className="text-blue-500 text-xs">
              {record.id}
            </a>
            <span>{record.name}</span>
          </div>
        </div>
      ),
    },
    { title: "Phone Number", dataIndex: "phone", key: "phone" },
    { title: "Car Type", dataIndex: "carType", key: "carType" },
    { title: "Date Created", dataIndex: "dateCreated", key: "dateCreated" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "Available"
            ? "green"
            : status === "Offline"
            ? "gray"
            : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex gap-3 items-center">
          <span
            className="cursor-pointer"
            onClick={() =>
              record.status === "Available" || "Offline"
                ? openSuspendedModal(record)
                : null
            }
          >
            {record.status === "Available" ? (
              <EyeOutlined />
            ) : (
              <EyeInvisibleOutlined />
            )}
          </span>
          <span className="cursor-pointer text-red-500">
            <DeleteOutlined />
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={drivers}
        rowKey="id"
        className="border border-gray-50 rounded-lg shadow-md"
        pagination={{ pageSize: 10 }}
      />

      {/* Suspended Modal */}
      <Modal
        open={isModalVisible}
        title={
          suspendedDriver && (
            <>
              <span className="text-lg">Create new Suspension Issue</span>
              <div className="flex items-center gap-3 bg-blue-50 p-2 rounded-lg mt-2">
                <img
                  src={element}
                  alt="Avatar"
                  className="w-5 h-5 rounded-full"
                />
                <p className="text-sm text-blue-500">
                  You’re Sending a suspension for :
                </p>
                <Avatar src={suspendedDriver.avatar} />

                <span className="text-sm text-blue-500">
                  {suspendedDriver.name}
                </span>
              </div>
            </>
          )
        }
        onCancel={closeModal}
        footer={null}
      >
        {suspendedDriver && <Suspended />}
      </Modal>
    </>
  );
}

export default TableLayout;
