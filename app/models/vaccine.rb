class Vaccine < ApplicationRecord
  belongs_to :baby

  validates :vax_date, :vaccine, :abbreviation, :dose, :method, presence: true
  validates :vax_notes, length: { minimum: 2, maximum: 1000 }

#Notes are not required to save to the database!

end