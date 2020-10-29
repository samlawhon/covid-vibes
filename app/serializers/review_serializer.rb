class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :party_size, :masks_employees, :masks_customers, :social_distancing

  belongs_to :user, if: :current_user?

  def current_user?
    scope == object.user
  end
end
