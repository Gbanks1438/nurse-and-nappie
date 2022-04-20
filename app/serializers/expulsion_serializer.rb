class ExpulsionSerializer < ActiveModel::Serializer
  attributes :id, :date, :movement_type, :movement_color, :consistency
  has_one :baby
end
