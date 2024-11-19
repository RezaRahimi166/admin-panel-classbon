import React, { useEffect, useRef, useState } from "react";
import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);

  const ref = useRef();

  const checkIfClickOutSide = (e) => {
    if (show && ref.current && !ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickOutSide);

    return () => {
      document.removeEventListener("mousedown", checkIfClickOutSide);
    };
  }, [show]);

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
        <img src={usFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a className="dropdown-item fw-bolder" style={{ textAlign: "right" }}>
          <img src={faFlag} alt="persian" width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a className="dropdown-item fw-bolder" style={{ textAlign: "right" }}>
          <img src={usFlag} alt="english" width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
