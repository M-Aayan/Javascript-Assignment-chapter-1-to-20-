var num1 = 5;
    var num2 = 8;

    // Add and store in a new variable
    var result = num1 + num2;
    document.write("After addition is: " + result + "<br>");

    // Decrement the variable
    result--;
    document.write("Value after decrement is: " + result + "<br>");

    // Remainder after dividing by 3
    var remainder = result % 3;
    document.write("The remainder is: " + remainder);


     // Cost of one ticket
    var ticketPrice = 600;

    // Calculate total cost for 5 tickets
    var totalCost = ticketPrice * 5;

    // Show the result in the browser
    document.write("Total cost to buy 5 movie tickets is: " + totalCost + " PKR");


     // Take a number from the user
    var num = prompt("Enter a number to show its multiplication table:");
    num = Number(num); // Convert input to number

    document.write("<h2>Multiplication Table of " + num + "</h2>");

    for (var i = 1; i <= 10; i++) {
      document.write(num + " x " + i + " = " + (num * i) + "<br>")
    }


    // a. Store a Celsius temperature
    var celsius = 30;

    // b. Convert it to Fahrenheit
    var fahrenheitFromCelsius = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

    // c. Store a Fahrenheit temperature
    var fahrenheit = 86;

    // d. Convert it to Celsius
    var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
    document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");


    var item1Price = 650;

    // b. Price of item 2
    var item2Price = 100;

    // c. Ordered quantity of item 1
    var item1Quantity = 3;

    // d. Ordered quantity of item 2
    var item2Quantity = 7;

    // e. Shipping charges
    var shippingCharges = 100;

    // Calculate total cost
    var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

    // Display receipt
    document.write("<h2>Shopping Cart Receipt</h2>");
    document.write("Price of item 1 is " + item1Price + " PKR<br>");
    document.write("Quantity of item 1 is " + item1Quantity + "<br>");
    document.write("Price of item 2 is " + item2Price + " PKR<br>");
    document.write("Quantity of item 2 is " + item2Quantity + "<br>");
    document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
    document.write("<strong>Total cost of your order is " + totalCost + " PKR</strong>");


     var totalMarks = 500;
    var marksObtained = 400;

    // Calculate percentage
    var percentage = (marksObtained / totalMarks) * 100;

    // Display result in the browser
    document.write("<h2>Result</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage + "%");




    var totalPKR = (10 * 104.80) + (25 * 28);

    // Display result
    document.write("<h2>Currency Conversion</h2>");
    document.write("Total in Pakistani Rupees: " + totalPKR + " PKR");


      // Initialize variable
    var number = 5;

    // Perform all calculations in a single expression
    var result = ((number + 5) * 10) / 2;

    // Display result
    document.write("<h2>Arithmetic Result</h2>");
    document.write("The result is: " + result);


     // a. Store current year
    var currentYear = 2025;

    // b. Store birth year
    var birthYear = 2007;

    // c. Calculate two possible ages
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    // d. Output the result
    document.write("<h2>Age Calculator</h2>");
    document.write("They are either " + age1 + " or " + age2 + " years old.");



     // a. Store a radius into a variable
    var radius = 10;

    // Constant value of π (pi)
    var pi = 3.142;

    // b. Calculate the circumference (2πr)
    var circumference = 2 * pi * radius;

    // c. Calculate the area (πr²)
    var area = pi * radius * radius;

    // Output the results
    document.write("<h2>The Geometrizer</h2>");
    document.write("Radius of the circle: " + radius + "<br>");
    document.write("The circumference is: " + circumference + "<br>");
    document.write("The area is: " + area);


    // a. Store your favorite snack
    var favoriteSnack = "Chocolate Chip Cookies";

    // b. Store your current age
    var currentAge = 18;

    // c. Store a maximum age
    var maxAge = 80;

    // d. Store estimated amount per day
    var perDay = 3;

    // e. Calculate total required for rest of life
    var yearsRemaining = maxAge - currentAge;
    var totalSnacks = yearsRemaining * 365 * perDay;

    // Output the result
    document.write("<h2>The Lifetime Supply Calculator</h2>");
    document.write("Favorite Snack: " + favoriteSnack + "<br>");
    document.write("Current Age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + maxAge + "<br>");
    document.write("Amount per Day: " + perDay + "<br>");
    document.write("<strong>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</strong>");