class SessionController < ApplicationController 
 #login and logout
  skip_before_action :authorize, only: :create
    #login
    def create
      shelter = Shelter.find_by(name: params[:shelter_id]) 
      session[:shelter_id] = shelter.id
    end

    #logout
    def destroy
        session.destroy

    end
end 