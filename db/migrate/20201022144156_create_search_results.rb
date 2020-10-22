class CreateSearchResults < ActiveRecord::Migration[5.2]
  def change
    create_table :search_results do |t|
      t.belongs_to :search, null: false
      t.belongs_to :restaurant, null: false

      t.timestamps
    end
  end
end
