import { FileIcon } from "lucide-react";
import React from "react";
import { VsCloneContext } from "./VsCloneContext";
import { useContext } from "react";

export default function File({ name, path }) {
  const { setFileSelected } = useContext(VsCloneContext);
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <FileIcon className="w-4 h-4" />
      <span onClick={() => setFileSelected(path)}>{name}</span>
    </div>
  );
}
