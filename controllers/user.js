import User from "../models/User.js";

export const addUser = async (req, res) => {
    console.log(req.body, 'req.body');
    let userExists = await User.findOne({ userId: req.body.userId });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        image: req.body.image
    });

    try {
        await user.save({ wtimeout: 2500 });
        res.status(201).json(newUser, {message: "User logged in successfully"});
    } catch (error) {
        console.log(error, 'error');
        res.status(409).json({ message: error.message });
    }
}


export const getUserByID = async (req, res) => {
    console.log(req, 'req');
    const { id } = req.params;
    try {
        const user = await User.findOne({ userId: id });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }

}

