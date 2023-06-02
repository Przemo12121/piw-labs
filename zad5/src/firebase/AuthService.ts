import { auth } from "./init";
import {
  GithubAuthProvider,
    GoogleAuthProvider,
    User,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useState, useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
        console.log({ err });
        alert(err.message);
    }
};

export const logInWithGithub = async () => {
    try {
        await signInWithPopup(auth, githubProvider);
    } catch (err: any) {
        console.log({ err });
        alert(err.message);
    }
};

export const useUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return user
};

export const logout = () => signOut(auth);