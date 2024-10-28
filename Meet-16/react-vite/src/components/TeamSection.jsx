import TeamMember from './TeamMember';

const teamMembers = [
  { name: 'Larry F Burnett', role: 'CEO', img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' },
  { name: 'Meghan J Webb', role: 'CTO', img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' },
  { name: 'Yvonne J Cullum', role: 'COO', img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' },
  { name: 'Diana H Williams', role: 'CFO', img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg' },

  // add more members as needed
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Our Leaders</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
