import React from 'react';

const TeamMember = ({ name, role, img }) => {
  return (
    <div className="team-member">
      <img src={img} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default TeamMember;
