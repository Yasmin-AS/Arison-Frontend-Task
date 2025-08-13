// components/Suspension.tsx
import React, { useState } from "react";
import { Tabs, Input, DatePicker, Button, Form, Modal, Divider } from "antd";
import { suspensionStore } from "../store/suspensionStore";
import { useSuspend } from "../hooks/useSuspend";

const { TextArea } = Input;

function Suspension() {
  const { isOpen, close, driver } = suspensionStore();
  const [activeTab, setActiveTab] = useState<"temporary" | "permanent">(
    "temporary"
  );

  const { mutate, isPending } = useSuspend();

  const onFinish = (values: any) => {
    mutate(
      {
        userId: driver?.id,
        type: activeTab,
        suspensionDays: values.suspensionDays,
        suspensionDate: values.suspensionDate?.format("YYYY-MM-DD"),
        reason: values.reason,
      },
      {
        onSuccess: () => close(),
      }
    );
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key as "temporary" | "permanent")}
        items={[
          { key: "temporary", label: "Temporary Suspension" },
          { key: "permanent", label: "Permanent Suspension" },
        ]}
      />
      {activeTab === "temporary" && (
        <div className="border  border-gray-100 my-2 p-4 rounded-lg">
          <span className="flex justify-start bg-gray-50 py-2 px-1 rounded-lg items-center w-50 gap-2 ">
            Suspended for{" "}
            <input className="w-10 border rounded-lg" type="number" min={1} />{" "}
            days
          </span>
          <span className="text-gray-500 text-sm py-2">
            Enter Suspension date
          </span>
        </div>
      )}

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="What makes you suspend the user" name="reason">
          <TextArea rows={4} placeholder="Enter suspension reason here" />
        </Form.Item>
      </Form>

      <div className="flex flex-row justify-between gap-2 pb-4 w-full ">
        <Button className="flex-1" onClick={close}>
          Cancel
        </Button>
        <Button
          className="flex-1"
          type="primary"
          htmlType="submit"
          loading={isPending}
        >
          Suspend
        </Button>
      </div>
    </>
  );
}

export default Suspension;
