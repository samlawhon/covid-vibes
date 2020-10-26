class Search < ApplicationRecord
  validates :search, presence: true
  has_many :search_results
  has_many :restaurants, through: :search_results
end