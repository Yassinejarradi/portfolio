/*
 * Media map for project role demos.
 *
 * To replace a placeholder with a real recording:
 *   1. Drop the file into src/assets/projects/
 *   2. Add an import line below (uncomment the example for that key)
 *   3. Replace the corresponding placeholder value in the map
 *
 * Supported formats: .gif  (img tag)  |  .mp4  (video tag — set mediaType:"mp4" in translation.json)
 */

// ── Placeholder GIFs (remove once real recordings are in place) ──────────────
import placeholder1 from "../../assets/image1.gif";
import placeholder2 from "../../assets/image2.gif";

// ── Real recordings (uncomment + add file to src/assets/projects/) ───────────
import supportdeskAdmin   from "../../assets/projects/supportdesk-admin.mp4";
import supportdeskAgent   from "../../assets/projects/supportdesk-agent.mp4";
import supportdeskClient  from "../../assets/projects/supportdesk-client.mp4";
// import voteAdmin         from "../../assets/projects/vote-admin.gif";
// import voteElecteur      from "../../assets/projects/vote-electeur.gif";
// import taklifAdmin       from "../../assets/projects/taklif-admin.gif";
// import taklifUser        from "../../assets/projects/taklif-user.gif";
import gestionAdmin        from "../../assets/projects/gestion-admin.mp4";
import gestionValidateur   from "../../assets/projects/gestion-validateur.mp4";
import gestionAcheteur     from "../../assets/projects/gestion-acheteur.mp4";
import gestionUser         from "../../assets/projects/gestion-user.mp4";

export const projectMedia = {
  "tickets-admin":       supportdeskAdmin,
  "tickets-agent":       supportdeskAgent,
  "tickets-user":        supportdeskClient,
  "vote-admin":          placeholder1,   // → replace with voteAdmin
  "vote-electeur":       placeholder2,   // → replace with voteElecteur
  "taklif-admin":        placeholder1,   // → replace with taklifAdmin
  "taklif-user":         placeholder2,   // → replace with taklifUser
  "gestion-admin":       gestionAdmin,
  "gestion-validateur":  gestionValidateur,
  "gestion-acheteur":    gestionAcheteur,
  "gestion-user":        gestionUser,
};
