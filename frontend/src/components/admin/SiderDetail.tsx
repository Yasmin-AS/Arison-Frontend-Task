import React, { useState } from "react";
import { Breadcrumb } from "antd";
import { menuItems } from "../../services/menuService";
import Menu from "./Menu"; // your Menu component

function SiderDetail() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const breadcrumbItems = menuItems.flatMap((item) => {
    if (item.children && item.children.length > 0) {
      return item.children.map((child) => ({
        title: (
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => setSelectedItem(child.key)}
          >
            {item.label} / {child.label}
          </span>
        ),
      }));
    } else {
      return {
        title: (
          <span
            className="text-gray-800 font-medium cursor-pointer"
            onClick={() => setSelectedItem(item.key)}
          >
            {item.label}
          </span>
        ),
      };
    }
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        {selectedItem === "drivers" && <Menu />}
        {selectedItem && selectedItem !== "drivers" && (
          <div className="text-gray-500">
            Content for <strong>{selectedItem}</strong> coming soon...
          </div>
        )}
        {!selectedItem && (
          <div className="text-gray-400 italic">Select a menu item</div>
        )}
      </div>
    </div>
  );
}

export default SiderDetail;
