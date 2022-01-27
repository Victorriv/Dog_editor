class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed, :shelter_id
  belongs_to :shelter
end
