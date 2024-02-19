// src/components/AddNoteForm.js
import React, { useState } from 'react';

const AddNoteForm = ({ onAdd }) => {
  const [newNote, setNewNote] = useState('');

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      onAdd({
        id: Date.now(),
        text: newNote,
        timestamp: new Date().toLocaleString(),
      });
      setNewNote('');
    }
  };

  return (
    <div className="add-note-form">
      <input
        type="text"
        placeholder="Add a new note..."
        value={newNote}
        onChange={handleInputChange}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default AddNoteForm;
