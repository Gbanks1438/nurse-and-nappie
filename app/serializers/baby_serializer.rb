class BabySerializer < ActiveModel::Serializer
  attributes :id, :b_first_name, :b_last_name, :gender, :birth_date, :birth_weight, :birth_height, :breastfed, :baby_profile
  has_one :user
end