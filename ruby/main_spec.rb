require_relative "main"

RSpec.describe "#sum" do
  it "adds two numbers" do
    expect(sum(2, 3)).to eq(5)
  end

  it "adds negative numbers" do
    expect(sum(-1, 1)).to eq(0)
  end
end
