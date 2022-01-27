class SheltersController < ApplicationController
#should be able to make new shelters
#be able to see shelters( show action )

skip_before_action :authorize
#, only: :create

def index
    shelters = Shelter.all
    render json: shelters
end

def show
    shelter = Shelter.find(params[:id])
    #shelter = Shelter.find(@current_shelter.id)
    render json: shelter
end


#sign up
def create 
    shelter = Shelter.create(shelter_params)
    render json: shelter
end



private

    def shelter_params
        params.permit(:name, :location, :password)
    end
end
