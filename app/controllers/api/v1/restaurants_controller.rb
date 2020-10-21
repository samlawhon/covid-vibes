require 'overpass_api_ruby'
require "geocoder"

class Api::V1::RestaurantsController < ApplicationController
  def index
    first_result = Geocoder.search(params[:location])[0]
    lat = first_result.data["lat"].to_f
    lon = first_result.data["lon"].to_f

    longitude_diff = 0.01
    latitude_diff = 0.01

    open_street_map_restaurants = get_restaurants(lat, lon, latitude_diff, longitude_diff)

    render json: filter_restaurants(open_street_map_restaurants)
  end

  def show
    restaurant = Restaurant.find(params[:id])
    render json: restaurant
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

  def filter_restaurants(open_street_map_restaurants)
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

        if restaurant_candidate.save
          restaurants.push(restaurant_candidate)
        end

      end
    end
    return restaurants
  end
end
