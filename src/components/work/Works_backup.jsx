import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { soloProjects as soloProjectsData } from "../../translations/en/data";
import { projectsNav } from "./Data";
import { Fade } from "react-awesome-reveal";

const Works_backup = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const { t } = useTranslation("translation");
  const soloProjects = t("soloProjects", { returnObjects: true }) || [];

  // Fusionner soloProjects et soloProjectsData pour garantir que les données correspondent correctement
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

  const WorkItems = ({ pro }) => {
    return (
      <div className="work_card" key={pro.id}>
        <div className="services_container container grid">
          <img src={pro.image} alt={pro.title} className="work_img" />
          
          <h2 className="work_title">{pro.description}</h2>
          <p>{pro.title}</p>
          <p>{pro.technologies}</p>
        </div>

        <div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            youtube
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div>
            {pro.code && (
              <a
                href={pro.code}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                <i className="uil uil-code-branch"></i> Code
              </a>
            )}
            {pro.video && (
              <a
                href={pro.video}
                target="_blank"
                className="btn btn-secondary"
                rel="noreferrer"
              >
                <i className="uil uil-video"></i> Video & Screens
              </a>
            )}
            {pro.livedemo && (
              <a
                href={pro.livedemo}
                target="_blank"
                className="btn btn-primary video-btn"
                rel="noreferrer"
              >
                <i className="uil uil-desktop"></i> Live Demo
              </a>
            )}
          </div>
        </div>

        <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
          <div className="services_modal-content">
            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
            <h3 className="services_modal-title">{pro.description_title}</h3>
            <div className="services_modal-description">
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/gUDaihpabIg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
            <ul className="services_modal-services grid">
              <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">language</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
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
                key={index}>
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

export default Works_backup;
