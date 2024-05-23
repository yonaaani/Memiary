import React, { useState, useRef, useEffect } from "react";
import { db } from '../firebase/firebase';
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";

const UpdateThought = ({ thoughtData, setSelectedThoughtId, onClose  }) => {
  const [title, setTitle] = useState(thoughtData.title);
  const [content, setContent] = useState(thoughtData.content);
  const [createdAt, setCreatedAt] = useState(null); 
  const textAreaRef = useRef(null);
  const inputRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdateThought = async () => {
    try {
      await updateDoc(doc(db, 'thoughts', thoughtData.id), {
        title: title,
        content: content,
        createdAt: serverTimestamp()
      });

      console.log('Думка успішно оновлена');
      setSelectedThoughtId(null); // Скидаємо вибрану думку після оновлення
      onClose();
    } catch (error) {
      console.error('Помилка при оновленні думки:', error);
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

  useEffect(() => {
    if (!thoughtData) return;
  
    const currentDate = new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  
    setTitle(thoughtData.title || '');
    setContent(thoughtData.content || '');
    setCreatedAt(currentDate);
  }, [thoughtData]);


  return (
    <div className="thought-container">
      <p className="thought-data">{createdAt}</p>
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
        <button onClick={handleUpdateThought}>Update</button>
      </div>
    </div>
  );
};

export default UpdateThought;
