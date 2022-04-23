class CreateExpulsions < ActiveRecord::Migration[6.1]
  def change
    create_table :expulsions do |t|
      t.date :date
      t.datetime :time
      t.string :movement_type
      t.boolean :diaper_changed
      t.string :diaper_size
      t.string :movement_volume
      t.string :movement_color
      t.string :consistency
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end
