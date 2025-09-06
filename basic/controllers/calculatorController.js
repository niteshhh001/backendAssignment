exports.calculate = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero not allowed" });
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({
        error: "Invalid operation. Use add, subtract, multiply, divide",
      });
  }

  res.json({
    num1,
    num2,
    operation,
    result,
  });
};
