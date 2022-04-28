class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.time :note_date
      t.string :comments
      
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end