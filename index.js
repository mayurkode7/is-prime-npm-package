const isPrime = (_number) => {
  const number = parseInt(_number);
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    return '1 is neither prime nor composite number.';
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = isPrime;