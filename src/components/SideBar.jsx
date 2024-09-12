import React from "react";
import SidebarIcon from "./SidebarIconFormat";
import { CodeIcon, FileIcon, SearchIcon, SettingsIcon } from "lucide-react";

export default function SideBar() {
  return (
    <div className="flex flex-col w-16 bg-gray-900">
      <SidebarIcon icon={<FileIcon />} />
      <SidebarIcon icon={<SearchIcon />} />
      <SidebarIcon icon={<CodeIcon />} />
      <SidebarIcon icon={<SettingsIcon />} />
    </div>
  );
}
