"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const router = useRouter();

    const handleSignup = async () => {
        const res = await axios.post(`/api/user/register`, {
            name,
            email,
            password,
        });
        if (res?.data) {
            // console.log(res);
            Cookies.set("user", res.data.token, { expires: 7 });
            toast.success(res.data.msg);
            
            router.back();
        }
    };

    const handleToggle = () => {
        setLogin(!login);
    };

    const handleLogin = async () => {
        const res = await axios.post(`/api/user/login`, {
            email,
            password,
        });
        if (res?.data) {
            Cookies.set("user", res.data.token, { expires: 7 });
            // console.log(res);
            toast.success(res.data.msg);
            router.back();
        }
    };


    return (
        <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover ">
            <Head>
                <title>StayEase - Login !</title>
            </Head>
            <div className="flex justify-center items-center w-9/12">
                <div className=" absolute w-full top-10 px-20 flex items-center">
                    <h2 className="text-4xl font-bold mr-5 text-white">StayEase</h2>
                    <p className=" font-bold text-lg text-white ">
                        Hotels and homes across 800 cities, 24+ countries
                    </p>
                </div>
                <div>
                    <p className=" font-bold text-5xl text-justify  text-white">
                        There a smarter way to StayEase
                    </p>
                    <p className=" text-2xl mt-5 text-justify text-white font-bold">
                        Sign up with your phone number and get exclusive access to
                        discounts and savings on StayEase and with our many travel
                        partners.
                    </p>
                </div>
                <div className="ml-20 pb-20 w-10/12 border bg-slate-50">
                    <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-500 to bg-red-600 text-sm font-bold text-white">
                        Sign up & Get ₹500 StayEase Money
                    </p>

                    <div className="px-5">
                        <h3 className=" text-3xl font-bold my-5">
                            {login ? "Login" : "Signup"}

                        </h3>
                        <p className=" font-bold text-md mb-1">
                            Please enter your email to continue
                        </p>

                        {login ? ("") : (
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                                onChange={(e) => setName(e.target.value)}

                            />
                        )
                        }

                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter your password..."
                            className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="submit"
                            className=" w-96 h-12 text-md font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                            onClick={login ? handleLogin : handleSignup}
                        >
                            {login ? "Login " : " Sign Up"}
                        </button>
                        <p className="my-1 text-lg">
                            <span>
                                {login ? "Don`t have an account ?" : "Already have an account ?"}
                            </span>
                            <span className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                                onClick={handleToggle}>
                                {" "}
                                {" "}
                                {login ? "Sign Up" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default login
