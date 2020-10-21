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
