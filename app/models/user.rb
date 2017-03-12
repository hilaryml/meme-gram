class User < ApplicationRecord
  has_many :post_users
  has_many :posts, through: :post_users
  has_secure_password
  validates :username, :email, :password, presence: true
end
