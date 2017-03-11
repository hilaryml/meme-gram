class Api::PostsController < ApplicationController
  before_action :set_post, except: [:index, :create]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    #@post = Post.create(post_params)
    file = Paperclip.io_adapters.for(post_params[:image][:base64])
    @post.image = file
    if @post.save
      render json: @post
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

  def decode_base64
    decoded_data = Base64.decode64(params[:image][:base64])
    data = StringIO.new(decoded_data)
    data
  end

  def set_post
    @post = Post.find_by(id: params[:id])
    render json: { error: "Not found" } unless @post
  end

  def post_params
    params.require(:post).permit(:caption, image: [:filetype, :filename, :filesize, :base64])
  end
end
