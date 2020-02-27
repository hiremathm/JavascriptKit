a = 10
b = 20
c = [1,2,3]
d = {name: "shiva"}
def add(c,d)
    a = 100
    b = 200
    c << 4
    d["age"] = 20
    puts "c"
    return a + b, c, d
end
puts "a : #{a}, b : #{b}"
puts "Add :: #{add(c,d)}"
puts "a : #{a}, b : #{b}, c : #{c}, d : #{d}"

z = Array.new([10,20,30])
puts "z : #{z}"