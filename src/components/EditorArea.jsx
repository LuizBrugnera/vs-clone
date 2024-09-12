import React, { useContext, useEffect, useState } from "react";
import { VsCloneContext } from "./VsCloneContext";
import { Editor } from "@monaco-editor/react";

export default function EditorArea() {
  const { fileSelected, updateByPath, getByPath, findFileLanguage, files } =
    useContext(VsCloneContext);
  const [file, setFile] = useState(getByPath(fileSelected));
  const [text, setText] = useState(file?.content || "");
  const [language, setLanguage] = useState(
    findFileLanguage(file?.name) || "javascript"
  );

  useEffect(() => {
    updateByPath(fileSelected, text);
  }, [text]);

  useEffect(() => {
    if (files.length === 0) {
      setText(
        "# Você pode importar arquivos do seu computador clicando no botão 'Import Folder'"
      );
    }
  }, []);

  useEffect(() => {
    if (fileSelected) {
      const fileFound = getByPath(fileSelected);
      setText(fileFound.content);
      setFile(fileFound);
      setLanguage(findFileLanguage(fileFound.name));
    }
  }, [fileSelected]);

  return (
    <div className="w-full h-500">
      {/* TopBar component */}
      <div className="flex-1 p-4 overflow-auto bg-gray-900">
        <div className="w-full h-[730px] border-l-4 border-l-gray-700 bg-transparent rounded overflow-hidden">
          <Editor
            height="100%"
            language={language}
            value={text}
            onChange={(value, event) => setText(value)}
            theme="vs-dark"
            options={{
              minimap: { enabled: true },
              scrollbar: {
                vertical: "auto",
                horizontal: "auto",
              },
              scrollBeyondLastLine: false,
            }}
          />
        </div>
      </div>
    </div>
  );
}
