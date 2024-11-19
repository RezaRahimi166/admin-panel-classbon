import React, { useEffect, useRef, useState } from "react";
import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";
import { useAppContext } from "../contexts/app/app-context";
import { changeLanguage } from "i18next";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const { language, changeLanguage } = useAppContext();

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
      <a
        className="nav-flag dropdown-toggle d-flex align-items-center gap-2"
        onClick={() => setShow(true)}
      >
        <img src={language === "fa" ? faFlag : usFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("fa")}
        >
          <img src={faFlag} alt="persian" width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a
          className="dropdown-item fw-bolder"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("en")}
        >
          <img src={usFlag} alt="english" width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
