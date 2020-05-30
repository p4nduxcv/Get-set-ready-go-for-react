import React from "react";
import ReactDOM from "react-dom";

export default function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      <h1>sl srilanka</h1>
    </div>,
    document.getElementById("portal-pandu")
  );
}
