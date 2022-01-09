class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user
  end
  def create
    user = User.create!(user_params)
    render json: user, status: :created 
  end
  def destroy 
    user = User.find(params[:id])
    user.destroy 
    head :no_content 
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
  end
  
  private
  def user_book_params
    params.permit(:username, :email)
  end

end
