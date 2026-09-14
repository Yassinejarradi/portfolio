import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { projectsNav } from "./Data";
import { projectMedia } from "./projectMedia";
import { projectDetails } from "./projectDetails";
import ProjectModal from "./ProjectModal";
import { Fade } from "react-awesome-reveal";
import "@fortawesome/fontawesome-free/css/all.min.css";

// ─── Outer list ──────────────────────────────────────────────────────────────

const Works = () => {
  const { t } = useTranslation("translation");
  const soloProjects = t("soloProjects", { returnObjects: true }) || [];

  const [item, setItem] = useState({ name: "all" });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setFilteredProjects(soloProjects);
    } else {
      setFilteredProjects(
        soloProjects.filter(
          (p) => p.categories && p.categories.includes(item.name)
        )
      );
    }
    // t is stable while the language doesn't change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, t]);

  const handleFilter = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {projectsNav.length > 1 && (
        <Fade direction="down" duration={2000}>
          <div className="work_filters">
            {projectsNav.map((navItem, index) => (
              <span
                key={index}
                onClick={(e) => handleFilter(e, index)}
                className={`${active === index ? "active-work" : ""} work_item`}
              >
                {navItem.name}
              </span>
            ))}
          </div>
        </Fade>
      )}

      <div className="work_feed container">
        {filteredProjects.map((pro) => (
          <Fade key={pro.id} direction="up" duration={600} triggerOnce>
            <WorkCard pro={pro} />
          </Fade>
        ))}
      </div>
    </div>
  );
};

// ─── Individual card ──────────────────────────────────────────────────────────

const WorkCard = ({ pro }) => {
  const roles = Array.isArray(pro.roles) ? pro.roles : [];
  const [selectedRole, setSelectedRole] = useState(0);
  const [credsVisible, setCredsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const details = projectDetails[pro.id] || null;
  const isFeatured = pro.id === 1;
  const currentRole = roles[selectedRole];

  const handleRoleClick = (index) => {
    setSelectedRole(index);
    setCredsVisible(false);
  };

  const fallback = Object.values(projectMedia)[0];
  const mediaSrc =
    currentRole && projectMedia[currentRole.mediaKey]
      ? projectMedia[currentRole.mediaKey]
      : fallback;

  const isVideo = currentRole?.mediaType === "mp4";

  return (
    <>
      <div className={`work_card${isFeatured ? " work_card--featured" : ""}`}>

        {/* Featured banner — SupportDesk only */}
        {isFeatured && (
          <div className="work_featured-banner">
            <div className="work_featured-left">
              <span className="work_featured-badge">
                <i className="bx bx-rocket"></i>
                Mon Produit SaaS
              </span>
              <span className="work_featured-pills">
                <span>Multi-tenant</span>
                <span>B2B</span>
                <span>Monetizable</span>
              </span>
            </div>
            <span className="work_featured-stats">
              171 tests · 4 rôles · 7 statuts
            </span>
          </div>
        )}

        {/* 1 ── Title + description + optional links ── */}
        <div className="work_card-title-row">
          <div>
            <h2 className={`work_title${isFeatured ? " work_title--featured" : ""}`}>{pro.title}</h2>
            <p className="work_card-desc">{pro.description}</p>
          </div>

          {(pro.code || pro.livedemo) && (
            <div className="work_header-links">
              {pro.code && (
                <a
                  href={pro.code}
                  target="_blank"
                  rel="noreferrer"
                  className="work_link-icon"
                  title="Source code"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
              {pro.livedemo && (
                <a
                  href={pro.livedemo}
                  target="_blank"
                  rel="noreferrer"
                  className="work_link-icon work_link-demo"
                  title="Live demo"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
          )}
        </div>

        {/* 2 ── Tech stack icons ── */}
        {pro.technologies && (
          <div className="work_tech">
            <img
              src={`https://skillicons.dev/icons?i=${pro.technologies}`}
              alt={pro.technologies}
            />
          </div>
        )}

        {/* 3 ── Role selector (credentials tooltip lives here) ── */}
        {roles.length > 0 && (
          <div className="work_roles">
            {roles.map((role, index) => (
              <div key={index} className="work_role-item">
                <button
                  className={`work_role-btn${
                    selectedRole === index ? " work_role-active" : ""
                  }`}
                  onClick={() => handleRoleClick(index)}
                >
                  {role.label}
                </button>

                {selectedRole === index && (
                  <div className="work_creds-wrap">
                    <button
                      className={`work_lock-btn${
                        credsVisible ? " work_lock-active" : ""
                      }`}
                      onClick={() => setCredsVisible((v) => !v)}
                      aria-label="Toggle credentials"
                      title="Voir les identifiants"
                    >
                      🔐
                    </button>

                    {credsVisible && currentRole && (
                      <div className="work_creds-tooltip">
                        <span>
                          <i className="bx bx-user" aria-hidden="true"></i>
                          {currentRole.username}
                        </span>
                        <span>
                          <i className="bx bx-lock-alt" aria-hidden="true"></i>
                          {currentRole.password}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 4 ── Media viewer (only when roles exist) ── */}
        {roles.length > 0 && <div className="work_media-wrap">
          {isVideo ? (
            <video
              key={`${pro.id}-${selectedRole}`}
              className="work_media work_media-enter"
              autoPlay
              muted
              playsInline
              controls
              controlsList="nodownload"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={mediaSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              key={`${pro.id}-${selectedRole}`}
              src={mediaSrc}
              alt={`${pro.title}${currentRole ? ` – ${currentRole.label}` : ""}`}
              className="work_media work_media-enter"
            />
          )}
        </div>}

        {/* 5 ── View details button ── */}
        {details && (
          <button
            className="work_details-btn"
            onClick={() => setModalOpen(true)}
          >
            <i className="bx bx-file-blank"></i>
            Voir détails
          </button>
        )}

      </div>

      {/* Modal — rendered via portal outside the card DOM */}
      {modalOpen && details && (
        <ProjectModal
          project={pro}
          details={details}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Works;
