import React from "react";
import { Link } from "react-router-dom";
const NoteItem = (note) => {
  return (
    <Link to={`/edit-note/${note.note.id}`} className="note">
      <h4>
        {note.note.title.length > 50
          ? note.note.title.substr(0, 50) + "...."
          : note.note.title}
      </h4>
      <p>{note.note.description}</p>
      <p>{note.note.date}</p>
    </Link>
  );
};

export default NoteItem;
