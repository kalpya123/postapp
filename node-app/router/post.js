const express= require("express");
const post= require("../controller/posts");
const multer  = require('multer')

const router=express.Router();


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./upload/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  let upload = multer({ storage: storage });

  let uploadMultiple = upload.fields([
    {name:"image",maxCount:1}
  ]);


router.post("/add",uploadMultiple,post.add);

router.get("/",post.all);

router.delete("/delete/:_id",post.delete)

router.put("/update",post.update)

module.exports=router;