import { TerminalIcon } from "lucide-react";

import FileTree from "./FileTree";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import EditorArea from "./EditorArea";

export default function VsClonePage() {
  return (
    <div className="flex flex-col h-screen text-gray-300 bg-gray-900">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        {/* File Explorer */}
        <div className="w-64 p-4 overflow-auto bg-gray-800">
          <h2 className="mb-2 text-sm font-semibold">EXPLORER</h2>
          <FileTree />
        </div>

        {/* Editor Area */}
        <EditorArea />
      </div>

      {/* Bottom Panel */}
      <div className="h-32 p-2 overflow-auto bg-gray-800">
        <div className="flex items-center mb-2 space-x-2">
          <TerminalIcon className="w-4 h-4" />
          <span className="text-sm font-semibold">TERMINAL</span>
        </div>
        <pre className="font-mono text-xs text-green-400">
          $ npm start Starting the development server...
        </pre>
      </div>
    </div>
  );
}
