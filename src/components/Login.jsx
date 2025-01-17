import Header from "./Header";
import bg from "../assets/bg1.jpg";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

const Login = () => {

    const [fromSignIn, setFromSignIn] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    //toggle function
    const toggleSignIn = () => {setFromSignIn(!fromSignIn);}
    //
    const handleButtonClick = ()=>{
        const eMsg = checkValidateData(name.current.value,email.current.value,password.current.value); 
        setErrMsg(eMsg);

        if(eMsg) return;

        //Signup
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + " - " + errorMessage)
        });




    }

    return (
        <div>
            <Header />
            <div className="absolute"><img src={bg} alt="" /></div> 
            <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90" onSubmit={(e) => e.preventDefault()}>
                <h1 className="font-bold text-3xl py-4">{fromSignIn ? "Sign In" : "Sign Up"}</h1>
                {!fromSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />}
                <input ref={email} type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 rounded-lg" />
                <p className="text-red-600 font-semibold text-lg p-2">{errMsg}</p>
                <button className="p-4 my-4 bg-[#C11119] w-full font-bold rounded-lg" onClick={handleButtonClick}>{fromSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer hover:text-[#C11119]" onClick={toggleSignIn}> {fromSignIn ? "New to netflix? Sign Up Now" : "Already have account? Sign In now"}</p>
            </form>
        </div>
    );
};

export default Login;