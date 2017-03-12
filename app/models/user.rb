class User < ApplicationRecord
  has_many :posts
  has_secure_password
  validates :username, :email, :password, presence: true
end
