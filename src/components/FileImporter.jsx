import React, { useContext, useState } from "react";
import { VsCloneContext } from "./VsCloneContext";

export default function FileImporter({
  buttonLabel = "Import Folder",
  button = true,
}) {
  const [folderStructure, setFolderStructure] = useState([]);
  const { setFiles } = useContext(VsCloneContext);
  const excludedFolders = ["node_modules", ".git", "dist", "build"];

  const readFileContent = async (fileHandle) => {
    const file = await fileHandle.getFile();
    return file.text();
  };

  const processDirectory = async (directoryHandle) => {
    const folderData = [];
    for await (const entry of directoryHandle.values()) {
      if (entry.kind === "directory" && excludedFolders.includes(entry.name)) {
        continue;
      }

      if (entry.kind === "file") {
        const content = await readFileContent(entry);
        folderData.push({
          type: "file",
          name: entry.name,
          content,
        });
      } else if (entry.kind === "directory") {
        const subFolder = await processDirectory(entry);
        folderData.push({
          type: "folder",
          name: entry.name,
          files: subFolder.files,
          folders: subFolder.folders,
        });
      }
    }
    return {
      files: folderData.filter((item) => item.type === "file"),
      folders: folderData.filter((item) => item.type === "folder"),
    };
  };

  const handleFolderImport = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      const result = await processDirectory(directoryHandle);
      setFolderStructure(result.folders);
      setFiles(result.folders.concat(result.files));
    } catch (error) {
      console.error("Erro ao selecionar a pasta: ", error);
    }
  };

  return (
    <div>
      {button ? (
        <button
          onClick={handleFolderImport}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {buttonLabel}
        </button>
      ) : (
        <span onClick={handleFolderImport} className="cursor-pointer pr-2">
          {buttonLabel}
        </span>
      )}
    </div>
  );
}
