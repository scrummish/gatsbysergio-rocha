import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { FiRefreshCcw, FiSearch, FiCheckSquare } from "react-icons/fi";

const InformationSection = () => {
    return (
        <section class="more-info-section">
        <div class="row">
          <div class="col-1-of-4">
            <div class="info-box">
              <FiCheckSquare class="info-box__icon"/>
              <h3 class="tertiary-heading utility-margin-bottom-small">testing</h3>
              <p class="info-box__text">I save future headaches by avoiding bugs with well tested code. (jest, enzyme, mocha, chai)</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="info-box">
              <FiRefreshCcw class="icon-basic-elaboration-folder-refresh info-box__icon"/>              <h3 class="tertiary-heading utility-margin-bottom-small">Modularity</h3>
              <p class="info-box__text">Whether styling (sass, less, BEM) or DOM manipulation, I write modular, reusable, and scalable code.</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="info-box">
              <GoChecklist class="icon-basic-elaboration-document-check info-box__icon"/>
              <h3 class="tertiary-heading utility-margin-bottom-small">Documentation</h3>
              <p class="info-box__text">Well documented easy to understand code makes life easier for everyone.</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div class="info-box">
              <FiSearch class="info-box__icon"/>
              <h3 class="tertiary-heading utility-margin-bottom-small">SEO</h3>
              <p class="info-box__text">Search Engine Optimization is always a priority! All my work adheres to seo best practices.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default InformationSection;