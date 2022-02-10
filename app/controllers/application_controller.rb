class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  # def create
  #   session[:user_id] = user.id
  # end 

  private 

def authorize
  @current_user = User.find(session[:user_id])
  render json: {errors: "Not authorized"}, status: :unauthorized unless @current_user
end

end
