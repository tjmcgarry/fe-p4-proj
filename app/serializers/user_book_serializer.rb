class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :rating
  has_one :user
  has_one :book
end
