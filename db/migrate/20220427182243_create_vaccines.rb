class CreateVaccines < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccines do |t|
      t.time :vax_date
      t.string :vaccine
      t.string :abbreviation
      t.string :dose
      t.string :method
      t.string :vax_notes
      
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end