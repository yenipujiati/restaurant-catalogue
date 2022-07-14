class FavoriteRestaurantSearchPresenter {
  constructor ({ favoriteRestaurants, view }) {
    this._view = view
    this._listenToSearchRequestByUser()
    this._favoriteRestaurants = favoriteRestaurants
  }

  _listenToSearchRequestByUser () {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchrestaurants(latestQuery)
    })
  }

  async _searchrestaurants (latestQuery) {
    this._latestQuery = latestQuery.trim()

    let foundRestaurants
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchrestaurants(this.latestQuery)
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurants()
    }

    this._showFoundRestaurants(foundRestaurants)
  }

  _showFoundRestaurants (restaurants) {
    this._view.showRestaurants(restaurants)
  }
}

export default FavoriteRestaurantSearchPresenter
