class MonthlyMilestoneSerializer < ActiveModel::Serializer
  attributes :id, :date, :weight, :height, :development_notes
  has_one :baby
end