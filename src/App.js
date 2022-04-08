import React, { useState, useEffect } from "react";
import axios from "axios";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="container">
      <NotesList />
    </div>
  );
}

export default App;
