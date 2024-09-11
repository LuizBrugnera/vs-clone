import { FileIcon, FolderIcon } from "lucide-react";

export default function FileTree() {
  return (
    <ul className="space-y-2">
      <li className="flex items-center space-x-2 cursor-pointer">
        <FolderIcon className="w-4 h-4" />
        <span>src</span>
      </li>
      <li className="pl-4 space-y-2">
        <div className="flex items-center space-x-2 cursor-pointer">
          <FileIcon className="w-4 h-4" />
          <span>index.js</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FileIcon className="w-4 h-4" />
          <span>styles.css</span>
        </div>
      </li>
      <li className="flex items-center space-x-2 cursor-pointer">
        <FileIcon className="w-4 h-4" />
        <span>README.md</span>
      </li>
    </ul>
  );
}
