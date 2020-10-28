class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :longitude, :latitude
  
  has_many :reviews
end
