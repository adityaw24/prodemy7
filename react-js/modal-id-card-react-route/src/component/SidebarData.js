import React from "react";
import * as Icon from "react-icons/md";

const SidebarData = [
  {
    title: "Home",
    icon: <Icon.MdHome />,
    path: "/",
    className: "text-white",
  },
  {
    title: "ID Card",
    icon: <Icon.MdAssignmentInd />,
    path: "/generateIDCard",
    className: "text-white",
  },
];

export default SidebarData;
