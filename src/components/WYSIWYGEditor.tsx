import { useRef } from "react";

import IconButton from "./ui/IconButton";

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

  const italic = () => {
    executeCommand({ command: "italic" });
  };

  const underline = () => {
    executeCommand({ command: "underline" });
  };

  const strikethrough = () => {
    executeCommand({ command: "strikethrough" });
  };

  const justify = () => {
    executeCommand({ command: "justifyFull" });
  };

  const alignLeft = () => {
    executeCommand({ command: "justifyLeft" });
  };

  const alignRight = () => {
    executeCommand({ command: "justifyRight" });
  };

  const alignCenter = () => {
    executeCommand({ command: "justifyCenter" });
  };

  const unorderedList = () => {
    executeCommand({ command: "insertUnorderedList" });
  };

  const orderedList = () => {
    executeCommand({ command: "insertOrderedList" });
  };

  const undo = () => {
    executeCommand({ command: "undo" });
  };

  const getCurrentSelection = () => {
    const selection = window.getSelection();
    console.log("Selection ", selection);
  };

  return (
    <div className="container">
      <h1 className="header">WYSIWYG Editor</h1>
      <div className="toolbar">
        <div className="toolbar-primary-controllers">
          <IconButton icon="fas fa-bold" onClick={bold} />
          <IconButton icon="fas fa-italic" onClick={italic} />
          <IconButton icon="fas fa-underline" onClick={underline} />
          <IconButton icon="fas fa-strikethrough" onClick={strikethrough} />
          <IconButton icon="fas fa-align-left" onClick={alignLeft} />
          <IconButton icon="fas fa-align-right" onClick={alignRight} />
          <IconButton icon="fas fa-align-center" onClick={alignCenter} />
          <IconButton icon="fas fa-align-justify" onClick={justify} />
          <IconButton icon="fas fa-list" onClick={unorderedList} />
          <IconButton icon="fas fa-list-ol" onClick={orderedList} />
        </div>
        <div className="toolbar-secondary-controllers">
          <IconButton icon="fas fa-undo" onClick={undo} />
        </div>
      </div>
      <div className="editor-container">
        <div
          ref={editorRef}
          className="editor"
          contentEditable
          onKeyUp={getCurrentSelection}
          onMouseUp={getCurrentSelection}
        ></div>
      </div>
    </div>
  );
};

export default WYSIWYGEditor;
