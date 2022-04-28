class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :usr_first_name, :usr_last_name, :email, :usr_profile
end