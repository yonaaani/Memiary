import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import JournalList from "./components/JournalList";
import AddThought from "./components/AddThought";

import { ToastContainer } from "react-toastify";
import { auth } from "./firebase/firebase";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [user, setUser] = useState();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={!user ? <MainPage /> : <Navigate to="/home" />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/home" element={<Home />} />
      <Route path="/journalList" element={<JournalList />} />
      <Route path="/addThought" element={<AddThought />} />
    </Routes>
    <ToastContainer />
    </>
  );
}
export default App;
