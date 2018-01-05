function calculate() {
    
    var principal = loan_amount;
    var interest = per_month_interest;
    var payments = loan_tenure;

    // Now compute the monthly payment figure, using esoteric math.
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal*x*interest)/(x-1);

    // Check that the result is a finite number. If so, display the results.
    if (!isNaN(monthly) && 
        (monthly != Number.POSITIVE_INFINITY) &&
        (monthly != Number.NEGATIVE_INFINITY)) {

        payment = round(monthly);
        total = round(monthly * payments);
        totalinterest = 
            round((monthly * payments) - principal);
    }
    // Otherwise, the user's input was probably invalid, so don't
    // display anything.
    else {
    }
}

// This simple method rounds a number to two decimal places.
function round(x) {
  return Math.round(x*100)/100;
}
