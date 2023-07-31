"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { FC } from "react";

interface pageProps {
  params: any;
}

const UserProfile: FC<pageProps> = ({ params }) => {
  const router = useRouter();

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
 

  return (
    <>
      <div className="w-[80%] mx-auto text-black text-4xl font-bold text-center">
        Hello {params.id}
      </div>
      <button
        type="submit"
        className={`flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200`}
        onClick={onLogout}
      >
        Log out
      </button>
    </>
  );
};

export default UserProfile;
