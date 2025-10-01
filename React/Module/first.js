// Original React useState
// Global state storage and index tracker
let state = [];
let currentIndex = 0;

// Custom useState with ternary initialization
function myUseState(initialValue) {
  const index = currentIndex;

  // Initialize state only if undefined
  state[index] = state[index] === undefined ? initialValue : state[index];

  function setState(newValue) {
    state[index] = newValue;
    console.log(`State updated at index ${index}:`, newValue);
    render(); // Re-render when state changes
  }

  currentIndex++;
  return [state[index], setState];
}


// "Component" function simulating React component
function CounterComponent() {
  currentIndex = 0; // Reset before render

  // Declare multiple states
  const [count, setCount] = myUseState(0);
  const [name, setName] = myUseState("Alice");

  // Simulate UI render output
  console.log("Rendering component...");
  console.log(`Count: ${count}`);
  console.log(`Name: ${name}`);
  
  // Simulate user interactions with delays
  setTimeout(() => setCount(count + 1), 1000);  // Increment count after 1 second
  setTimeout(() => setName("Bob"), 2000);       // Change name after 2 seconds
}

// Render function to simulate React render cycle
function render() {
  console.clear();
  CounterComponent();
}

// Start the first render
render();

