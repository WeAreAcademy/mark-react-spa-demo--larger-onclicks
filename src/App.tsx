/**
 * Main takeaway: you can do lots of things inside an onClick's
 *  function. Just pass in a function which does the things which
 *  you want to happen onClick.
 */

function App() {
  // this should log a different number (almost) every time
  const logRandomOneLine = () => console.log(Math.random());

  const logRandomTwoLines = () => {
    // multiple lines requires an arrow function with body
    const randomNumber = Math.random();
    console.log(randomNumber);
  };

  const alertAndLogRandomNumber = () => {
    window.alert("About to log a random number!");
    console.log(Math.random()); // could replace with either of the below
    // logRandomOneLine()
    // logRandomTwoLines()
  };

  return (
    <div>
      <h1>My buttons</h1>
      <button onClick={logRandomOneLine}>Log random number (1)</button>
      <button onClick={logRandomTwoLines}>Log random number (2)</button>
      <button onClick={alertAndLogRandomNumber}>
        Alert and log random number
      </button>
    </div>
  );
}

export default App;
