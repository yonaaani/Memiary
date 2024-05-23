import React, { useState, useEffect, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import JournalItemInList from "./JournalItemInList";
import "./JournalList.css";
import { Link } from "react-router-dom";

const JournalList = () => {
  const [journals, setJournals] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      
      // Сортування за часом створення (від найновіших до найстаріших)
      fetchedJournals.sort((a, b) => b.createdAt - a.createdAt);
      
      console.log('Fetched Journals:', fetchedJournals); // Додано для перевірки
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

  useEffect(() => {
    console.log('Journals state:', journals); // Додано для перевірки
  }, [journals]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredJournals = journals.filter((journal) =>
    journal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="journalList-page">
      <div className="list-square">
      <Link to="/home">
        <button className="clear-button-list">
          <img src="/clear.png" alt="Clear" className="clear-icon" />
        </button>
      </Link>
        <p className="your-journals-text">Your Journals</p>
        <div className="search-journals">
          <button className="search-button" onClick={handleSearch}>
            <img src="/search-icon.png" alt="Search" className="search-icon" />
          </button>
          <input type="text" 
            placeholder="" 
            className="search-input" 
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}/>
        </div>
        <div className="all-journals">
          <p>ALL LIST</p>
          <div className="liner"/>
        </div>
        <ul className="all-journal-list">
          {filteredJournals.map((journal) => (
            <JournalItemInList key={journal.id} journal={journal} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JournalList;
