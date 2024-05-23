import React, { useState } from "react";
import "./FlipBook.css";

const FlipBook = ({ coverPhoto, thoughts, onSelectThought  }) => {
  const [selectedThoughtId, setSelectedThoughtId] = useState(null);

  const handleThoughtClick = (thoughtId) => {
    setSelectedThoughtId(thoughtId);
    onSelectThought(thoughtId);
  };

  return (
    <div className="flipbook-container">
      <div className="book">
        <div className="cover-flipbook">
          <img src={coverPhoto} alt="Journal Cover" />
        </div>
        <div className="details">
          <div className="thought-list">
            {thoughts.map((thought, index) => (
              <div
              className={`thought-item ${selectedThoughtId === thought.id ? 'selected' : ''}`}
              key={index}
              onClick={() => handleThoughtClick(thought.id)}
            >
                <img src="/quill-pen.png" alt="quill pen" className="thought-image" />
                <h2 className="thought-title">{thought.title}</h2>
                <p className="thought-content">{thought.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
