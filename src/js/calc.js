let THEME = 1,
  INPUT_NUMBER = "0",
  SIGN = "",
  CALC = false,
  NUMBER_CALC = 0;

const display = (input) => {
  input = input.toString().replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
  return (document.body.querySelector("#display__text").innerHTML = input);
};

display(INPUT_NUMBER);

const input = (input) => {
  if (INPUT_NUMBER !== "0") INPUT_NUMBER = INPUT_NUMBER + input;
  if (input === ",") INPUT_NUMBER = INPUT_NUMBER + input;
  if (INPUT_NUMBER === "0" || CALC === true) INPUT_NUMBER = String(input);
  CALC = false;

  return display(INPUT_NUMBER);
};

const inputSign = (input) => {
  NUMBER_CALC += Number(INPUT_NUMBER);
  SIGN = input;
  CALC = true;
  INPUT_NUMBER = NUMBER_CALC;
  return display(INPUT_NUMBER);
};

const result = () => {
  if (SIGN === "+") display(NUMBER_CALC + Number(INPUT_NUMBER));
  if (SIGN === "-") display(NUMBER_CALC - Number(INPUT_NUMBER));
  if (SIGN === "/") display(NUMBER_CALC / Number(INPUT_NUMBER));
  if (SIGN === "*") display(NUMBER_CALC * Number(INPUT_NUMBER));

  return (INPUT_NUMBER = "0"), (NUMBER_CALC = 0), (SIGN = "");
};

const supr = () => {
  if (INPUT_NUMBER === "0") return;
  if (INPUT_NUMBER.length === 1) return (INPUT_NUMBER = "0"), display(INPUT_NUMBER);
  INPUT_NUMBER = INPUT_NUMBER.substring(0, INPUT_NUMBER.length - 1);
  return display(INPUT_NUMBER);
};

const reset = () => {
  INPUT_NUMBER = "0";
  NUMBER_CALC = 0;
  SIGN = "";
  return display(INPUT_NUMBER);
};
