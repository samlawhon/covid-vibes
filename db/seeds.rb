# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.find(1)
restaurant1 = Restaurant.find(642095277)
Review.create(rating: 5, party_size: true, masks_employees: true, masks_customers: false, social_distancing: false, user: user1, restaurant: restaurant1)