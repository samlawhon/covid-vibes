require "rails_helper"


RSpec.describe Api::V1::RestaurantsController, type: :controller do

  describe "GET#show" do
  
    let!(:user_1) {FactoryBot.create(:user)}
    let!(:user_2) {FactoryBot.create(:user)}
    let!(:review_1) {FactoryBot.create(:review)}
    let!(:review_2) {FactoryBot.create(:review)}
    let!(:restaurant_1) {FactoryBot.create(:restaurant)}
    let!(:restaurant_2) {FactoryBot.create(:restaurant)}

    it "return successful status and content type of json" do
      get :show, params: { id: restaurant_1.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "should return that individual restaurants review attributes" do
      get :show, params: { id: restaurant_1.id }
      returned_json = JSON.parse(response.body)
      
       expect(returned_json.length).to eq 6
       expect(returned_json["name"]).to eq restaurant_1.name
       expect(returned_json["cuisine"]).to eq restaurant_1.cuisine
       expect(returned_json["latitude"]).to eq restaurant_1.latitude
       expect(returned_json["longitude"]).to eq restaurant_1.longitude
   
    end
  end
  
end