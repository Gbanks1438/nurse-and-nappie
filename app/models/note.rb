class Note < ApplicationRecord
  belongs_to :baby

  validates :comments, :date, presence: true
  validates :comments, length: { minimum: 2, maximum: 1000 }
end