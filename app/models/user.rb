class User < ApplicationRecord
    has_secure_password
    
    has_many :dogs

    validates :username, presence: true, uniqueness: true
   
 
end
