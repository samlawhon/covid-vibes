require "rails_helper"
require "json"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe "POST#create" do
    context "when a request correct params is made" do
      let!(:review) { { rating: 4, party_size: true, masks_employees: false, masks_customers: true, social_distancing: false, user_id: 1, restaurant_id: 1 }}
      let!(:user_1) {FactoryBot.create(:user)}
      let!(:user_2) {FactoryBot.create(:user)}
      let!(:review_1) {FactoryBot.create(:review)}
      let!(:review_2) {FactoryBot.create(:review)}
      let!(:restaurant_1) {FactoryBot.create(:restaurant)}
      let!(:restaurant_2) {FactoryBot.create(:restaurant)}

      it "add the camper to the database" do
        previous.count = Review.count
          
        post :create, params: review_1 

        new_count = Review.count

        expect(new_count).to eq previous_count + 1
      end

      it "returns the new camper object as json" do 

      end

      context "when a malformed request in made" do
        it "should not save to the database" do

        end 
      end

    end
  end
end


