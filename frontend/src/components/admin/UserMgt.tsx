import React from "react";
import { Tabs, Input, Button, Card, Avatar } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import {
  fetchOverviewData,
  fetchApprovalRequests,
  fetchDriverCategories,
} from "../../services/driverService";
import { useDriverStore } from "../../store/driverStore";
import TableLayout from "./TableLayout";
import dots from "../../assets/icons/dots.png";
import alert from "../../assets/icons/work-alert.png";
import alerts from "../../assets/icons/work-alert1.png";
import exportIcon from "../../assets/icons/export.png";

const { TabPane } = Tabs;

const UserMgt: React.FC = () => {
  const {
    searchText,
    activeCategory,
    activeCardId,
    setActiveCardId,
    setSearchText,
    setActiveCategory,
  } = useDriverStore();

  // Queries
  const { data: overviewData = [] } = useQuery({
    queryKey: ["overview"],
    queryFn: fetchOverviewData,
  });

  const { data: approvalRequests = [] } = useQuery({
    queryKey: ["approvalRequests"],
    queryFn: fetchApprovalRequests,
  });

  const { data: driverCategories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchDriverCategories,
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Titles */}
      <div>
        <h1 className="text-2xl font-bold">User Management</h1>
        <p className="text-gray-500 text-sm">Drivers</p>
      </div>

      {/* Overview & Approval Requests */}
      <Card>
        <div className="grid grid-cols-4 gap-8">
          {/* Overview cards */}
          <div className="col-span-2 bg-white p-4 rounded-lg">
            <span>
              <h2 className="text-xl font-bold mb-3">Drivers Overview</h2>
              <p className="text-gray-500 text-lg pl-1 mb-2">
                Break down lengthy texts into concise summaries to grasp.
              </p>
            </span>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.map((card: any) => {
                const isActive = activeCardId === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCardId(isActive ? null : card.id)}
                    className={`p-4 rounded-lg shadow cursor-pointer transition-colors 
                      ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      } 
                      hover:shadow-lg
                    `}
                  >
                    <div className="flex justify-between">
                      <img
                        src={isActive ? alerts : alert}
                        alt="status"
                        className="mt-3 w-5 h-5"
                      />
                      <img
                        src={dots}
                        alt=""
                        className="w-4 h-4 cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <p className="text-lg font-bold">{card.title}</p>
                    <h2 className="text-2xl font-semibold">{card.value}</h2>
                    {card.change && (
                      <span
                        className={`${
                          isActive ? "text-white" : card.changeColor
                        } text-xs`}
                      >
                        {card.change}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Approval Requests */}
          <div className="col-span-2 bg-white p-4 gap-2 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Approval Requests</h2>
            <p className="text-gray-500 text-lg pl-1">
              Manage your markets location and other informations.
            </p>
            {approvalRequests.map((req: any) => {
              const isActive = activeCardId === req.id;

              return (
                <div className="my-2" key={req.id}>
                  <Card
                    onClick={() => setActiveCardId(isActive ? null : req.id)}
                    className={`
                      items-center border-b my-2 last:border-0 cursor-pointer transition
                      ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-white text-black"
                      }
                      hover:shadow-lg
                    `}
                  >
                    <div className="flex items-center justify-between pr-4">
                      {/* Left side */}
                      <div className="flex items-center gap-3">
                        <Avatar src={req.avatar} className="w-7 h-7" />
                        <span>
                          <p className="font-medium">{req.name}</p>
                          <p
                            className={`text-xs ${
                              isActive ? "text-white/80" : "text-gray-500"
                            }`}
                          >
                            {req.date}
                          </p>
                        </span>
                      </div>

                      {/* Right side */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm ${
                            isActive ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {req.carType}
                        </span>
                        <img
                          src={dots}
                          alt="menu"
                          className="w-4 h-4 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card>
        {/* Tabs & Search */}
        <div className="flex justify-between gap-150 p-4">
          <Input
            placeholder="Search for id, name, phone number"
            suffix={<SearchOutlined />}
            value={searchText}
            className="w-80"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button>
            <img src={exportIcon} alt="export" />
            Export
          </Button>
        </div>
        <div className="w-screen">
          <Tabs
            activeKey={activeCategory}
            onChange={setActiveCategory}
            type="card"
          >
            {driverCategories.map((cat: any) => (
              <TabPane key={cat.id} tab={`${cat.label} (${cat.count})`} />
            ))}
          </Tabs>
        </div>
        {/* Table */}
        <TableLayout />
      </Card>
    </div>
  );
};

export default UserMgt;
