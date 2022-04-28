class CreateBabies < ActiveRecord::Migration[6.1]
  def change
    create_table :babies do |t|
      t.string :b_first_name
      t.string :b_last_name
      t.string :gender
      t.time :birth_date
      t.string :birth_weight
      t.string :birth_height
      t.boolean :breastfed
      t.string :baby_profile

      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end