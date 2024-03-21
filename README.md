sit737-2024-t1-prac4c
step-by-step documentation for calculator microservices: installed node.js The following dependencies are used in this project: express: Framework for building web applications in Node.js. winston: Logging library for Node.js.

Run the microservice using "app node.js" command. This command runs the microservices on default port 3000, we can change this port by setting the PORT environment variable if required.

We can run different functionalities by providing their values to the following different endpoints like: Addition: /add?num1=&num2=

Subtraction: /subtract?num1=&num2=

Multiplication: /multiply?num1=&num2=

Division: /divide?num1=&num2=

Exponentiation: /exponentiate?base=&exponent=

Square Root: /sqrt?num=

Modulus: /modulo?num1=&num2=

Error Handling

Invalid Parameters to any of the above endpoints, Returns a 400 Bad Request response if the input parameters are invalid or missing. Division by Zero: It returns a 400 Bad Request response if attempting to divide by zero.

Logging

The microservice uses Winston for logging. Logs are stored in files named as "error.log" and "combined.log" in the logs directory.
