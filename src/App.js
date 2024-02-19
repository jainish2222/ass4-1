// src/App.js
import React, { useState } from 'react';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <AddNoteForm onAdd={handleAddNote} />
      <NotesList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default App;
