class CreateBabies < ActiveRecord::Migration[6.1]
  def change
    create_table :babies do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.time :birth_date
      t.string :birth_weight
      t.string :birth_height
      t.boolean :breastfed

      t.timestamps
    end
  end
end