var print_numbers = function (num_array) {
  var nums = ['Zero', 'One', 'Two', 'Three', 'Four',
    'Five', 'Six', 'Seven', 'Eight', 'Nine']
  var result = ""
  for (var i = 0; i < num_array.length; i++) {
    n_string = num_array[i].toString();
    for (var j = 0; j < n_string.length; j++) {
      n = parseInt(n_string.charAt(j));
      result += nums[n]
    }
    if (i != num_array.length - 1) {
      result += ", "
    }
  }
  return result
}
