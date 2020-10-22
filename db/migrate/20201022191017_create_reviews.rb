class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.boolean :party_size, null:false
      t.boolean :masks_employees, null:false
      t.boolean :masks_customers, null:false 
      t.boolean :social_distancing, null:false

      t.belongs_to :user, null: false
      t.belongs_to :restaurant, null:false
      
      t.timestamps null:false
    end
  end
end
