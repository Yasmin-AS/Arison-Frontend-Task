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
      avatar: "https://i.pravatar.cc/40",

      carType: "XL Van",
    },
    {
      id: 2,
      name: "Nesredin Haji",
      date: "04/17/23 8:25 PM",
      avatar: "https://i.pravatar.cc/40",

      carType: "Boda Boda",
    },
    {
      id: 3,
      name: "Nesredin Haji",
      date: "04/17/23 8:25 PM",
      avatar: "https://i.pravatar.cc/40",

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
      avatar: "https://i.pravatar.cc/40",
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012322",
      name: "Sumeya Abdukadir",
      avatar: "https://i.pravatar.cc/41",
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012323",
      name: "Zyin Abdukadir",
      avatar: "https://i.pravatar.cc/42",
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Offline",
    },
    {
      id: "012324",
      name: "Mensur Mohammed",
      avatar: "https://i.pravatar.cc/43",
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Available",
    },
    {
      id: "012325",
      name: "Belgi Coffie (Nayi)",
      avatar: "https://i.pravatar.cc/44",
      phone: "0912873465",
      carType: "Boda Boda",
      dateCreated: "04/17/23 8:25 PM",
      status: "Suspended",
    },
  ];
};
