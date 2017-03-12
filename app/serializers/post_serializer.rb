class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes
  has_many :users
end
