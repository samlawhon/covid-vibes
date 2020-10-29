class RestaurantShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :longitude, :latitude
  
  has_many :reviews
end
