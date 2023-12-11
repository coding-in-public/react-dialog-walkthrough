import { useRef, useState } from "react";
import "./App.css";

import ModalContent1 from "./components/ModalContent1";
import ModalContent2 from "./components/ModalContent2";
import Dialog from "./components/Dialog";

function App() {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <p className="read-the-docs">Let’s create some dialogs</p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => {
            setDialogContent(<ModalContent1 />);
            toggleDialog();
          }}
        >
          Dialog 1
        </button>
        <button
          onClick={() => {
            setDialogContent(<ModalContent2 />);
            toggleDialog();
          }}
        >
          Dialog 2
        </button>
        <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
          {dialogContent}
        </Dialog>
      </div>
    </>
  );
}

export default App;
