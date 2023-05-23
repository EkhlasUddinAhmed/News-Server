const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  others_info: {
    is_todays_pick:Boolean,
    is_trending: Boolean,
  },
  category_id: {
    type: String,
    required: true,
  },
  rating: {
    number: String,
    badge: String,
  },
  total_view: Number,
  title: String,
  author: {
    name: String,
    published_date: String,
    img: String,
  },
  thumbnail_url: String,
  image_url: String,
  details: String,
});

module.exports=newsSchema;
