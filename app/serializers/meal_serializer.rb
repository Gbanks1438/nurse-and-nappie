class MealSerializer < ActiveModel::Serializer
  attributes :id, :time_start, :time_end, :which_breast
  has_one :baby
end
