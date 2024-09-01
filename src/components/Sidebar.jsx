import { useState } from "react";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const data = [
    { name: "customer", icon: "/customer.png" },
    { name: "Reports", icon: "/reports.png" },
    { name: "Settings", icon: "/settings.png" },
    { name: "Invoice", icon: "/invoice.png" },
    { name: "Operation Reports", icon: "/operations.png" },
    { name: "Activity Notifications", icon: "/notifications.png" },
    { name: "POD", icon: "/pod.png" },
    { name: "Bookings", icon: "/bookings.png" },
  ];

  const renderIcons = () =>
    data.map((item) => (
      <div key={item.name}>
        <img src={item.icon} alt={item.name} width={30} height={30} />
      </div>
    ));

  const renderData = () =>
    data.map((item) => (
      <div key={item.icon} className="flex gap-4 items-center">
        <img src={item.icon} alt={item.name} width={30} height={30} />
        <p className="font-semibold text-sm text-gray-400">{item.name}</p>
      </div>
    ));

  return (
    <div
      className={`flex flex-col gap-10 bg-[#182125] ${
        show ? "w-28" : "w-1/6"
      }  pl-8 rounded-md py-5 border-l border-t border-l-[#6b7280] border-t-[#6b7280] border-b-8 border-r-8 border-r-[#6b7280] border-b-[#6b7280]`}
    >
      <div
        onClick={() => {
          setShow(!show);
        }}
        className={`cursor-pointer flex ${show ? "" : "justify-end px-10 "}`}
      >
        <img src="/bar.png" alt="Toggle Sidebar" width={30} height={30} />
      </div>
      {show ? renderIcons() : renderData()}
    </div>
  );
};

export default Sidebar;
