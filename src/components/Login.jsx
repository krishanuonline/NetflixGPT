import Header from "./Header";
import bg from "../assets/bg1.jpg";
import { useState } from "react";

const Login = () => {

    const [fromSignIn, setFromSignIn] = useState(true);

    const toggleSignIn = () => {
        setFromSignIn(!fromSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute"><img src={bg} alt="" /></div> 
            <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
                <h1 className="font-bold text-3xl py-4">{fromSignIn ? "Sign In" : "Sign Up"}</h1>
                {!fromSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />}
                <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <button className="p-4 my-4 bg-[#C11119] w-full font-bold rounded-lg">{fromSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer hover:text-[#C11119]" onClick={toggleSignIn}> {fromSignIn ? "New to netflix? Sign Up Now" : "Already have account? Sign In now"}</p>
            </form>

        </div>
    );
};

export default Login;