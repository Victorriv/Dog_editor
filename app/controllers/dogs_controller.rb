class DogsController < ApplicationController

    
           

    def by_age
        dogs = Dog.by_ages
        render json: dogs
    end



     def index
        dogs = Dog.all
        render json: dogs
     end

    def create
        dog = Dog.create(dog_params)
        render json: dog
    end

    def update 
        dog = Dog.find(params[:id])
        if @current_user.id == dog.user.id
          dog.update(dog_params)
          render json: dog
        else
            render json: { errors: ["Dog(s) cant be accessed"] }, status: :unauthorized
        end
    end  
    

    def destroy
        if @current_user.id == dog.user.id
         dog = Dog.find(params[:id])
         dog.destroy

        else

            render json: { errors: ["Dog(s) cant be Accessed"] }, status: :unauthorized

        end
    end 
    
    def show
        dog = Dog.find(params[:id])
        render json: dog

    end



    private 

    def dog_params
        params.require(:dog).permit(:name, :age, :breed, :user_id)

    end 
end
