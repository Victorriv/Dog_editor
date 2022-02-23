class Dog < ApplicationRecord
    belongs_to :user

    validates_presence_of :name, :age, :breed

    def self.by_ages
        dogs = Dog.all.order(age: :asc)

    end
    # scope by_ages, -> {order(:age)} 
end
