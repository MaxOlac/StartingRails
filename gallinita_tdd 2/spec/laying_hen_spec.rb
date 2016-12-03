require 'laying_hen'

describe LayingHen do
  let(:gallina) {LayingHen.new}

  describe "#initialize" do
    context "#with vaild input" do 
      it "creates a new Gallina without any argument" do
        expect(gallina).to be_an_instance_of LayingHen
      end
    end
    context "#with invaild input" do 
      it "creates a new Gallina with argument(s)" do
        expect{LayingHen.new(0)}.to raise_error(ArgumentError)
      end
    end
  end
  describe "#age" do
    context "when the hen is not 3 months old" do 
      it "return no eggs" do 
        expect(gallina.age!.any_eggs?).to eq(false)
      end
    end
    context "when the hen is more than 3 months old" do 
      it "return eggs" do 
        expect(gallina.age!.age!.age!.age!.any_eggs?).to eq(true)
      end
    end
  end
  describe "#any_eggs?" do
    context "when there are no eggs" do
      it "return false" do 
        expect(gallina.any_eggs?).to eq(false)
      end
    end
    context "when there are eggs" do 
      it "return true" do
        expect(gallina.age!.age!.age!.age!.any_eggs?).to eq(true)
      end 
    end
  end
  describe "#pick_an_egg!" do
    context "when there are no eggs" do
      it "return an error" do
      expect{gallina.pick_an_egg!}.to raise_error(NoEggsError)
      end
    end 
    context "when there are eggs" do
      it "return one egg" do
        expect(gallina.age!.age!.age!.age!.pick_an_egg!).to be_an_instance_of Egg
      end
    end
  end
  describe "#old?" do
    context "when the hen less than ten months old" do
      it "return false" do 
        expect(gallina.old?).to eq(false)
      end
    end
    context "when the hen more than ten months old" do
      it "return true" do 
        expect(gallina.age!.age!.age!.age!.age!.age!.age!.age!.age!.age!.age!.age!.old?).to eq(true)
      end
    end
  end
  describe "#increase_hatched_hour" do
    it "return a hen with older eggs" do
      expect(gallina.age!.age!.age!.age!.increase_hatched_hour(5).pick_an_egg!.hatched_hours).to eq(5)
    end
  end
end

describe Egg do
  let(:gallina) {LayingHen.new}
  let(:huevo) {Egg.new}

  subject { huevo }
  it { is_expected.to respond_to(:hatched_hours) }

  describe "#initialize" do
    context "with vaild input" do
      it "return an instance of egg" do
        expect(huevo).to be_an_instance_of Egg
      end
    end
    context "with invaild input" do
      it "return an ArgumentError" do
        expect{Egg.new(0)}.to raise_error ArgumentError
      end
    end
  end
  describe "#rotten?" do
    context "when hatched houres is grader than 3" do
      it "return true" do
        expect(gallina.age!.age!.age!.age!.increase_hatched_hour(5).pick_an_egg!.rotten?).to eq(true)
      end
    end
    context "when hatched houres is less than 3" do
      it "return false" do
        expect(huevo.rotten?).to eq(false)
      end
    end
  end


end
