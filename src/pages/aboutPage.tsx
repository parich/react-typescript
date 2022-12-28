import React from "react";
import { Link } from "react-router-dom";
import {
  selectAuthState,
  updateProfileAction,
} from "../reduxToolkit/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../reduxToolkit/hooks";

export default function AboutPage() {
  const { profile, email } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const updateProfile = () => {
    dispatch(updateProfileAction());
  };

  return (
    <>
      <h1>aboutPage</h1>
      <p>
        {profile}
        {email}
      </p>
      <button onClick={updateProfile}>Update Profile</button>
      <Link to={"/"}> Back </Link>
    </>
  );
}
