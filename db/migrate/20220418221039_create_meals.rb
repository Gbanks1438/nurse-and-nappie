class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.time :time_start
      t.time :time_end
      t.string :which_breast
      t.boolean :vitamin_d

      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end