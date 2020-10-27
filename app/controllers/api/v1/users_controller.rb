class Api::V1::UsersController < ApplicationController
before_action :authenticate_user 

  def show
    user = User.find(params[:id])
    render json: user
  end

  protected
  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end
end