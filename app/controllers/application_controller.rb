class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
  end

  def current_user
    @user = User.find_by(id: session[:id])
  end

end
