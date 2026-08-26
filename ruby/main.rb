def sum(a, b)
  a + b
end

def main
  puts "Hello, Ruby!"
  puts "2 + 3 = #{sum(2, 3)}"
end

main if __FILE__ == $PROGRAM_NAME
