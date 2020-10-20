require 'rails_helper'

RSpec.describe User, type: :model do
  describe "adding a user with all fields filled" do
    it "should save the user" do
      user = FactoryBot.create(:user)
      expect(user.save).to eq(true)
    end
  end

  describe "adding a user with missing field" do
    it "should not save the user" do
      user = FactoryBot.create(:user)
      user.first_name = ""
      expect(user.save).to eq(false)
    end
  end
end
