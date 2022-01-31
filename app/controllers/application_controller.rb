class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorize
  #to-do
  
  #back end:

  # - functionality here in app Controller - authorize, current user
  
  #user serializer- what attributes do we want/not want, and how to also
  #get associated data(our dogs)

  #front end: 
  #component structure - index form, dog card
  #dog index
  #dog form
  #dog update form
  #dog delete button
#to get this to work WE GOTTA TEST FETCH CALLS


private 

def authorize
@current_shelter = Shelter.find(session[:shelter_id])
#throw and error unless current shelter exists
render json: {errors: "Not authorized"}, status: unauthorized unless @current_shelter 
end

end
