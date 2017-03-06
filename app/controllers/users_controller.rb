class UsersController < ApplicationController
  before_action :set_user, except: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {user: @user.errors, status: :no_content}
    end
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user
    end
  end

  def destroy
    @user.destroy
    render json: {status: :ok}
  end

  private

  def set_user
    @user = User.find(params[:id])
    render json: {status: :not_found} unless @user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
