// src/components/Note.js
import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <p className="timestamp">Timestamp: {note.timestamp}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
