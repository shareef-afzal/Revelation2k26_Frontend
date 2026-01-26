import TeamCard from "./TeamCard";
import teamsIcon from "../../assets/icons/teams.webp";

/**
 * TeamsPageTeamSection
 * Renders one team section with a cinematic heading and member cards
 *
 * props:
 *  - title: string
 *  - members: array of { name, image, linkedin, instagram }
 */
const TeamSection = ({ title, members }) => {
  return (
    <section className="TeamsPage-section">
      {/* Section Heading */}
      <div className="TeamsPage-sectionHeader">
        <div className="TeamsPage-sectionIcon">
            <img src={teamsIcon} alt={`${title} icon`} />
        </div>


        <h2 className="TeamsPage-sectionTitle">
          {title}
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="TeamsPage-grid">
        {members.map((member, idx) => (
          <TeamCard
            key={idx}
            name={member.name}
            image={member.image}
            linkedin={member.linkedin}
            instagram={member.instagram}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
