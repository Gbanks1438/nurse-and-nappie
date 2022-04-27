class Expulsion < ApplicationRecord
  belongs_to :baby

  validates :date, :movement_type, :diaper_changed, :diaper_size, :volume, :color, :consistency, :num_wipes_used, presence: true
  validates :num_wipes_used, :numericality => { :greater_than_or_equal_to => 0 }

  #validates :movement_type, inclusion: { in: %w(Urine, Feces, Vomit), message: "%{value} is not a valid selection” }

  #validates :diaper_changed, inclusion: { in: %w(Yes, No), message: "%{value} is not a valid selection” }

  #validates :diaper_size, inclusion: { in: %w(N/A, New Born, 1, 2, 3, 4, 5, 6, Pull-Ups), message: "%{value} is not a valid selection” }

  #validates :volume, inclusion: { in: %w(Comfort Change, Small, Medium, Large, Very Large), message: "%{value} is not a valid selection” }

  #validates :color, inclusion: { in: %w(Grey, White, Clear, Yellow, Mustard, Green, Brown, Red, Orange, Black), message: "%{value} is not a valid selection” }

  #validates :consistency, inclusion: { in: %w(Fluid, Viscous, Loose, Sticky, Firm, Solid), message: "%{value} is not a valid selection” }
end