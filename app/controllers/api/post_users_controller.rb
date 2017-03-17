class Api::PostUsersController < ApplicationController

  def create
    post = Post.find_by(id: params[:post_id])
    user = User.find_by(id: params[:user_id])
    post_user = PostUser.new(post_user_params)
    if !post.users.include?(user)
      post_user.save
      render json: post_user
    else
      render json: { error: "User already associated with post", status: 200 },
      status: 200
    end
  end

  private

  def post_user_params
    params.require(:post_user).permit(:post_id, :user_id)
  end
end
