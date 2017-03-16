require 'rails_helper'

RSpec.describe Post, :type => :model do
  let(:post) {
    Post.create(
      :content => "I am a new story."
    )
  }
  let(:user) {
    User.create(
      :username => "user1",
      :email => "user1@email.com",
      :password => "password1"
    )
  }

  it "is valid" do
    expect(post).to be_valid
  end

end
