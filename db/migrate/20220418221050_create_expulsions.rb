class CreateExpulsions < ActiveRecord::Migration[6.1]
  def change
    create_table :expulsions do |t|
      t.time :date
      t.string :movement_type
      t.boolean :diaper_changed
      t.string :diaper_size
      t.string :volume
      t.string :color
      t.string :consistency
      t.integer :num_wipes_used
      
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end
