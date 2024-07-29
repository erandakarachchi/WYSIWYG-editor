import React, { useRef } from "react";

type Command = {
  command: string;
  value?: string;
};

const WYSIWYGEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const executeCommand = ({ command, value }: Command) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const bold = () => {
    executeCommand({ command: "bold" });
  };

  return (
    <div className="container">
      <h1 className="header">WYSIWYG Editor</h1>
      <div className="toolbar">
        <button onClick={bold}>Bold</button>
      </div>
      <div ref={editorRef} className="editor" contentEditable></div>
    </div>
  );
};

export default WYSIWYGEditor;
