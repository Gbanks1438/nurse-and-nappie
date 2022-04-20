class CreateExpulsions < ActiveRecord::Migration[6.1]
  def change
    create_table :expulsions do |t|
      t.time :date
      t.time :time
      t.string :movement_type
      t.string :movement_volume
      t.string :movement_color
      t.string :consistency
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end
