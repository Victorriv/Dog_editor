class User < ApplicationRecord
    has_many :dogs

    validates :username, presence: true, uniqueness: true


    # def name
    #     dog = Dog.all.sort_by{|dog| dog.name}.reverse
    #     render json: dog
    
    # end     POSSIBLE LIVE CODING QUESTINO BUT USE SELF
end
