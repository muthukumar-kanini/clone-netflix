import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const HandelClick = () => {
    console.log(email.current?.value);
    console.log(password.current?.value);
    console.log(name.current?.value);

    const message = checkValidateData(email.current?.value, password.current?.value, name.current?.value);
    setErrorMessage(message);

    if (message) return;

    // Sign up or sign in logic
    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value, name.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
updateProfile(user ,{
  displayName: name.current?.value, photoURL: "https://avatars.githubusercontent.com/u/127303158?v=4"
}).then(() => {
  const {
    uid: uid,
    displayName: displayName,
    email: email,
    photoURL : photoURL

  }=auth.currentUser

  dispatch(addUser({uid: uid,
    displayName: displayName,
    email: email,
    photoURL : photoURL
}))
  navigate('/browse')
  // ...
}).catch((error) => {
  // An error occurred
  // ...s
  setErrorMessage(errorMessage)
});
          navigate('/browse')
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          srcset=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-4/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-600 rounded-lg"
            />
          </div>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-gray-600 rounded-lg"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-800  w-full rounded-lg" onClick={HandelClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-1xl" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already a User: Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;