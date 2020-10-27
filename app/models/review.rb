class Review < ApplicationRecord
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :masks_employees, presence: true
  validates :masks_customers, presence: true
  validates :party_size, presence: true
  validates :social_distancing, presence: true
  validates :id, presence: true

  belongs_to :user
  belongs_to :restaurant
  
end