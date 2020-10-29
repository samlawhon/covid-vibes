class Api::V1::ReviewsController < ApplicationController

  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    review = Review.new(review_params)
    review.restaurant = restaurant
    review.user = current_user

    if review.save
      render json: { review: review }
    else
      render json: { error: review.errors.full_messages }, status: 400
    end
  end

  private

  def review_params
    params.require(:review).permit(:masks_customers, :masks_employees, :party_size, :social_distancing, :rating)
  end
end
