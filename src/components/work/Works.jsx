import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { soloProjects as soloProjectsData } from "../../translations/en/data";
import { projectsNav } from "./Data";
import { Fade } from "react-awesome-reveal";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Works = ({ projects }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { t } = useTranslation("translation");
  const soloProjects = t("soloProjects", { returnObjects: true }) || [];

  const projectsWithImages = soloProjects.map((project, index) => ({
    ...project,
    image: soloProjectsData[index]?.img || project.image
  }));

  const [item, setItem] = useState({ name: "all" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setFilteredProjects(projectsWithImages);
    } else {
      const newProjects = projectsWithImages.filter((project) =>
        project.categories && project.categories.includes(item.name)
      );
      setFilteredProjects(newProjects);
    }
  }, [item, projectsWithImages]);

  const handleFilter = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <Fade direction="down" duration={2000}>
        <div className="work_filters">
          {projectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleFilter(e, index);
                }}
                className={`${active === index ? "active-work" : ""} work_item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </Fade>

      <div className="work_container container grid">
        {filteredProjects.map((pro) => (
          <WorkItems key={pro.id} pro={pro} />
        ))}
      </div>
    </div>
  );
};

const WorkItems = ({ pro }) => {
  return (
    <div className="work_card" key={pro.id}>
      <div className="services_container container grid">
        <img src={pro.image} alt={pro.title} className="work_img" />
        <p>{pro.description}</p>
        <div>
          <h2 className="work_title">{pro.title}</h2>
        </div>
        <div>
          <img src={`https://skillicons.dev/icons?i=${pro.technologies}`} alt={pro.technologies} />
        </div>
      </div>

      <div className="button-container">
        {pro.code && (
          <a
            href={pro.code}
            target="_blank"
            className="btn btn-primary"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
        {/* YouTube button removed */}
        {pro.livedemo && (
          <a
            href={pro.livedemo}
            target="_blank"
            className="btn btn-primary video-btn"
            rel="noreferrer"
          >
            <i className="fas fa-desktop"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Works;
