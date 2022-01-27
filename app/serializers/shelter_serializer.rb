class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :dogs, serializer: DogSerializer
  #want to get rid of created_at and updated_at in json
end
