import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./screens/notes";
import CreateNote from "./screens/CreateNote";
import EditNote from "./screens/EditNote";
import { useEffect, useState } from "react";
const App = () => {
  const [tempNote, setNote] = useState(
    JSON.parse(localStorage.getItem("userNotes")) || []
  );
  useEffect(() => {
    localStorage.setItem("userNotes", JSON.stringify(tempNote));
  }, [tempNote]);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={tempNote} />} />
          <Route
            path="/create-note"
            element={<CreateNote setNote={setNote} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote tempNote={tempNote} setNote={setNote} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
