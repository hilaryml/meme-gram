require 'rails_helper'

RSpec.describe PostUser, :type => :model do
  let(:post_user) {
    PostUser.create(
      :post_id => post.id,
      :user_id => user.id
    )
  }
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

  it "is valid with a post_id and a user_id" do
    expect(post_user).to be_valid
  end

  it "belongs to one post" do
    expect(post_user.post).to eq(post)
  end

  it "belongs to one user" do
    expect(post_user.user).to eq(user)
  end
end
