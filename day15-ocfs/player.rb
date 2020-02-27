class Player

    attr_writer :name
    attr_reader :country

    def initialize(name,country)
        @name = name
        @country = country
    end

    def name
        @name
    end

    def country 
        @country
    end

    def name=(name)
        @name = name
    end
end
p1 = Player.new('shiva','india')
puts "Name : #{p1.name}, Country : #{p1.country}"
p1.name = "shivakumar"
puts "Name : #{p1.name}"