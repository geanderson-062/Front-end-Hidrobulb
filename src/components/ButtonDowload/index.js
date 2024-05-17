import React from "react";

function DownloadButton({ handleDownload }) {
  return (
    <div
      style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}
    >
      <button
        className="btn waves-effect waves-light green text-white"
        onClick={handleDownload}
      >
        Baixar dados para Simulação.
      </button>
    </div>
  );
}

export default DownloadButton;
