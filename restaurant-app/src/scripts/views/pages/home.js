import { createRestaurantItemTemplate } from '../templates/templates-creator'
import Daftarrestaurant from '../../data/daftarrestaurant-source'

const Home = {
  async render () {
    return `
    <div class="hero"
      <div class=hero__inner">
        <h1 class="hero__title">Restaurant Catalogue For You</h1><br>
      </div>
    </div>
    &nbsp
    <h1 class="post-item__title">Explore Restaurant</h1>
    <div id="content"></div>
    </div>
        `
  },

  async afterRender () {
    const restaurants = await Daftarrestaurant.home()
    const listRestaurant = document.querySelector('#content')

    restaurants.forEach((restaurant) => {
      listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
