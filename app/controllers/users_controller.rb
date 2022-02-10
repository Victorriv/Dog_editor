class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create #if app doesnt work take off (, only: :create)

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
     #user = User.find(@current_user_id)
        render json: @current_user
    end

    #sign up
    def create
        user = User.create(user_params)
        render json: user
    end

    private
    
    def user_params

        params.permit(:username, :password)
    end


end
