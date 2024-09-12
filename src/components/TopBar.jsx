import { CodeIcon, FolderIcon } from "lucide-react";
import React from "react";
import FileImporter from "./FileImporter";
import DownloadFolderButton from "./DownloadFolderButton";

export default function TopBar() {
  return (
    <div className="flex w-full justify-between items-center px-4 py-2 bg-gray-800 select-none">
      <div className="flex space-x-2">
        <div className="pr-4 flex items-center">
          <CodeIcon className="w-4 h-4 " />
        </div>
        <FileImporter button={false} />
        <span className="cursor-pointer pr-2">File</span>
        <span className="cursor-pointer pr-2">Edit</span>
        <span className="cursor-pointer pr-2">View</span>
        <span className="cursor-pointer pr-2">Go</span>
        <span className="cursor-pointer pr-2">Run</span>
        <span className="cursor-pointer pr-2">Terminal</span>
        <span className="cursor-pointer pr-2">Help</span>
      </div>
      <DownloadFolderButton />
    </div>
  );
}
