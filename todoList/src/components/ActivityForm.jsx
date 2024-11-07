import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ActivityForm = ({ showModal, setShowModal, onAddActivity }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setTitle("");
    setDescription("");
  };

  const handleAdd = () => {
    // Buat objek aktivitas baru
    const newActivity = {
      title,
      description,
    };

    // Panggil fungsi onAddActivity untuk menyimpan ke db.json
    onAddActivity(newActivity);

    // Reset form dan tutup modal setelah data dikirim
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

ActivityForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  onAddActivity: PropTypes.func.isRequired,
};

export default ActivityForm;
