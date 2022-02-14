class User < ApplicationRecord
    has_many :dogs

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, uniqueness: true
 
end
