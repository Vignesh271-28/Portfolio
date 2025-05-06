import React, { useEffect } from "react";
import "./Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function Popup({ message, onClose, type = "success", duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="popup-icon success"
          />
        );
      case "error":
        return (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="popup-icon error"
          />
        );
      case "info":
      default:
        return (
          <FontAwesomeIcon icon={faInfoCircle} className="popup-icon info" />
        );
    }
  };

  return (
    <div className="popup-overlay fade-in">
      <div className={`popup-box ${type}`}>
        {getIcon()}
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
