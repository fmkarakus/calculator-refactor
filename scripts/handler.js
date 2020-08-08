function calculateHandler(event) {
  // read & process user input from event
  let target = event.target.form;
  let var1 = target.value1.value;
  let var2 = target.value2.value;
  let op = target.operator.value;
  let x = +var1;
  let y = +var2;
  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!

  // render output to DOM for user
  document.getElementById("result").innerHTML = result;
  // log user action for developers

  // return true for the browser
  return true;
}
