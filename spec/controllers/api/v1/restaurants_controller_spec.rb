require "rails_helper"
require "json"

RSpec.describe Api::V1::RestaurantsController, type: :controller do
  describe "GET#index" do

    it "return successful status and content type of json" do
      get :index
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end
    
    it "should return all restaurants from the database" do
      get :index, params: {location: 'boston'}

      restaurants = JSON.parse(response.body)
            
      restaurants.each do |restaurant|
        expect(restaurant.keys).to include("name")
        expect(restaurant.keys).to include("latitude")
        expect(restaurant.keys).to include("longitude")   
      end
    end
  end
end