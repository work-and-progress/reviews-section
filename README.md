# FEC-UNZWILLING-reviews-section

## REST API for Reviews

<img src="https://i.postimg.cc/MpC39X9Q/Screen-Shot-2020-10-14-at-12-40-05-AM.png" width="200">

### REST API

| **CRUD** | **Method** 	| **URL** | **Key Parameter** | **Purpose** | **Response** |
| --- | --- | --- | --- | --- | --- |
| Create | POST | /review | product\_id | Add review for a product | 201 |
| Read | GET | /review | product\_id | Retrieve reviews for a product | 200 + x ‘qty’ reviews (JSON) |
| Update | PUT | /review | review\_id | Update a review for a product | 201 |
| Delete | DELETE | /review | review\_id | Delete a specific review | 200 |


### Additional Parameters

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| qty | integer | Specify quantity of results to return |
| sort | string | Sort criteria by &#39;highest&#39; or &#39;lowest&#39;  ratings or most &#39;recent&#39; |
| offset | integer | Allows &#39;skipping&#39; over data. Useful for retrieving additional pages of data |


### Data Schema (WIP)

<img width="560" height="315" src='https://dbdiagram.io/embed/5f88b85d3a78976d7b77d685'>

<!--
#### Review Schema

```
const **Review** = mongoose.Schema({
  reviewId: Number,
  reviewUsername: String,
  reviewContent: String,
  reviewTitle: String,
  userId: Number,
  reviewDate: Number,
  qualityRating: Number,
  valueRating: Number,
  frequencyOfUse: String,
  starRating: Number,
  reviewRecommended: Boolean,
  helpfulYes: Number,
  helpfulNo: Number,
});
```
#### Review Summary Schema

```
const **ReviewSummarySchema** = mongoose.Schema({
  productId: Number,
  totalNumberReviews: Number,
  averageStarRating: Number,
  averageQualityRating : Number,
  averageValueRating : Number,
  aggregateOneStarReview : Number,
  aggregateTwoStarReview : Number,
  aggregateThreeStarReview : Number,
  aggregateFourStarReview : Number,
  aggregateFiveStarReview : Number,
  mostHelpfulFavorable : Number,
  mostHelpfulCritical : Number,
  reviews** : [Review],
});
```
-->

#### User stories

As user, I want to:

- write a review
- read x qty most recent reviews to find out 1) how the product holds up over time, 2) find out about recent production products
- read highest rated reviews to see why the product is good
- read lowest rated reviews to see weaknesses of product
- update a review
- delete a review

#### Questions For SDC:

- For 10 million records should I:

  - Generate 10 million products with 0-100 reviews each?
  - Or just create 10 million products with 1 review?
  - Or just 10 million reviews?
  
- For schema should I:
  - Use the existing Review Summary schema which stores pre-computed summaries of reviews?
  - Or generate Review Summary on the fly?
  - Or do both and compare results?
  
  :octocat:   :computer:
  
<!--
## UI update
<img src='design-and-docs/finprogress1.png'>
<img src='design-and-docs/finprogress2.png'>
<img src='design-and-docs/finprogress3.png'>


## File Structure (updated, final)
<img src='design-and-docs/file-structure.png'>

## Component names (updated)
<img src='design-and-docs/final-layout.png'>
-->
