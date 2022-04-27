class Baby < ApplicationRecord
    has_many :meals, dependent: :delete_all
    has_many :expulsions, dependent: :delete_all
    has_many :notes, dependent: :delete_all
    has_many :vaccines, dependent: :delete_all
    has_many :monthly_milestones, dependent: :delete_all

    validates :first_name, :last_name, presence: true, length: { minimum: 2, maximum: 25 }
	validates :gender, :birth_date, :birth_weight, :birth_height, :breastfed, presence: true

    #validates_each :first_name, :last_name do |record, attr, value|
	    #record.errors.add(attr, ‘Name must start with upper case') if value =~ /\A[[:lower:]]/
end