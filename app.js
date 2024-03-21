const express = require('express');
const winston = require('winston');

const app = express();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ],
});

// Addition 
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const result = num1 + num2;
  logger.info(`Addition operation requested: ${num1} + ${num2}`);
  res.json({ result });
});

// Subtraction 
app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const result = num1 - num2;
  logger.info(`Subtraction operation requested: ${num1} - ${num2}`);
  res.json({ result });
});

// Multiplication 
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const result = num1 * num2;
  logger.info(`Multiplication operation requested: ${num1} * ${num2}`);
  res.json({ result });
});

// Division 
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters or division by zero' });
  }
  const result = num1 / num2;
  logger.info(`Division operation requested: ${num1} / ${num2}`);
  res.json({ result });
});

// Exponentiation 
app.get('/exponentiate', (req, res) => {
  const base = parseFloat(req.query.base);
  const exponent = parseFloat(req.query.exponent);
  if (isNaN(base) || isNaN(exponent)) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const result = Math.pow(base, exponent);
  logger.info(`Exponentiation operation requested: ${base} ^ ${exponent}`);
  res.json({ result });
});

// Square root 
app.get('/sqrt', (req, res) => {
  const num = parseFloat(req.query.num);
  if (isNaN(num) || num < 0) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameter or negative number' });
  }
  const result = Math.sqrt(num);
  logger.info(`Square root operation requested for: ${num}`);
  res.json({ result });
});

// Modulus 
app.get('/modulo', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    logger.error('Invalid parameters');
    return res.status(400).json({ error: 'Invalid parameters or division by zero' });
  }
  const result = num1 % num2;
  logger.info(`Modulo operation requested: ${num1} % ${num2}`);
  res.json({ result });
});

// Error handling 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Research and findings on error handling strategies:
// Brief outline of error handling strategies such as Circuit Breaker pattern, retry pattern, and Fallback mechanism.
// Analyze their applicability to microservice environments, focusing on reliability and user experience.
// Present findings in a 1-page report, including references.
