import React, { useState, useRef, useEffect } from "react";
import "./JournalItem.css";
import ImagePicker from './ImagePicker';
import { db } from '../firebase/firebase';
import { doc, updateDoc, query, collection, where, getDocs, deleteDoc } from "firebase/firestore";
import FlipBook from './FlipBook';
import AddThought from './AddThought';
import UpdateThought from './UpdateThought';

const JournalItem = ({ journal, onSave, setEditMode, setFlipBookVisible }) => { 
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(journal.title);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(journal.coverPhoto || '');
  const [showList, setShowList] = useState(true);
  const [isFlipBookVisible, setIsFlipBookVisible] = useState(false);
  const [isAddThoughtVisible, setIsAddThoughtVisible] = useState(false);
  const journalRef = useRef(null);
  const flipBookRef = useRef(null);

  const [thoughts, setThoughts] = useState([]);
  const [selectedThoughtId, setSelectedThoughtId] = useState(null);
  const [selectedThoughtData, setSelectedThoughtData] = useState(null);
  const [isEditingThought, setIsEditingThought] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditMode(true);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    onSave(journal.id, newTitle); 
    setIsEditing(false);
    setEditMode(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleTitleBlur();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditMode(false);
    }
  };

  const handleClearClick = () => {
    setIsEditing(false);
    setEditMode(false);
    setIsFlipBookVisible(false);
    setIsAddThoughtVisible(false);
  };

  const handleCoverPhotoClick = (e) => {
    e.stopPropagation(); 
  };

  const handleChangeCoverClick = () => {
    setShowImagePicker(true); 
    setShowList(!showList);
  };

  const handleImagePickerClose = () => {
    setShowImagePicker(false); 
  };

  const updateJournalCoverPhoto = async (journalId, coverPhoto) => {
    try {
      await updateDoc(doc(db, 'journals', journalId), {
        coverPhoto: coverPhoto
      });
      console.log('Обкладинка журналу успішно оновлена на Firebase');
      window.location.reload();
    } catch (error) {
      console.error('Помилка при оновленні обкладинки журналу на Firebase:', error);
    }
  };

  const handleImageSelect = (selectedImage) => {
    setCoverPhoto(selectedImage);
    onSave(journal.id, newTitle, selectedImage); 
    updateJournalCoverPhoto(journal.id, selectedImage);
    setShowImagePicker(false);
  };

  const images = [
    "/change-cover-image.png",
  ];

  const handleCoverClick = () => {
    setIsFlipBookVisible(true);
    setFlipBookVisible(true);
  };

  const handleAddThoughtClick = () => {
    setIsAddThoughtVisible(true);
  };


  const fetchThoughts = async () => {
    try {
      const thoughtsQuery = query(collection(db, 'thoughts'), where('journalId', '==', journal.id));
      const querySnapshot = await getDocs(thoughtsQuery);
      const thoughtsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setThoughts(thoughtsData);
    } catch (error) {
      console.error('Помилка при отриманні думок з бази даних:', error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, [journal.id]);

  const handleThoughtDelete = async (thoughtId) => {
    try {
      await deleteDoc(doc(db, 'thoughts', thoughtId));
      console.log('Думка успішно видалена з бази даних');
      setThoughts(thoughts.filter(thought => thought.id !== thoughtId));
    } catch (error) {
      console.error('Помилка при видаленні думки з бази даних:', error);
    }
  };

  const handleDeleteButtonClick = (selectedThoughtId) => {
    if (selectedThoughtId !== null && selectedThoughtId !== undefined) {
      handleThoughtDelete(selectedThoughtId); 
    } else {
      console.error('No thought selected for deletion');
    }
  }; 

  
  const handleEditThoughtClick = (thoughtId) => {
    const thoughtToEdit = thoughts.find(thought => thought.id === thoughtId);
    setSelectedThoughtData(thoughtToEdit);
    setIsAddThoughtVisible(true);
    setIsEditingThought(true);
  };

  const handleClearFlipClick = () => {
    setIsFlipBookVisible(false);
    setFlipBookVisible(false);
    setIsAddThoughtVisible(false);
    setIsEditingThought(false);
    fetchThoughts();
  };

  return (
    <div className={`journal ${isEditing ? "editing" : ""}`} ref={journalRef}>
      {isEditing ? (
        <>
          <div className="input-container">
            <input
              type="text"
              className="title-input"
              value={newTitle}
              onChange={handleTitleChange}
              onKeyDown={handleKeyDown}
              //onBlur={handleTitleBlur}
              autoFocus
            />
            <button className="clear-button-title" onClick={handleClearClick}>
              <img src="/clear.png" alt="Clear" className="clear-icon" />
            </button>
          </div>
          <img
            src={journal.coverPhoto}
            alt="Journal Cover"
            className="journal-cover-edit"
          />
          <div className="edit-coverPhoto" onClick={handleCoverPhotoClick}>
            <button className="clear-button-coverPhoto" onClick={handleClearClick}>
              <img src="/clear.png" alt="Clear" className="clear-icon" />
            </button>
            <p className="customize-text">Customize journal</p>
            {showList && (
              <>
                <button className="clear-button-coverPhoto" onClick={handleClearClick}>
                  <img src="/clear.png" alt="Clear" className="clear-icon" />
                </button>
                <ul className="actions-list">
                  {images.map((image, index) => (
                    <React.Fragment key={index}>
                      <img src={image} alt="Change Cover" className="change-cover-image" />
                      <li onClick={handleChangeCoverClick}>Change Cover</li>
                    </React.Fragment>
                  ))}
                </ul>
              </>
            )}
            {showImagePicker && (
              <ImagePicker onImageSelect={handleImageSelect} onClose={handleImagePickerClose} />
            )}
          </div>
        </>
      ) : (
        <>
          {isFlipBookVisible ? (
            <div ref={flipBookRef}>
              <div className="flipbook-wrapper">
              <FlipBook 
                coverPhoto={coverPhoto} 
                thoughts={thoughts}
                onSelectThought={setSelectedThoughtId}
              />
              <button className="clear-button" onClick={handleClearFlipClick}>
                <img src="/clear-black.png" alt="Clear" className="clear-icon-flip" />
              </button>
              </div>
              <div className="controls-flip">
                <img src="/else.png" className="else-image" alt="else" />
                <img src="/edit-flip.png" className="export-image" alt="export" onClick={() => handleEditThoughtClick(selectedThoughtId)} />
                <img src="/delete.png" className="delete-image" alt="delete" onClick={() => handleDeleteButtonClick(selectedThoughtId)}/>
                <img src="/add.png" className="add-image" alt="add" onClick={handleAddThoughtClick} />
              </div>
              {isAddThoughtVisible && (
                <div className="add-thought-overlay">
                  <div className="add-thought-container">
                    <AddThought journalId={journal.id} thoughts={journal.thoughts} onClose={handleClearFlipClick} />
                    <button className="clear-black-button" onClick={handleClearFlipClick}>
                      <img src="/clear-black.png" alt="Clear" className="clear-icon" />
                    </button>
                  </div>
                </div>
              )}
              {isEditingThought  && (
                <div className="add-thought-overlay">
                  <div className="add-thought-container">
                  <UpdateThought 
                  thoughtData={selectedThoughtData} 
                  setSelectedThoughtId={setSelectedThoughtId} 
                  onClose={handleClearFlipClick}
                   />
                    <button className="clear-black-button" onClick={handleClearFlipClick}>
                      <img src="/clear-black.png" alt="Clear" className="clear-icon" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <h1 className="title" onClick={handleEditClick}>{journal.title}</h1>
              <img src="/count.png" className="count-image"/>
              <p className="pageCount">{journal.pageCount} pages</p>
              <img
                src={journal.coverPhoto}
                alt="Journal Cover"
                className="journal-cover"
                onClick={handleCoverClick}
              />
              <button className="edit-button" onClick={handleEditClick}>
                <img src="/edit.png" alt="Edit" className="edit" />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );   
};

export default JournalItem;
