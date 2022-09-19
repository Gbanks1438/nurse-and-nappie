class VaccSerializer < ActiveModel::Serializer
  attributes :id, :date, :vaccine, :abbreviation, :dose, :method, :notes
  has_one :baby
end
