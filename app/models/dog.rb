class Dog < ApplicationRecord
    belongs_to :user

    validates_presence_of :name, :age, :breed


   
end
