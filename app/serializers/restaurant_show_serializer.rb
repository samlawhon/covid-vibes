class RestaurantShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine

  has_many :reviews
end
