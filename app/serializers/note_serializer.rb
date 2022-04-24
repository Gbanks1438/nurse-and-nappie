class NoteSerializer < ActiveModel::Serializer
  attributes :id, :comments, :date
  has_one :baby
end