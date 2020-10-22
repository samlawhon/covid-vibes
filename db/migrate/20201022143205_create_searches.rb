class CreateSearches < ActiveRecord::Migration[5.2]
  def change
    create_table :searches do |t|
      t.string :search, null: false

      t.timestamps
    end
    add_index :searches, :search
  end
end
