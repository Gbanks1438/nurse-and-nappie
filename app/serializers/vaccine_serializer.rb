class VaccineSerializer < ActiveModel::Serializer
  attributes :id, :vax_date, :vaccine, :abbreviation, :dose, :method, :vax_notes
  has_one :baby
end