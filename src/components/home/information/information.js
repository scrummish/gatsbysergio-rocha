import React from "react";
// import { FaRegCheckSquare } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { FiRefreshCcw, FiSearch, FiCheckSquare } from "react-icons/fi";

const InformationSection = () => {
    return (
        <section className="more-info-section">
        <div className="row">
          <div className="col-1-of-4">
            <div className="info-box">
              <FiCheckSquare className="info-box__icon"/>
              <h3 className="tertiary-heading utility-margin-bottom-small">testing</h3>
              <p className="info-box__text">I save future headaches by avoiding bugs with well tested code. (jest, enzyme, mocha, chai)</p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="info-box">
              <FiRefreshCcw className="icon-basic-elaboration-folder-refresh info-box__icon"/>              <h3 className="tertiary-heading utility-margin-bottom-small">Modularity</h3>
              <p className="info-box__text">Whether styling (sass, less, BEM) or DOM manipulation, I write modular, reusable, and scalable code.</p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="info-box">
              <GoChecklist className="icon-basic-elaboration-document-check info-box__icon"/>
              <h3 className="tertiary-heading utility-margin-bottom-small">Documentation</h3>
              <p className="info-box__text">Well documented easy to understand code makes life easier for everyone.</p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="info-box">
              <FiSearch className="info-box__icon"/>
              <h3 className="tertiary-heading utility-margin-bottom-small">SEO</h3>
              <p className="info-box__text">Search Engine Optimization is always a priority! All my work adheres to seo best practices.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InformationSection;