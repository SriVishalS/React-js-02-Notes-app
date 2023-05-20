import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
const Notes = ({ notes }) => {
  const [showSearch, setSearch] = useState(false);
  const [text, setText] = useState("");
  const [searchNote, setSearchNote] = useState(notes);
  const handleSearch = () => {
    setSearchNote(
      notes.filter((item) => {
        if (item.title.toLowerCase().match(text.toLowerCase())) {
          return item;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Search Notes By Title !"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          /> // false at first true on click
        )}
        <button
          className="btn"
          onClick={() => {
            setSearch((prevState) => !prevState);
          }}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {searchNote.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to={"/create-note"}>
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
