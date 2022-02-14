class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create 

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
     
        render json: @current_user
    end

    #sign up
    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end 
            
    end

    def myDogs 
        user = User.find(session[:user_id])
        userDogs = user.dogs
        render json: userDogs
    end

    private
    
    def user_params

        params.permit(:username, :password)
    end


end
