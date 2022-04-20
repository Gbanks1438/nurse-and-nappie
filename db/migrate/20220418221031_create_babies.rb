class CreateBabies < ActiveRecord::Migration[6.1]
  def change
    create_table :babies do |t|
      t.string :first_name
      t.string :last_name
      t.time :birth_date
      t.integer :birth_weight
      t.integer :birth_height
      t.boolean :breastfed

      t.timestamps
    end
  end
end
