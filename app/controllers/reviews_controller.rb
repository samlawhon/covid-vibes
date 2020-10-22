class ReviewsController < ApplicationController
    def new
        @review = Review.new
    end

    def create
        @restaurant = Restaurant.find(params[:restaurant_id])
        @review = review.new(review_params)
        @review.restaurant = @restaurant
    end


    private

    def review_params
        params.require(:review).permit(:rating, :masks_employees, :masks_customers, :social_distancing )
    end
end
