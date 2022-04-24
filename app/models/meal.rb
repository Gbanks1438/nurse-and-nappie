class Meal < ApplicationRecord
  belongs_to :baby

  validates :time_start, :time_end, :which_breast, :vitamin_d, presence: true

  #validates :which_breast, inclusion: { in: %w(Left Right), message: "%{value} is not a valid selection” }
end