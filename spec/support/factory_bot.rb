require 'factory_bot'

require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:first_name) {|n| "first name #{n}" }
    sequence(:last_name) {|n| "last name #{n}" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end
end

FactoryBot.define do
  factory :restaurant do
    sequence(:name) {|n| "Restaurant #{n}" }
    sequence(:cuisine) {|n| "Burger #{n}" }
    latitude { "42.363617" }
    longitude { "-71.04873" }
    sequence(:id) {|n| "0#{n}" }
  end
end

FactoryBot.define do
  factory :review do
    rating { 3 }
    party_size { true }
    masks_employees { true }
    masks_customers { false }
    social_distancing { false }

    association :user, factory: :user
    association :restaurant, factory: :restaurant
  end
end