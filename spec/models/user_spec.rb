require 'rails_helper'

RSpec.describe User, :type => :model do
  let(:user) {
    User.create(
      :username => "user1",
      :email => "user1@email.com",
      :password => "password1"
    )
  }

  it 'is valid' do
    expect(user).to be_valid
  end

  it "#username returns a string" do
    expect(user.username).to be_a(String)
  end

  it "#email returns a string" do
    expect(user.email).to be_a(String)
  end
end
