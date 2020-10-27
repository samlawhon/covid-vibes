class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    review = Review.new(review_params)
    
    review.restaurant = restaurant
    
    if review.save
        render json: { review: review }
    else
        render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end    

  private 

  def review_params
    params.require(:review).permit(:masksCustomer, :masksEmployees, :partySize, :socialDistancing)
  end
end
