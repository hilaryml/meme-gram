class Api::PostsController < ApplicationController
  before_action :set_post, except: [:index, :create]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { error: "Unsuccessful. Please try again", status: 500 },
      status: 500
    end
  end

  def update
    @post.update(post_params)
    if @post.save
      render json: @post
    else
      render json: { error: "Unsuccessful. Please try again", status: 500 },
      status: 500
    end
  end

  def destroy
    @post.destroy
    render json: { message: "Post destroyed", status: 200 },
    status: 200
  end


  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:caption, :image)
  end
end
