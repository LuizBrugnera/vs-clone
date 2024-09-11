import React from "react";

export default function EditorArea() {
  const [text, setText] = React.useState(`
function helloWorld() {
    console.log("Hello, VSCode clone!");
}

helloWorld();`);

  return (
    <div className="w-full h-500">
      {/* TopBar component */}
      <div className="flex-1 p-4 overflow-auto bg-gray-900">
        <pre className="font-mono text-sm">
          <code>
            <textarea
              className=" border-l-4 border-l-gray-700 w-full h-[730px] resize-none overflow-auto bg-transparent rounded p-2 text-gray-300 outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </code>
        </pre>
      </div>
    </div>
  );
}
