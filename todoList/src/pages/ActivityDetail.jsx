import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useTimer from "../hooks/useTimer"; 

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const { time, startTimer, stopTimer, resetTimer } = useTimer(); // menggunakan custom hook useTimer

  useEffect(() => {
    // Fetch data aktivitas berdasarkan id
    fetch(`http://localhost:3000/activities/${id}`)
      .then((response) => response.json())
      .then((data) => setActivity(data))
      .catch((error) => console.error("Error fetching activity:", error));
  }, [id]);

  if (!activity) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-primary">{activity.title}</h2>
      <p className="text-muted">{activity.description}</p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: {time} seconds</p>
          <div className="btn-group">
            <button onClick={startTimer} className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button onClick={stopTimer} className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button onClick={resetTimer} className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
