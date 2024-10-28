import PropTypes from 'prop-types';

const TeamMember = ({ name, role, img }) => {
  return (
    <div className="team-member">
      <img src={img} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

// Prop validation
TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default TeamMember;
