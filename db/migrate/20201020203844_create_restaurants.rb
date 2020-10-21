class CreateRestaurants < ActiveRecord::Migration[5.2]
  def up
    create_table :restaurants, id: false do |t|
      t.bigint :id, primary: true
      t.string :name, null: false
      t.string :cuisine
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps
    end
    execute %Q{ ALTER TABLE "restaurants" ADD PRIMARY KEY ("id"); }
  end
  def down
    drop_table(:restaurants)
  end
end
