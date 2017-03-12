class Post < ApplicationRecord
  has_many :users
  validates :content, presence: true
end
