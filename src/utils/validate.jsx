export const checkValidateData = (name, email, password, isSignin = true) => {
    const isNameValid = isSignin || name && name.trim().length > 0;
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Valid email regex
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); // Password regex: 8+ chars, at least 1 uppercase, 1 lowercase, and 1 number
    // Validate name
    if (!isNameValid) return "Please enter a valid name.";

    // Validate email
    if (!isEmailValid) return "Please enter a valid email.";

    // Validate password
    if (!isPasswordValid) 
        return "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number.";

    // If all validations pass
    return null;
};
