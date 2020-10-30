require 'overpass_api_ruby'
require "geocoder"

class Api::V1::RestaurantsController < ApplicationController
  def index
    first_result = Geocoder.search(params[:location])[0]
    lat = first_result.data["lat"].to_f
    lon = first_result.data["lon"].to_f
    coords = [lat, lon]
    if Search.where(search: params[:location]).empty?
      search = Search.new(search: params[:location])

      if !search.save
        return render json: 'Given empty location'
      end

      longitude_diff = 0.01  # about 0.5 miles
      latitude_diff = 0.01   # about 0.5 miles

      open_street_map_restaurants = get_restaurants(lat, lon, latitude_diff, longitude_diff)

      filtered_restaurants = filter_restaurants(open_street_map_restaurants, search)

      render json: {"coords": coords, "restaurants": filtered_restaurants}
    else
      restaurants = Search.find_by(search: params[:location]).restaurants
      render json: {"coords": coords, "restaurants": restaurants}
    end
  end

  def show
    restaurant = Restaurant.find(params[:id])
    render json: restaurant, serializer: RestaurantShowSerializer
  end

  private

  def get_restaurants(lat, lon, latitude_diff, longitude_diff)
    options = { bbox: { s: lat - latitude_diff, n: lat + latitude_diff,
                        w: lon - longitude_diff, e: lon + longitude_diff },
                timeout: 900,
                maxsize: 1073741824 }

    overpass = OverpassAPI::QL.new(options)

    query = "node['amenity'='restaurant'];(._;>;);out geom;"

    response = overpass.query(query)
    return response[:elements]
  end

  def filter_restaurants(open_street_map_restaurants, search)
    restaurants = []

    open_street_map_restaurants.each do |restaurant|
      if !Restaurant.where(id: restaurant[:id]).empty?
        restaurant_candidate = Restaurant.find(restaurant[:id])
        restaurants.push(restaurant_candidate)

      else
        restaurant_hash = {
          id: restaurant[:id],
          latitude: restaurant[:lat],
          longitude: restaurant[:lon],
          name: restaurant[:tags][:name],
          cuisine: restaurant[:tags][:cuisine]
        }

        restaurant_candidate = Restaurant.new(restaurant_hash)
        restaurant_candidate.searches << search

        if restaurant_candidate.save
          restaurants.push(restaurant_candidate)
        end
      end
    end
    return restaurants
  end
end
