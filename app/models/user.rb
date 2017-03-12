class User < ApplicationRecord
  has_many :posts, inverse_of: :user
  has_secure_password
  validates :username, :email, :password, presence: true
end
