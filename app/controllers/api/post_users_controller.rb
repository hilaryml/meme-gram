class Api::PostUsersController < ApplicationController

  def create
    post_user = PostUser.create(post_user_params)
  end

  private

  def post_user_params
    params.require(:post_user).permit(:post_id, :user_id)
  end
end
