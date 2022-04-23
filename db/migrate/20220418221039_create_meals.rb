class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.datetime :time_start
      t.datetime :time_end
      t.string :which_breast
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end
