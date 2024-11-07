import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ActivityList = ({ activities, onDeleteActivity }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Panggil fungsi onDeleteActivity dari Home
    onDeleteActivity(id);
  };

  return (
    <ul className="list-group">
      {activities.map((activity) => (
        <li
          key={activity.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{activity.title}</span>
          <div>
            <button
              onClick={() => navigate(`/activity/${activity.id}`)}
              className="btn btn-secondary btn-sm mx-1"
            >
              Details
            </button>
            <button
              onClick={() => handleDelete(activity.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Define prop types for validation
ActivityList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteActivity: PropTypes.func.isRequired,
};

export default ActivityList;
