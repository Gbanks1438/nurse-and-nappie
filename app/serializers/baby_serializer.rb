class BabySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :birth_date, :birth_weight, :birth_height, :breastfed
end
