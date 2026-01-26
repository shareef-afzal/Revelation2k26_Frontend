import teamsData from "../../data/teams.json";
import coreCommitteeData from "../../data/corecommitte.json";
import TeamSection from "./TeamSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./TeamsPage.css";

const TeamsPage = () => {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <div className="TeamsPage">
        <div className="TeamsHero">
          <h1 className="TeamsTitle">OUR TEAMS</h1>
          <p className="TeamsSubtitle">
            Meet the dedicated teams making REVELATION an extraordinary experience.
          </p>
        </div>

        <div className="TeamsContainer">
          {/* Core Committee Sections */}
          {coreCommitteeData.map((section, idx) => (
            <TeamSection
              key={`core-${idx}`}
              title={section.title}
              members={section.members}
            />
          ))}

          {/* Other Teams Sections */}
          {teamsData.map((section, idx) => (
            <TeamSection
              key={`team-${idx}`}
              title={section.title}
              members={section.members}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TeamsPage;
