class BabySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :birth_date, :birth_weight, :birth_height, :breastfed, :profile_image
  has_one :user
end