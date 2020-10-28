class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :party_size, :masks_employees, :masks_customers, :social_distancing

  # belongs_to :user, if: :current_user?
  belongs_to :restaurant

  # def current_user?
  #   current_user == object.user
  # end
end
