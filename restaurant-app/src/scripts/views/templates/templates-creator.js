import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
<style>
@media(max-width:340px){
  .box-top{
      flex-wrap: wrap;
      margin-bottom: 10px;
  }
  .reviews{
      margin-top: 10px;
  }
}
::selection{
  color: #ffffff;
  background-color: #252525;
}
.restaurant__info {
  text-align:center;
  justify-content: center;
  align-items: center;
  width:100%;
  background-color: #ffffff;
  padding: 20px;
  cursor: pointer;
}
</style>
<h2 class="restaurant__title">${restaurant.name}</h2>
  <picture>
    <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
    alt="${restaurant.name}" />
  </picture>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    &nbsp
    <h3>Menus<h3>
    <h4>Foods Menu</h4>
    <p>${restaurant.menus.foods.map(food => food.name).join(' - ')}</p>
    <h4>Drinks Menu</h4>
    <p>${restaurant.menus.drinks.map(drink => drink.name).join(' - ')}</p>
    <p>${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
    <p>${value.name}</p>
    <p>${value.review}</p>
    <p>${value.date}</p>
    `), '<h4>Customer Reviews:</h4>')}</p>
  </div>
`
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
      <div class="restaurant-item__header">
        <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
          <img class="lazyload" id="restaurant-item__header__image" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
          alt="${restaurant.name}"'}" />
        </picture>
        <div class="restaurant-item__header__rating">
          <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
      </div>
      <div class="restaurant-item__content">
        <h3><a class="btn btn-full" href="${`/#/detail/${restaurant.id}`}">${
          restaurant.name}</h3>
        <p>${restaurant.description}</p>
      </div>
  </div>
  `
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
