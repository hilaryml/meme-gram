class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes
  has_many :users
end
