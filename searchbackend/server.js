const express = require("express");
const app = express();
const Ad = require("./models/ads");
const cors = require("cors");

app.use(cors());

app.get("/search", (req, res) => {
  const searchText = req.query.searchText;

  Ad.aggregate([
    {
      $lookup: {
        from: "coms",
        localField: "companyId",
        foreignField: "_id",
        as: "company",
      },
    },
    {
      $unwind: {
        path: "$company",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $match: {
        $or: [
          {
            primaryText: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            headline: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            description: {
              $regex: searchText,
              $options: "i",
            },
          },
          {
            "company.name": {
              $regex: searchText,
              $options: "i",
            }
          }
        ],
      },
    },
  ]).exec((err, result) => {
    if (err) {
      console.log("error", err);
    }
    if (result) {
      console.log(result);
      res.send(result);
    }
  });

  //     Com.find({}).then((result)=>{
  // res.send(result);
  //     }).catch((error)=>{
  // console.log(error);
  //     })
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Connection Established at ${PORT}`);
});
