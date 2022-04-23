class Expulsion < ApplicationRecord
  belongs_to :baby

  validates :date, :movement_type, :movement_volume, :movement_color, :consistency, presence: true

  #validates :movement_type, inclusion: { in: %w(Urine, Feces, Vomit), message: "%{value} is not a valid selection” }

  #validates :diaper_size, inclusion: { in: %w(N/A, New, Born, 1, 2, 3, 4, 5, 6, Pull-ups), message: "%{value} is not a valid selection” }

  #validates :movement_volume, inclusion: { in: %w(Small, Medium, Large, Very Large), message: "%{value} is not a valid selection” }

  #validates :movement_color, inclusion: { in: %w(Grey, White, Clear, Yellow, Mustard, Green, Brown, Red, Orange, Black), message: "%{value} is not a valid selection” }

  #validates :consistency, inclusion: { in: %w(Fluid, Viscous, Loose, Firm, Solid), message: "%{value} is not a valid selection” }
end
