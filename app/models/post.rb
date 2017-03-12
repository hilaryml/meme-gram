class Post < ApplicationRecord
  belongs_to :post_users
  has_many :users, through: :post_users
  validates :content, presence: true
end
