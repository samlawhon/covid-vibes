class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user 

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

  protected
  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end
