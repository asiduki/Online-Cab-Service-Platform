import bcrypt from 'bcrypt';
import User from "../Models/Usermodel.js";

// SIGNUP FUNCTION
export const sign = async (req, res) => {
    const { name, image, username, phonenumber, email, password } = req.body;
    try {

        if (!name || !username || !phonenumber || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 7) {
            return res.status(400).json({ message: "Password must be at least 7 characters" });
        }
        if (phonenumber.length !== 10) {
            return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            image,
            username,
            phonenumber,
            email,
            password: hash,
        });
        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userDetails = await User.findOne({ email });
        if (!userDetails) {
            return res.status(404).json({ error: "Wrong username or password" });
        }

        const isMatch = await bcrypt.compare(password, userDetails.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const { password: userPassword, ...userInfo } = userDetails.toObject();

        return res.status(200).json({ message: "Login successful", user: userInfo });

    } catch (err) {
        console.log("Server error:", err);
        return res.status(500).json({ error: "Server error" });
    }
};