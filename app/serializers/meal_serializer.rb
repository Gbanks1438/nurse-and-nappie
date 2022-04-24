class MealSerializer < ActiveModel::Serializer
  attributes :id, :time_start, :time_end, :which_breast, :vitamin_d
  has_one :baby
end