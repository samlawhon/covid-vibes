class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user 

  def create
    binding.pry
    restaurant = Restaurant.find(params[:restaurant_id])
    review = Review.new(params[:review])
    
    review.restaurant = restaurant
    
    if review.save
        render json: { review: review }
    else
        render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end    

  private 

  def review_params
    params.require(:review).permit(:masks_customer, :masks_customers, :party_size, :social_distancing)
  end

  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end
