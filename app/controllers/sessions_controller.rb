class SessionController < ApplicationController 
 #login and logout
  skip_before_action :authorize, only: :create
    #login
    def create
      shelter = Shelter.find_by(name: params[:name]) 
      session[:shelter_id] = shelter.id
      render json: shelter
    end

    #logout
    def destroy
        session.delete :shelter_id

    end
end 