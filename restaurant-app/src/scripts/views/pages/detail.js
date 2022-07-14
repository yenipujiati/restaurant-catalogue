import UrlParser from '../../routes/url-parser'
import Daftarrestaurant from '../../data/daftarrestaurant-source'
import { createRestaurantDetailTemplate } from '../templates/templates-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

const Detail = {
  async render () {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await Daftarrestaurant.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        pictureId: restaurant.pictureId,
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description
      }
    })
  }
}

export default Detail
