import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

import "./qualification.css";

const Qualification = () => {
  const { t } = useTranslation("translation");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const educationData = t("education", { returnObjects: true });
  const experienceData = t("experience2", { returnObjects: true });

  return (
    <section className="qualification section">
      <Fade direction="down">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>
      </Fade>

      <div className="qualification_container container">
        <Fade duration={2000}>
          <div className="qualification_tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
            >
              <i className="uil uil-briefcase-alt qualification_icon"></i>
              Experience
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={2500}>
          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {educationData.map((edu, index) => (
                <div className="qualification_data" key={index}>
                  <div>
                    <h3 className="qualification_title">{edu.title}</h3>
                    <span className="qualification_subtitle">
                      {edu.institution}
                    </span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt"></i>
                      {edu.duration}
                    </div>
                  </div>
                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              {experienceData.map((exp, index) => (
                <div className="qualification_data" key={index}>
                  <div>
                    <h3 className="qualification_title">{exp.title}</h3>
                    <span className="qualification_subtitle">
                      {exp.institution}
                    </span>
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt"></i>
                      {exp.duration}
                    </div>
                  </div>
                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Qualification;
