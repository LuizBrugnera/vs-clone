import { ArrowRightIcon, FolderIcon } from "lucide-react";
import React, { Fragment, useState } from "react";
import File from "./File";

export default function Folder({ name, files, folders, path }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <li
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <ArrowRightIcon className="w-4 h-4" />
        ) : (
          <ArrowRightIcon className="w-4 h-4 transform rotate-90" />
        )}
        <FolderIcon className="w-4 h-4" />
        <span>{name}</span>
      </li>
      {isOpen && (
        <li className="pl-4 space-y-2 ">
          {folders.map((folder) => (
            <Folder
              key={folder.name}
              name={folder.name}
              files={folder.files}
              folders={folder.folders}
              path={path + "/" + folder.name}
            />
          ))}
          {files.map((file) => (
            <File
              key={file.name}
              name={file.name}
              path={path + "/" + file.name}
            />
          ))}
        </li>
      )}
    </Fragment>
  );
}
