import person1 from "../assets/images/person1.jpg";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";
import avatar5 from "../assets/images/avatar5.png";
import avatar6 from "../assets/images/avatar6.png";
import avatar7 from "../assets/images/avatar7.png";
export const fetchOverviewData = async () => {
  return [
    {
      id: 1,
      title: "Total Drivers",
      value: 2200,
      change: "+12%",
      changeColor: "text-green-500",
    },
    { id: 2, title: "Online Drivers", value: 320 },
    { id: 3, title: "Trips in Progress", value: 76 },
    {
      id: 4,
      title: "Today's New Sign-ups",
      value: 17,
      change: "+6%",
      changeColor: "text-green-500",
    },
  ];
};

export const fetchApprovalRequests = async () => {
  return [
    {
      id: 1,
      name: "Nesredin Haji",
      date: "04/17/23 8:25 PM",
      avatar: person1,

      carType: "XL Van",
    },
    {
      id: 2,
      name: "Nesredin Haji",
      date: "04/17/23 8:25 PM",
      avatar: person1,

      carType: "Boda Boda",
    },
    {
      id: 3,
      name: "Nesredin Haji",
      date: "04/17/23 8:25 PM",
      avatar: person1,

      carType: "Economy",
    },
  ];
};

export const fetchDriverCategories = async () => {
  return [
    { id: "all", label: "All Drivers", count: 2097 },
    { id: "economy", label: "Economy", count: 793 },
    { id: "comfort", label: "Comfort", count: 419 },
    { id: "xlvan", label: "XL Van", count: 152 },
    { id: "delivery", label: "Delivery", count: 373 },
  ];
};

export const fetchDrivers = async () => {
  return [
    {
      id: "012321",
      name: "Esmaeil Abdukadir",
      avatar: avatar1,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012322",
      name: "Sumeya Abdukadir",
      avatar: avatar2,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012323",
      name: "Zyin Abdukadir",
      avatar: avatar3,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Offline",
    },
    {
      id: "012324",
      name: "Mensur Mohammed",
      avatar: avatar4,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012325",
      name: "Belgi Coffie (Nayi)",
      avatar: avatar5,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012326",
      name: "Belgi Coffie (Nayi)",
      avatar: avatar6,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012327",
      name: "Belgi Coffie (Nayi)",
      avatar: avatar7,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Suspended",
    },
    {
      id: "012321",
      name: "Esmaeil Abdukadir",
      avatar: avatar1,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012322",
      name: "Sumeya Abdukadir",
      avatar: avatar2,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012323",
      name: "Zyin Abdukadir",
      avatar: avatar3,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Offline",
    },
    {
      id: "012324",
      name: "Mensur Mohammed",
      avatar: avatar4,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012325",
      name: "Belgi Coffie (Nayi)",
      avatar: avatar5,
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
  ];
};
