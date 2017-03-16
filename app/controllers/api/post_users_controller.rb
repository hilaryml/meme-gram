class Api::PostUsersController < ApplicationController

  def create
    @post_user = PostUser.create(post_user_params)
    render json: @post_user
  end

  private

  def post_user_params
    params.require(:post_user).permit(:post_id, :user_id)
  end
end
