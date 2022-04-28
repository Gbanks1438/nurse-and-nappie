class ExpulsionSerializer < ActiveModel::Serializer
  attributes :id, :exp_date, :movement_type, :diaper_changed, :diaper_size, :volume, :color, :consistency, :num_wipes_used
  has_one :baby
end