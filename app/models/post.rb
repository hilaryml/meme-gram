class Post < ApplicationRecord
  belongs_to :user
  validates :caption, :image, presence: true
  has_attached_file :image, styles: { :medium => "400x" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
