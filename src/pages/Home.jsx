import { useState, useEffect, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import "./Home.css";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFlipBookVisible, setIsFlipBookVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); 
    });

    return unsubscribe; 
  }, []);
  
  return (
    <div className="thefirst">
      <header className="thefirst-inner">
        <div className="frame-parenth">
          <div className="ellipse-parent">
            <img
              className="image-33-icon"
              loading="lazy"
              alt=""
              src="/image-33-icon.png"
            />
          </div>
          {isAuthenticated && !isFlipBookVisible &&  (
            <Link to="/journalList" className="ellipse-parent">
            <div className="frame-childh"></div>
            <img
              className="search-image-icon"
              loading="lazy"
              alt="Search"
              src="/search-image20.png"
            />
          </Link>
          )}
          <div className="ellipse-group" >
            <img
              className="image-34-icon"
              loading="lazy"
              alt=""
              src="/image-34-icon.png"
            />
          </div>
        </div>
      </header>
      <FrameComponent3 setIsFlipBookVisible={setIsFlipBookVisible}/>
    </div>
  );
};

export default Home;
