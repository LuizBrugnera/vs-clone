import React, { useContext } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { VsCloneContext } from "./VsCloneContext";

export default function DownloadFolderButton() {
  const { files } = useContext(VsCloneContext);

  // Função para adicionar arquivos ao ZIP
  const addFilesToZip = (zip, folderData, parentFolder) => {
    folderData.forEach((item) => {
      if (item.type === "folder") {
        const folder = parentFolder.folder(item.name);
        addFilesToZip(zip, item.files, folder);
        if (item.folders) {
          addFilesToZip(zip, item.folders, folder);
        }
      } else if (item.type === "file") {
        parentFolder.file(item.name, item.content);
      }
    });
  };

  // Função para gerar e baixar o ZIP
  const handleDownload = () => {
    const zip = new JSZip();
    addFilesToZip(zip, files, zip);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "project.zip");
    });
  };

  return (
    <div
      onClick={handleDownload}
      className="pr-5 text-green-400 font-bold cursor-pointer"
    >
      {" "}
      Download Project
    </div>
  );
}
