"use client";

import { FC, useEffect, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/HealthSynx.png";
import { toast } from "react-hot-toast";

interface pageProps {}

const LoginPage: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("Log in success", response.data);
      toast.success("Log in successful!");
      router.push(`/profile/${user.email}`)
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    if(user.email.length > 0  && user.password.length > 0 ){
      setButtonDisabled(false);
    } else{
      setButtonDisabled(true);
    }
  
    
  }, [user])
  
  return (
    <div className="max-w-full max-h-full absolute top-0 left-0 right-0 bottom-0">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src={logo}
            width={0}
            height={0}
            className="mx-auto h-32 w-auto"
            alt="Picture of the author"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.email}
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-stone-600 hover:text-stone-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </div>
            </div>

            <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200 ${buttonDisabled ? "cursor-not-allowed disabled:hover:bg-gray-600":""}`}
              onClick={onLogin}
            >
              Log in
              {loading && (
                  <span>
                     ...
                  </span>
                )}
            </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-gray-800 hover:text-gray-700 hover:underline transition-colors duration-200"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
