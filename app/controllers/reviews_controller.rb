class Api::ReviewsController < ApplicationController
     protect_from_forgery unless: -> { request.format.json? }
    def new
        review = Review.new
    end

    def create
        restaurant = Restaurant.find(params[:restaurant_id])
        review = Review.new(text: params[:review])
        review.restaurant = restaurant
        if review.save
            render json: { review: review }
        else
            render json: { error: review.errors.full_messages }, status: :unprocessable_entity
        end
    end    
end
