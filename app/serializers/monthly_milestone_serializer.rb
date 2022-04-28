class MonthlyMilestoneSerializer < ActiveModel::Serializer
  attributes :id, :ms_date, :weight, :height, :development_notes
  has_one :baby
end