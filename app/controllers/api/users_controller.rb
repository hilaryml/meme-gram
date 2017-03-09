class Api::UsersController < ApplicationController
  before_action :set_user, except: [:index, :create]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: user.errors, status: :no_content }
    end
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user
    else
      render json: { error: "Unsuccessful. Please try again", status: 500 },
      status: 500
    end
  end

  def destroy
    @user.destroy
    render json: { message: "User destroyed", status: 200},
    status: 200
  end


  private

  def set_user
    @user = User.find_by(id: params[:id])
    render json: { error: "Not found" } unless @user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
