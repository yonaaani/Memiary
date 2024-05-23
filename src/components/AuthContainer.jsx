import { useCallback, useState } from "react";
import "./AuthContainer.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
//import { getDatabase, ref, set } from "firebase/database";
//import { toast } from "react-toastify";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthContainer = () => {

  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const navigate = useNavigate();

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth, 
  //       loginEmail, 
  //       loginPassword
  //     );
  //     console.log(user)
  //     navigate('/home');
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/home";
      // toast.success("User logged in Successfully", {
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

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Successfully signed in with Google.");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <form className="auth-container">
      <div className="login-signup">
        <div className="login-signup-form">
          <div className="form-title">
            <div className="auth-log-in">Log in</div>
            <Link to="/registration" className="auth-sign-up" style={{textDecoration: 'none'}}>Sign up </Link>
          </div>
        </div>
        <div className="divider">
          <img
            className="divider-child"
            loading="lazy"
            alt=""
            src="/vector-12.svg"
          />
          <img
            className="divider-item"
            loading="lazy"
            alt=""
            src="/vector-13.svg"
          />
        </div>
      </div>
      <button className="rectangle-parent1" onClick={handleGoogleSignIn}>
        <div className="frame-childd" />
        <img className="image-26-icon" alt="" src="/image-google.png" />
        <div className="continue-with-google-wrapper">
          <div className="continue-with-google">Continue with Google</div>
        </div>
      </button>
      <div className="separator">
        <div className="separator-dots-wrapper">
          <img
            className="separator-dots-icon"
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
        </div>
        <div className="or-better-yet">Or better yet...</div>
        <div className="separator-inner">
          <img
            className="frame-item1"
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
        </div>
      </div>
      <div className="form-fields">
        <div className="rectangle-group1">
          <div className="frame-inner1" />
          <div className="image-26-parent">
            <img className="image-26-icon1" alt="" src="/image-26-1@2x.png" />
            <div className="email1">Email</div>
            <div className="rectangle-div1" />
            <img className="image-26-icon2" alt="" src="/image-26-1@2x.png" />
            <input 
            className="email1-input"
            placeholder="Email" 
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }} />
          </div>
        </div>
        <div className="rectangle-container">
          <div className="frame-child1d" />
          <img className="image-26-icon3" alt="" src="/image-26-2@2x.png" />
          <input
            className="password-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
        </div>
      </div>
      <div className="forgot-password">
        <div className="forgot-password-link">
          <div className="forgot-password1">Forgot password?</div>
        </div>
        <div className="group-div1" onClick={handleSubmit}>
          <div className="frame-child2d" />
          <div className="log-in1">Log in</div>
        </div>
      </div>
    </form>
  );
};

export default AuthContainer;
