class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticate_user

  private

  def authenticate_user 
    # byebug
    render json: {error: "Not authorized"}, status: :unauthorized unless current_user 
  end

  def current_user
    User.find_by_id(session[:user_id])
  end

end