"use client"

import React, { FC, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface pageProps {}

interface UserData {
  _id: string;
  username: string;
}

const Profile: FC<pageProps> = ({}) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data.user);
      setUserData(res.data.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  
  // console.log(userData)

  return (
    <>
      <div className="w-[80%] mx-auto text-black">Welcome User!!</div>
      {userData ? (
        <h2>
          <Link
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200"
            href={`/profile/${userData.username}`}
          >
            {userData.username}
          </Link>
        </h2>
      ) : null}
      <button
        type="submit"
        className={`flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200`}
        onClick={getUserDetails}
      >
        Get user details
      </button>
    </>
  );
};

export default Profile;
