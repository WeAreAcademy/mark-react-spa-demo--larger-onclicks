/**
 * Main takeaway: a default JSX element's onClick
 *  can only take a function.
 *
 * Task: try breaking the App by assigning things that
 *  AREN'T functions to any of the button onClicks.
 *
 * Success: be able to articulate why the app does not
 *  compile when passing in the following as onClicks:
 *    - myString
 *    - myFixedNumber
 *    - myRandomNumber
 *    - myReturnValue
 */

/**
 * This demos a few different ways in which you can
 *  pass a function to the onClick of a default element.
 */

function App() {
  /**
   * Section one:  3 x valid function references
   */
  function handleExpressionReference() {
    console.log("From function expression reference");
  }

  const handleArrowFunctionBody = () => {
    console.log("From handle arrow function body");
  };

  const arrowFunctionImplicitReturn = () =>
    console.log("From arrow function implicit return");

  /**
   * Section two: 4 x non-function references
   */

  const myString = "hi";
  const myFixedNumber = 42;

  /**
   * This is NOT a function reference.
   *
   * Our variable is capturing the return value of
   *  executing a function: Math.random(), which
   *  happens to return a number.
   *
   * Therefore, it is a reference to a number.
   */
  const myRandomNumber = Math.random();

  /**
   * This is NOT a function reference.
   *
   * Our variable is capturing the return value of
   *  executing a function: console.log("uh oh"),
   *  which happens to return undefined.
   *
   * Therefore, it is a reference to undefined.
   *
   * Unlike the above console.logs, this one executes
   *  as soon as the App renders (check this out in
   *  your browser console). The others are patiently
   *  waiting in functions to be triggered.
   *
   * By passing these functions to our button, we are
   *  telling our button: "You're in charge of running
   *  this function when you are clicked."
   */
  const myReturnValue = console.log("uh oh");

  return (
    <div>
      <h1>My buttons</h1>
      <button onClick={handleExpressionReference}>
        Function expression reference
      </button>
      <button onClick={handleArrowFunctionBody}>Arrow function body</button>
      <button onClick={arrowFunctionImplicitReturn}>
        Arrow function implicit return
      </button>
      <button
        // NB this is unorthodox, nobody does it - but it works,
        //  because it's a function we're passing in
        onClick={function () {
          console.log("From anonymous function expression");
        }}
      >
        Inline anonymous function expression
      </button>
      <button
        onClick={() => {
          console.log("From inline anonymous arrow function with body");
        }}
      >
        Inline anonymous arrow function with body
      </button>
      {/*
        Inline arrow function with implicit return is most common
          for _simple_ onClicks, because it is the most concise
          and fits easily on one line.

        However, all the other ways of doing it work as well -
          because they're all passing functions to the onClick.
      */}
      <button onClick={() => console.log("Most concise")}>
        Inline anonymous arrow function, implicit return
      </button>
    </div>
  );
}

export default App;
