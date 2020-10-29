class Review < ApplicationRecord
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :masks_employees, inclusion: { in: [true, false] }
  validates :masks_customers, inclusion: { in: [true, false] }
  validates :party_size, inclusion: { in: [true, false] }
  validates :social_distancing, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :restaurant
end
