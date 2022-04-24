class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :comments
      t.time :date
      
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end
