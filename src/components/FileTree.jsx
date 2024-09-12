import { FileIcon, FolderIcon } from "lucide-react";
import File from "./File";
import Folder from "./Folder";
import { VsCloneContext } from "./VsCloneContext";
import { useContext } from "react";
import FileImporter from "./FileImporter";

export default function FileTree() {
  const { files } = useContext(VsCloneContext);
  return (
    <ul className="space-y-2 select-none">
      {files.map((file, index) =>
        file.type === "folder" ? (
          <Folder
            key={file.name + index}
            name={file.name}
            files={file.files}
            folders={file.folders}
            path={file.name}
          />
        ) : (
          <File key={file.name} name={file.name} path={file.name} />
        )
      )}
      {files.length === 0 && (
        <li>
          <FileImporter buttonLabel="Import Folder" button={true} />
        </li>
      )}
    </ul>
  );
}
