class UserBooksController < ApplicationController
  def index 
    render json: UserBook.all
  end
  def show
    user_book = UserBook.find(params[:id])
    render json: user_book
  end
  def create
    user_book = UserBook.create!(user_book_params)
    render json: user_book, status: :created 
  end
  def destroy 
    user_book = UserBook.find(params[:id])
    user_book.destroy 
    head :no_content 
  end

  def update
    user_book = UserBook.find(params[:id])
    user_book.update!(user_book_params)
  end
  
  private
  def user_book_params
    params.permit(:rating, :user_id, :book_id)
  end
 
end
