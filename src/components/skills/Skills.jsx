import React from "react";
import { Fade } from "react-awesome-reveal";
import "./skills.css";
import SkillsGroup from "./SkillsGroup";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("translation");

  const skillCategories = [
    { category: "frontEndrow1", category2: "frontEndrow2", title: t("mes_competence.front_title") },
    { category: "backEndrow1", category2: "backEndrow2", title: t("mes_competence.back_title") },
    { category: "mobilerow1", category2: "mobilerow2", title: t("mes_competence.mobile_title") }
  ];
  

  return (
    <section className="skills section" id="skills">
      <Fade direction="down">
        <h2 className="section_title">{t("mes_competence.titre")}</h2>
        <span className="section_subtitle"> {t("mes_competence.sous-titre")}</span>
      </Fade>
      <div className="skills_container container grid">
        {skillCategories.map((skillCategory, index) => (
          <Fade direction={index % 2 === 0 ? "left" : "right"} duration={2000} key={index}>
            <SkillsGroup
              category={skillCategory.category}
              category2={skillCategory.category2}
              title={skillCategory.title}
            />
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Skills;
