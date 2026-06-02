import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const SkillsGroup = ({ category, category2, title }) => {
  const { t } = useTranslation("translation");

  const skills = t(`mes_competence.${category}`, { returnObjects: true });
  const skills2 = t(`mes_competence.${category2}`, { returnObjects: true });

  return (
    <div className="skills_content">
      <Fade direction="down" duration={2300}>
        <h3 className="skills_title">{title}</h3>
      </Fade>

      <Fade duration={2600}>
        <div className="skills_box">
          <div className="skills_group">
            {skills.map((skill, index) => (
              <div className="skills_data" key={index}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">{skill.skills_name}</h3>
                  <span className="skills_level">{skill.skills_level}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="skills_group">
            {skills2.map((skill, index) => (
              <div className="skills_data" key={index}>
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills_name">{skill.skills_name}</h3>
                  <span className="skills_level">{skill.skills_level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SkillsGroup;
