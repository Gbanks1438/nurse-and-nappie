class CreateMilestones < ActiveRecord::Migration[6.1]
  def change
    create_table :milestones do |t|
      t.time :ms_date
      t.string :weight
      t.string :height
      t.string :development_notes
      
      t.belongs_to :baby, null: false, foreign_key: true

      t.timestamps
    end
  end
end