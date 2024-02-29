import React from "react";

const NavStylesModal = ({ styles, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <pre>{JSON.stringify(styles, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NavStylesModal;
