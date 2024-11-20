import { t } from "i18next";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              © 2024 - <a className="text-muted">{t("classbon")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
