class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :breed, :shelter_id
end
