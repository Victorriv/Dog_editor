class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed, :user_id
  belongs_to :user, serializer: UserSerializer
  
end
