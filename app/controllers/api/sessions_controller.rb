class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: @user
    end
  end

  def destroy
    session.delete :user_id
  end
end
