import React from 'react';

const MostHelpfulReviews = ({ reviewList, mostHelpfulFavorable, mostHelpfulCritical }) => {
  const helpfulFavorable = mostHelpfulFavorable;
  const favorableObject = reviewList && reviewList[helpfulFavorable];
  console.log('favorable object ', favorableObject);

  const helpfulCritical = mostHelpfulCritical;
  const criticalObject = reviewList && reviewList[helpfulCritical];
  console.log('critical object ', criticalObject);


  return (
    <div className="block">
      <div className="inline-block">
        <p>Most Helpful Favorable Review</p>
        <p>
          Star Rating:
          {favorableObject && favorableObject.star_rating}
        </p>
        <span>
          Username:
          {favorableObject && favorableObject.review_username}
          &nbsp;&nbsp;
        </span>
        <span>
          Date Posted:
          {favorableObject && favorableObject.review_date}
          months ago
        </span>
        <p>
          Review title:
          {favorableObject && favorableObject.review_title}
        </p>
        <p>
          Review content:
          {favorableObject && favorableObject.review_content}
        </p>
        <p>
          {favorableObject && favorableObject.helpful_yes}
          of
          {favorableObject && favorableObject.helpful_yes}
          people found this helpful
        </p>
        <p>See more 4 and 5 star reviews</p>
      </div>

      <div className="inline-block">
      <p>Most Helpful Critical Review</p>
        <p>
          Star Rating:
          {criticalObject && criticalObject.star_rating}
        </p>
        <span>
          Username:
          {criticalObject && criticalObject.review_username}
          &nbsp;&nbsp;
        </span>
        <span>
          Date Posted:
          {criticalObject && criticalObject.review_date}
          months ago
        </span>
        <p>
          Review title:
          {criticalObject && criticalObject.review_title}
        </p>
        <p>
          Review content:
          {criticalObject && criticalObject.review_content}
        </p>
        <p>
          {criticalObject && criticalObject.helpful_yes}
          of
          {criticalObject && criticalObject.helpful_yes}
          people found this helpful
        </p>
        <p>See more 1, 2, and 3 star reviews</p>
      </div>

    </div>
  );

};

export default MostHelpfulReviews;
