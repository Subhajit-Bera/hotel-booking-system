import Head from "next/head";

const login = () => {
    return (
        <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-75">
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
                    <p className=" text-2xl mt-5 text-justify text-white">
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
                        <h3 className=" text-3xl font-bold my-5">Login / Signup</h3>
                        <p className=" font-bold text-md mb-1">
                            Please enter your phone number to continue
                        </p>

                        <input
                            type="text"
                            placeholder="Enter your name..."
                            className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                        />
                        <input
                            type="password"
                            placeholder="Enter your password..."
                            className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
                        />

                        <button
                            type="submit"
                            className=" w-96 h-12 text-md font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                        >
                            Signup
                        </button>
                        <p className="my-1 text-lg">
                            <span>Already have an account?</span>
                            <span className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer">
                                {" "}
                                Login
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
