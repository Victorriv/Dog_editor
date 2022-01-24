class SheltersController < ApplicationController
#should be able to make new shelters
#be able to see shelters( show action )

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
