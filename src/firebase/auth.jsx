import { getAuth, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, googleAuthProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth/cordova";

const AuthProvider = (app) => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if(maybeUser == null) {
              return setUser(maybeUser);
            } else {
                signInWithPopup(auth, googleAuthProvider).then(credentials => {
                    setUser(credentials.user);
                    navigate('/home');
                }
             ).catch((e) => console.error(e));
            }
        });

        return unsub;
    },[auth, navigate]);

    return user != null ? <>{user.displayName}</> : <>loading</>;

}

export default AuthProvider;