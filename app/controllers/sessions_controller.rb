class SessionsController < ApplicationController 
 #login and logout

  skip_before_action :authorize, only: :create

  #login
  def create
     user = User.find_by_username(params[:username])
    session[:user_id] = user.id
    render json: user
  end

  #logout
  def destroy
    session.delete :user_id
    head :no_content
  end

  

end 