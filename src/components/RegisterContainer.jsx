import { useCallback, useState } from "react";
import "./RegisterContainer.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
//import { getDatabase, ref, set } from "firebase/database";
//import { database } from "../firebase/firebase";
import { setDoc, doc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const RegisterContainer = () => {

  //const [registerEmail, setRegisterEmail] = useState("");
  //const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [surName, setSurname] = useState("");
  //const db = getDatabase();
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  //const [user, setUser] = useState({});

  //onAuthStateChanged(auth, (currentUser) => {
  //  setUser(currentUser);
  //});
  
  //const register = async () => {
  //  try {
  //    const user = await createUserWithEmailAndPassword(
  //      auth, 
  //      registerEmail, 
  //      registerPassword
  //    );
  //    console.log(user)
  //    navigate('/home');
  //  } catch (error) {
  //    console.log(error.message);
  //  }
  //};

  // const handleSignup = () =>{
  //   console.log(email,firstName,surname,password)
  //   createUserWithEmailAndPassword(auth, email, password)
  // .then((success) => {
  //   console.log("user created")
    
  //   set(ref(database, `users/${success.user.uid}`), {
  //         email:email,
  //         firstName:firstName,
  //         surname:surname,
  //         id:success.user.uid    
  //     });
     
    
  //   const user = userCredential.user;
    
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });
  // }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const usersCollection = collection(db, "Users");
        await setDoc(doc(usersCollection, user.uid), {
          email: user.email,
          firstName: firstName,
          surname: surName,
        });
      }
      console.log("User Registered Successfully!!");
      window.location.href = "/home";
      // toast.success("User Registered Successfully!!", {
      //   position: "top-center",
      // });
    } catch (error) {
      console.log(error.message);
      // toast.error(error.message, {
      //   position: "bottom-center",
      // });
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        const usersCollection = collection(db, "Users");
        await setDoc(doc(usersCollection, user.uid), {
          email: user.email,
          firstName: user.displayName,
          surname: "", 
      });
    }
    console.log("User Registered Successfully!!");
    window.location.href = "/home";
  } catch (error) {
    console.error("Error registering with Google:", error);
  }
  };

  return (
    <form className="frame-form">
      <div className="frame-parent1">
        <div className="frame-wrapper">
          <div className="log-in-parent">
           <Link to="/authorization" className="log-in3" style={{textDecoration: 'none'}}>Log in</Link>
            <div className="sign-up2">Sign up</div>
          </div>
        </div>
        <div className="vector-container">
          <img
            className="frame-child12"
            loading="lazy"
            alt=""
            src="/vector-121.svg"
          />
          <img
            className="frame-child13"
            loading="lazy"
            alt=""
            src="/vector-131.svg"
          />
        </div>
      </div>
      <button className="rectangle-parent2" onClick={handleGoogleRegister}>
        <div className="frame-child14" />
        <img className="image-26-icon4" alt="" src="/image-google.png" />
        <div className="google-login-button">
          <div className="continue-with-google1">Continue with Google</div>
        </div>
      </button>
      <div className="additional-options">
        <div className="additional-options-inner">
          <img
            className="frame-child15"
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
        </div>
        <div className="or-better-yet1">Or better yet...</div>
        <div className="additional-options-child">
          <img
            className="frame-child16"
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
        </div>
      </div>
      <div className="signup-form">
        <div className="rectangle-parent3">
          <div className="frame-child17" />
          <img className="image-26-icon5" alt="" src="/image-26-1@2x.png" />
          <input
            className="signup-form-inputs"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className="rectangle-parent4">
          <div className="frame-child18" />
          <img className="image-26-icon6" alt="" src="/image-26-21@2x.png" />
          <input className="frame-input" placeholder="First Name" type="text" 
          value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="rectangle-parent5">
          <div className="frame-child19" />
          <img className="image-26-icon7" alt="" src="/image-26-3@2x.png" />
          <input className="frame-child20" placeholder="Surname" type="text" 
          value={surName} 
          onChange={(e)=>setSurname(e.target.value)}/>
        </div>
        <div className="rectangle-parent6">
          <div className="frame-child21" />
          <img className="image-26-icon8" alt="" src="/image-26-2@2x.png" />
          <input 
          className="frame-child22" 
          placeholder="Password" 
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }} />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="forgot-password-wrapper">
          <div className="forgot-password2">Forgot password?</div>
        </div>
        <button className="rectangle-parent7" onClick={handleRegister}>
          <div className="frame-child23" />
          <div className="sign-up3">Sign Up</div>
        </button>
      </div>
    </form>
  );
};

export default RegisterContainer;
