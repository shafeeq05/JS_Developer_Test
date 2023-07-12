const jwt = require("jsonwebtoken");
const scheema = require("../model/adminScheema");

module.exports.auth = {
  admin: async (req, res, next) => {
    try {
      // console.log(req.headers.cook);
      // console.log(req.cookies.adminLogin,"ghjfjh");
      const jwtdecode = req.headers.cook;
      
      console.log(jwtdecode,"auth");
      const decoded = jwt.verify(jwtdecode, "shafeeq").id
      req.body.jwtid = decoded;
      next();
    } catch (error) {
      res.status(404).json("404:unautherised admin");
      console.log("error");
    }
  },
  vendor: async (req, res, next) => {
    try {
      // console.log(req.cookies.vendor.encod);
      const decode = jwt.verify(req.cookies.vendor.encod, "shafeeq").id
      console.log(decode);
      req.body.jwtid = decode;
      next();
    } catch (error) {
        res.status(404).json({ status: "unautherised vendor" });
    }
  },
  coustomer: async (req, res, next) => {
    try {
      // console.log(req.cookies.user.encript);
      const encode = req.cookies.user.encript;
      const decode = await jwt.verify(encode, "shafeeq").id;
      // const exist = await scheema.find({ _id: decode });
      // console.log(decode);
      req.body.jwtid = decode;
      next();
      return decode;
    } catch (error) {
      res.status(404).json({ status: "unautherised user" });
    }
  },
};
