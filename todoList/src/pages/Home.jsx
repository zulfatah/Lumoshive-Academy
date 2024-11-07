import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/activities")
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const addActivity = (newActivity) => {
    fetch("http://localhost:3000/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => response.json())
      .then((addedActivity) => {
        setActivities((prevActivities) => [...prevActivities, addedActivity]);
        
        // Tampilkan SweetAlert sukses
        Swal.fire({
          title: "Success!",
          text: "Activity added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error adding activity:", error);
        
        // Tampilkan SweetAlert error
        Swal.fire({
          title: "Error!",
          text: "Failed to add activity. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const deleteActivity = (id) => {
    fetch(`http://localhost:3000/activities/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setActivities((prevActivities) =>
          prevActivities.filter((activity) => activity.id !== id)
        );
      })
      .catch(error => console.error("Error deleting activity:", error));
  };

  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
        Add Activity
      </button>
      <ActivityList activities={activities} onDeleteActivity={deleteActivity} />
      <ActivityForm showModal={showModal} setShowModal={setShowModal} onAddActivity={addActivity} />
    </div>
  );
};

export default Home;
