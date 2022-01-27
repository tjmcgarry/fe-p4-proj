class BooksController < ApplicationController
  def index
    render json: Book.all
  end


  def create
    book = Book.create!(book_params)
    render json: book, status: :created 
  end

  private 

  def book_params
    params.permit(:title, :author, :img_url)
  end


end
