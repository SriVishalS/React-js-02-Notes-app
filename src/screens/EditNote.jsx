import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import useDate from "../components/dateHook";
const EditNote = ({ tempNote, setNote }) => {
  const { id } = useParams();
  const filterNote = tempNote.find((item) => item.id === id);
  const [title, setTitle] = useState(filterNote.title);
  const [description, setDescription] = useState(filterNote.description);
  const newDate = useDate();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    if (title && description) {
      const editedNote = { ...filterNote, title, description, newDate };
      const newNote = tempNote.map((item) => {
        if (item.id === id) {
          item = editedNote;
        }
        return item;
      });
      setNote(newNote);
    }
    // see the updated notes in home page
    navigate("/");
  };
  const handleDelete = () => {
    if (window.confirm("Delete The Note ?")) {
      const deleteNote = tempNote.filter((item) => item.id !== id);
      setNote(deleteNote);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn primary lg" onClick={handleChange}>
          Save Task !
        </button>
        <button className="btn danger lg" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note Details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
