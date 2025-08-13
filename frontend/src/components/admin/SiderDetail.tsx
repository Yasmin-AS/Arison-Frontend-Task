import { useMenuStore } from "../../store/menuStore";
import { menuItems } from "../../services/menuService";
import Menu from "./UserMgt";
import { Breadcrumb } from "antd";

function SiderDetail() {
  const { selectedItem, setSelectedItem } = useMenuStore();

  const breadcrumbItems = menuItems.flatMap((item) => {
    if (item.children?.length) {
      return item.children
        .filter((child) => child.key === selectedItem) // only active child
        .map((child) => ({
          title: (
            <div className="flex flex-col p-4">
              <span className="text-2xl font-bold">{item.label} </span>
              <span
                className="text-gray-400 hover:underline p-2 cursor-pointer"
                onClick={() => setSelectedItem(child.key)}
              >
                {child.label}
              </span>
            </div>
          ),
        }));
    } else if (item.key === selectedItem) {
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
    return [];
  });

  return (
    <div className="p-4 ">
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
