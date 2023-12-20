const userSchema = require("../models/userModel");

exports.register = async (req, res) => {
    try {
        const { username, useremail, password } = req.body;

        // Basic validation
        if (!username || !useremail || !password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Check if useremail is already registered
        let UserData = await userSchema.findOne({ useremail: useremail })

        if (UserData) {
            return res.status(400).json({ success: false, message: 'User with this email already exists' });
        }

        // if (userSchema.find({useremail:useremail})) {
        //     return res.status(400).json({ success: false, message: 'User with this email already exists' });
        // }
        // Save the user
        const newUser = new userSchema({ username, useremail, password });
        await newUser.save();
        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error("error while get user", error);
    }
}
exports.LogIn = async (req, res) => {
    try {

        const { useremail, password } = req.body;

        // Basic validation
        if (!useremail || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user exists
        const user = await userSchema.findOne({useremail,password});
        console.log("user",user);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error("error while get user", error);

    }
}