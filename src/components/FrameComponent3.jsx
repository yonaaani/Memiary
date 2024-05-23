import "./FrameComponent3.css";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { collection, addDoc, getDocs, query, where, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import defaultCoverPhoto from "/public/journal-base.png";
import JournalItem from "./JournalItem";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import leftArrow from "/left-arrow.png";
import rightArrow from "/right-arrow.png";
import ImagePicker from './ImagePicker'; 

const FrameComponent3 = () => {
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverPhoto); 
  const [journals, setJournals] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const carouselRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const [flipBookVisible, setFlipBookVisible] = useState(false);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const fetchJournals = useCallback(async () => {
    try {
      if (!currentUser) {
        return;
      }

      const q = query(collection(db, 'journals'), where("userId", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      const fetchedJournals = [];
      querySnapshot.forEach((doc) => {
        fetchedJournals.push({ id: doc.id, ...doc.data() });
      });
      setJournals(fetchedJournals);
    } catch (error) {
      console.error('Error fetching journals: ', error);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      fetchJournals();
    }
  }, [currentUser, fetchJournals]);

  const createNewJournal = useCallback(async () => {
    try {
      if (!currentUser) {
        throw new Error("No current user found");
      }
      
      await addDoc(collection(db, 'journals'), {
        title: 'New Journal',
        createdAt: new Date(),
        pageCount: 0, 
        coverPhoto: coverPhoto, 
        userId: currentUser.uid, 
      });
      alert('New journal created successfully!');
      fetchJournals();
    } catch (error) {
      console.error('Error creating new journal: ', error);
      alert('Failed to create new journal!');
    }
  }, [coverPhoto, currentUser]); 

  const handleScroll = useCallback((index) => {
    setCurrentSlide(index);
  }, []);
  
  const handleScrollPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const handleScrollNext = () => {
    if (currentSlide < journals.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const deleteJournal = async () => {
    const currentJournal = journals[currentSlide];
    if (!currentJournal) return;

    try {
      await deleteDoc(doc(db, 'journals', currentJournal.id));
      setJournals((prevJournals) => prevJournals.filter(journal => journal.id !== currentJournal.id));
      alert('Journal deleted successfully!');
      fetchJournals();
    } catch (error) {
      console.error('Error deleting journal: ', error);
      alert('Failed to delete journal!');
    }
  };

  const handleSaveTitle = async (journalId, newTitle) => {
    try {
      await updateDoc(doc(db, 'journals', journalId), {
        title: newTitle
      });
      setJournals(prevJournals => prevJournals.map(journal => {
        if (journal.id === journalId) {
          return { ...journal, title: newTitle };
        }
        return journal;
      }));
    } catch (error) {
      console.error('Error updating journal title: ', error);
    }
  };

  const updateJournalCoverPhoto = async (journalId, coverPhoto) => {
    try {
      await updateDoc(doc(db, 'journals', journalId), {
        coverPhoto: coverPhoto
      });
      console.log('Обкладинка журналу успішно оновлена на Firebase');
      
      // Оновлення обкладинки поточного журналу
      const updatedJournals = journals.map(journal => {
        if (journal.id === journalId) {
          return { ...journal, coverPhoto: coverPhoto };
        }
        return journal;
      });
      setJournals(updatedJournals);
    } catch (error) {
      console.error('Помилка при оновленні обкладинки журналу на Firebase:', error);
    }
  }; 
  
 

  return (
    <section className="journal-list-container">
      {journals.length > 0 ? (
        <>
          <Carousel
            ref={carouselRef}
            slideSize="100%" slideGap="xs" controls
            onSlideChange={(index) => setCurrentSlide(index)}
            value={currentSlide}
            draggable={!editMode && !flipBookVisible}
            slidesToScroll={1}
          >
            {journals.map((journal, index) => (
              <Carousel.Slide key={journal.id} className={index === currentSlide ? 'active' : ''}>
                <JournalItem journal={journal} 
                onSave={(journalId, newTitle) => handleSaveTitle(journalId, newTitle)} 
                editMode={editMode} 
                setEditMode={setEditMode} 
                updateCoverPhoto={updateJournalCoverPhoto}
                flipBookVisible={flipBookVisible}
                setFlipBookVisible={setFlipBookVisible}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
          {!editMode && !flipBookVisible && (
            <div className="controls">
              <img src="/else.png" className="else-image" alt="else" />
              <img src="/export.png" className="export-image" alt="export" />
              <img src="/delete.png" className="delete-image" alt="delete" onClick={deleteJournal} />
              <img src="/add.png" className="add-image" alt="add" onClick={createNewJournal} />
            </div>
          )}
        </>
      ) : (
        <div className="hi-there-lets-start-parent">
          <div className="hi-there-lets-container">
            <p className="hi-there">{`Hi there, `}</p>
            <p className="lets-start">let’s start!</p>
          </div>
          <div className="frame-wrapper1">
            <button className="frame-wrapper2" onClick={createNewJournal}>
              <div className="ellipse-container">
                <div className="ellipse-div" />
                <img className="image-31-icon" alt="" src="/image-31@2x.png" />
              </div>
            </button>
          </div>
        </div>
      )}
      {!editMode && !flipBookVisible && (
        <div className="carousel-controls">
          <button onClick={handleScrollPrev}  className="carousel-control-left">
            <img src={leftArrow} alt="Previous" width={"55px"} />
          </button>
          <button onClick={handleScrollNext} className="carousel-control-right">
            <img src={rightArrow} alt="Next" width={"55px"} />
          </button>
        </div>
      )}
    </section>
  );
};

export default FrameComponent3;
