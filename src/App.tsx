/**
 * Main takeaway: we can also pass functions inline
 *  just as we can pass in a reference.
 *
 * N.B. Passing an inline function expression is unorthodox.
 *  We do not recommend that you do it. However, it works -
 *  because it is passing a function.
 */

function App() {
  return (
    <div>
      <h1>My buttons</h1>
      <button
        // NB this is unorthodox, nobody does it - but it works,
        //  because it's a function we're passing in
        onClick={function handleClick() {
          console.log("From named function expression");
        }}
      >
        Inline named function expression
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
