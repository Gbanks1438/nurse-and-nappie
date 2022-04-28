class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_date, :comments
  has_one :baby
end