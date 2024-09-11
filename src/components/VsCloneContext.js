import React, { createContext, useState } from "react";

export const VsCloneContext = createContext();

export const VsCloneProvider = ({ children }) => {
  const [files, setFiles] = useState([
    {
      name: "index.js",
      content: "console.log('Hello, world!');",
    },
    {
      name: "styles.css",
      content: "body { background-color: #f0f0f0; }",
    },
    {
      name: "README.md",
      content: "# VSCode Clone\n\nA simple clone of VSCode.",
    },
  ]);
  const [sidebarSelected, setSidebarSelected] = useState("files");
  const [fileSelected, setFileSelected] = useState(files[0]);
  const [fileContent, setFileContent] = useState(
    "console.log('Hello, world!');"
  );
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <VsCloneContext.Provider
      value={{
        files,
        setFiles,
        sidebarSelected,
        setSidebarSelected,
        fileSelected,
        setFileSelected,
        fileContent,
        setFileContent,
      }}
    >
      {children}
    </VsCloneContext.Provider>
  );
};
