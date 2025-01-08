export const checkValidateData = (name, email, password) => {

    const isNameValid = name && name.trim().length > 0;
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); //return true/false
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return "Please enter a valid name";
    if(!isEmailValid) return "Please enter a valid email";
    if(!isPasswordValid) return "Please enter a valid password";


}