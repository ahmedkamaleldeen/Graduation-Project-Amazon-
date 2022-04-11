import express from "express";
import User from "../models/userModel.js";
import { generateToken, isAdminAuth, isAuth } from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import productRouter from "./productRoutes.js";
const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
productRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res, next) => {
    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  }));

userRouter.get('/',  isAdminAuth,
expressAsyncHandler (async (erq, res) => {
  const users = await User.find();
  res.send( users );
}));
userRouter.get(
  `/:id`,
  isAdminAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send('user not found');
    }
  })
);
userRouter.delete(
  `/:id`,
  isAdminAuth,
  expressAsyncHandler(async (req, res) => {
    const user = User.findById(req.params.id);
    if (user) {
      await User.findByIdAndDelete(req.params.id);
    } else {
      res.status(404).send('user not found');
    }
  })
);

productRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updateUser = await user.save();
      res.send({
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser),
      });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);
export default userRouter;
