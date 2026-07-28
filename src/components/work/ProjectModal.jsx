import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const ProjectModal = ({ project, details, onClose }) => {
  const [closing, setClosing] = useState(false);

  // Animate close, then notify parent
  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 200);
  }, [onClose]);

  // ESC key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const cls = closing ? " modal_closing" : "";

  return ReactDOM.createPortal(
    <div
      className={`modal_overlay${cls}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className={`modal_panel${cls}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Sticky header ── */}
        <div className="modal_header">
          <div className="modal_header-text">
            <h2 className="modal_title">{project.title}</h2>
            {details.tagline && (
              <p className="modal_tagline">{details.tagline}</p>
            )}
          </div>
          <button
            className="modal_close"
            onClick={handleClose}
            aria-label="Fermer"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="modal_body">

          {/* Overview */}
          {details.overview?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-info-circle"></i>
                Aperçu du projet
              </h3>
              <div className="modal_overview">
                {details.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {details.techStack?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-code-alt"></i>
                Stack technique
              </h3>
              <div className="modal_tech-grid">
                {details.techStack.map((tech, i) => (
                  <span key={i} className="modal_tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Roles & Permissions */}
          {details.roles?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-group"></i>
                Rôles & Permissions
              </h3>
              <div className="modal_roles-grid">
                {details.roles.map((role, i) => (
                  <div key={i} className="modal_role-card">
                    <div className="modal_role-name">
                      <i className={`bx ${role.icon}`}></i>
                      {role.name}
                    </div>
                    <ul className="modal_role-list">
                      {role.capabilities.map((cap, j) => (
                        <li key={j}>{cap}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workflow */}
          {details.workflow?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-git-branch"></i>
                Processus & Workflow
              </h3>
              <div className="modal_workflow">
                {details.workflow.map((step, i) => (
                  <div key={i} className="modal_step">
                    <span className="modal_step-num">{i + 1}</span>
                    <p className="modal_step-text">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Status cycle */}
          {details.statuses?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-transfer"></i>
                Cycle de statuts
              </h3>
              <div className="modal_statuses">
                {details.statuses.map((status, i) => (
                  <React.Fragment key={i}>
                    <span className="modal_status">{status}</span>
                    {i < details.statuses.length - 1 && (
                      <span className="modal_status-arrow" aria-hidden="true">›</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Modules */}
          {details.modules?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-grid-alt"></i>
                Modules de l'application
              </h3>
              <div className="modal_modules-grid">
                {details.modules.map((mod, i) => (
                  <span key={i} className="modal_module">{mod}</span>
                ))}
              </div>
            </div>
          )}

          {/* Dashboard metrics */}
          {details.dashboardMetrics?.length > 0 && (
            <div className="modal_section">
              <h3 className="modal_section-title">
                <i className="bx bx-bar-chart-alt-2"></i>
                Tableau de bord & Métriques
              </h3>
              <div className="modal_metrics-grid">
                {details.dashboardMetrics.map((metric, i) => (
                  <div key={i} className="modal_metric">
                    <i className={`bx ${metric.icon}`}></i>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
