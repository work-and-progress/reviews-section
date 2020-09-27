const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UNZWILLING', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
/*----------------------------------------------------*/
db.on('error',
  console.error.bind(console, 'database/index.js: MongoDB connection error')
);
db.once('open', function() {
  console.log('database/index.js: Mongoose is connected to server!')
});
/*----------------------------------------------------*/
let childReview = mongoose.Schema({
    review_id: Number, // how to make this into an Id
    review_content: String,
    review_title: String,
    user_id: Number,
    review_date: { type: Date, default: Date.now },
    quality_rating: Number,
    value_rating: Number,
    frequency_of_use: String,
    star_rating: Number,
    review_recommended: Boolean,
    helpful_yes: Number,
    helpful_no: Number,
    original_post_location: String
  }
);

let reviewSchema = mongoose.Schema({
  product_id: Number,
  aggregate_star_rating: Number,
  reviews: [childReview]
});

let Review = mongoose.model('Review', reviewSchema);
/*----------------------------------------------------*/
let save = (reviews) => {
  var savePromises = []; // empty array, and we will be pushing all the async actions into an array
  reviews.forEach(review => {
    let filter = {product_id: review.product_id};
    savePromises.push(
      Review.findOneAndUpdate(filter, review, {
        new: true,
        upsert: true
      })
      .catch(err => {
        console.error(err);
      })
    )
  })
  return Promise.all(savePromises);
}


let fetchReviews = (callback) => {
  console.log('fetchReviews invoked! Serving you 10 reviews 😀');
  Review.find(null, null, {
    limit: 10

  }, (error, docs) => {
    if(error) {
      callback(error)
    } else {
      callback(null, docs);
    }
  })
}


let fetchByProductId = (productID) => {
  console.log('fetchByProductId invoked! Param is ', productID);
  return Review.findOne({product_id: productID});
}

/*----------------------------------------------------*/
module.exports = {
  save,
  fetchReviews,
  fetchByProductId,
  db
}