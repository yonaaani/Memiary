import React, { useState, useRef } from "react";
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddThought = ({ journalId, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);
  const currentDate = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddThought = async () => {
    try {
      const thoughtData = {
        createdAt: serverTimestamp(),
        title: title,
        content: content,
        journalId: journalId
      };

      const docRef = await addDoc(collection(db, 'thoughts'), thoughtData);
      console.log('Думка успішно додана з id:', docRef.id);
      
      // Очистити поля вводу після додавання думки
      setTitle('');
      setContent('');
      onClose();
    } catch (error) {
      console.error('Помилка при додаванні думки:', error);
    }
  };

  const handleDelete = () => {
    setTitle('');
    setContent('');
  };

  const handleEdit = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleEditTitle = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="thought-container">
      <p className="thought-data">{currentDate}</p>
      <input
        ref={inputRef}
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title of thoughts"
      />
      <textarea
        ref={textAreaRef}
        value={content}
        onChange={handleContentChange}
        placeholder="How are you feeling?..."
      />
      <div className="controls-thoughts">
                <img src="/delete.png" className="delete-image" alt="delete" onClick={handleDelete} />
                <img src="/edit-flip.png" className="export-image" alt="export" onClick={handleEdit} />
                <img src="/write-text.png" className="delete-image" alt="delete" onClick={handleEditTitle}/>
                <button onClick={handleAddThought}>Submit</button>
      </div>
    </div>
  );
};

export default AddThought;
