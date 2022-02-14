class SessionsController < ApplicationController 
 #login and logout

  skip_before_action :authorize, only: :create

  #login
  def create
     user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end

  #logout
  def destroy
    session.delete :user_id
    head :no_content
  end

  # user = User.find_by(username: params[:username])
    # if user&.authenticate(params[:password])
    #   session[:user_id] = user.id
    #   render json: user, status: :created
    # else
    #   render json: { error: "Invalid username or password" }, status: :unauthorized
    # end
      #ALL THIS ADDED ^^^^


end 