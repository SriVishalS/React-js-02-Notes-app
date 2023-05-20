import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useDate from "../components/dateHook";

const CreateNote = ({ setNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const date = useDate();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title, description)) {
      const newNote = { id: uuid(), title, description, date };
      console.log(newNote);
      // add these to the main notes array
      setNote((prevNote) => [newNote, ...prevNote]);
      // redirect to home
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn primary lg" onClick={handleSubmit}>
          Save Note !
        </button>
      </header>
      <form action="" className="create-note__form" onSubmit={handleSubmit}>
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

export default CreateNote;
