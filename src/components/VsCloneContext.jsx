import React, { createContext, useState } from "react";

export const VsCloneContext = createContext();

export const VsCloneProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [sidebarSelected, setSidebarSelected] = useState("files");
  const [fileSelected, setFileSelected] = useState("");

  const getByPath = (path, localFiles = files) => {
    const [current, ...rest] = path.split("/");
    let file;

    file = localFiles.find((f) => f.name === current);

    if (!file) {
      return null;
    }

    if (rest.length === 0) {
      return file;
    }
    const result = getByPath(rest.join("/"), file.files || file.folders);
    if (result !== null) {
      return result;
    } else {
      return getByPath(rest.join("/"), file.folders);
    }
  };

  const updateByPath = (path, content, localFiles = files) => {
    const [current, ...rest] = path.split("/");
    let file;

    file = localFiles.find((f) => f.name === current);

    if (!file) {
      return null;
    }

    if (rest.length === 0) {
      file.content = content;
      return;
    }

    const result = updateByPath(
      rest.join("/"),
      content,
      file.files || file.folders
    );
    if (result !== null) {
      return result;
    } else {
      return updateByPath(rest.join("/"), content, file.folders);
    }
  };

  const findFileLanguage = (name) => {
    const languageMap = {
      js: "javascript",
      ts: "typescript",
      html: "html",
      css: "css",
      json: "json",
      py: "python",
      c: "c",
      cpp: "cpp",
      cs: "csharp",
      java: "java",
      php: "php",
      go: "go",
      rb: "ruby",
      rs: "rust",
      swift: "swift",
      sql: "sql",
      md: "markdown",
      xml: "xml",
      yaml: "yaml",
      sh: "shell",
      ps1: "powershell",
      jsx: "javascript",
      tsx: "typescript",
      lua: "lua",
    };
    if (!name) return "plaintext";
    const extension = name.split(".").pop();
    return languageMap[extension] || "plaintext";
  };

  return (
    <VsCloneContext.Provider
      value={{
        files,
        setFiles,
        sidebarSelected,
        setSidebarSelected,
        fileSelected,
        setFileSelected,
        getByPath,
        updateByPath,
        findFileLanguage,
      }}
    >
      {children}
    </VsCloneContext.Provider>
  );
};
