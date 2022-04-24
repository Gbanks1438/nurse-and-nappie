class User < ApplicationRecord
	has_secure_password

	has_many :babies, dependent: :delete_all

    validates :username, :email, presence: true, uniqueness: true, length: { minimum: 3, maximum: 256 }
    validates :password, presence: true, confirmation: { case_sensitive: true }, length: { minimum: 6}
    validates :first_name, :last_name, presence: true, length: { minimum: 2, maximum: 25 }

	#HOW DO YOU MAKE IT REQUIRE 3X OF ANY COMBINATION OF AT LEAST 1X NUMBER, 1X CAPITAL LETTER, 1X LOWERCASE LETTER, OR 1X SYMBOL???

    #validates_each :first_name, :last_name, do |record, attr, value|
	    #record.errors.add(attr, ‘Name must start with upper case') if value =~ /\A[[:lower:]]/

	#HOW DO YOU MAKE IT CHECK IF THE EMAIL ADDRESS USES A VALID DOMAIN?
	#IT DOES NOT NEED TO VERIFY IF THE EMAIL ADDRESS ITSELF IS VALID!
end