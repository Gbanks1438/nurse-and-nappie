class Milestone < ApplicationRecord
  belongs_to :baby

  validates :ms_date, :weight, :height, presence: true
  validates :development_notes, length: { minimum: 2, maximum: 1000 }

#Development notes are not required to save to the database!

end