class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :dogs, serializer: DogSerializer
end
