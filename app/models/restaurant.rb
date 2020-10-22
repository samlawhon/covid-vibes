class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :id, presence: true
  has_many :search_results
  has_many :searches, through: :search_results

  has_many :reviews
end
