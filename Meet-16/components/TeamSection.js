import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  { name: 'Larry F Burnett', role: 'CEO', img: 'larry.jpg' },
  { name: 'Meghan J Webb', role: 'CTO', img: 'meghan.jpg' },
  { name: 'Yvonne J Cullum', role: 'COO', img: 'yvonne.jpg' },
  { name: 'Diana H Williams', role: 'CFO', img: 'diana.jpg' },
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
