import express from 'express';
import userModel from "../model/userModel.js";

  const registerUser = async(req,res) => {
    try {
        const { firstname, lastname, email, password } = req.body

const User = await userModel.create({ firstname, lastname, email, password })
 return res.status(200).json({ msg: "Registration successfull", User });
} catch(err) {
    res.status(400).json({ msg: "User not Registered" });
};
}

export default registerUser