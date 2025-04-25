import { createSignal, onCleanup } from 'solid-js';

// Define the Solid component that will be converted to a Web Component
export function Counter(props) {
  // Create a signal for the counter
  const [count, setCount] = createSignal(props.initialValue || 0);
  
  // Optional: set up an interval to demonstrate reactivity
  const interval = setInterval(() => {
    setCount(c => c + 1);
  }, props.interval || 1000);
  
  // Clean up the interval when the component is removed
  onCleanup(() => clearInterval(interval));
  
  return (
    <div style={{ 
      'font-family': 'Arial, sans-serif',
      'padding': '1rem',
      'border': '2px solid #4285f4',
      'border-radius': '8px',
      'background-color': '#e8f0fe',
      'text-align': 'center',
      'width': '300px',
      'margin': '1rem auto'
    }}>
      <h2 style={{ 'color': '#4285f4' }}>SolidJS Counter</h2>
      <p>Count: <span style={{ 'font-weight': 'bold', 'font-size': '1.5rem' }}>{count()}</span></p>
      <div style={{ 'display': 'flex', 'justify-content': 'center', 'gap': '10px' }}>
        <button 
          style={{ 
            'padding': '8px 16px',
            'background-color': '#4285f4',
            'color': 'white',
            'border': 'none',
            'border-radius': '4px',
            'cursor': 'pointer'
          }}
          onClick={() => setCount(c => c - 1)}
        >
          Decrement
        </button>
        <button 
          style={{ 
            'padding': '8px 16px',
            'background-color': '#4285f4',
            'color': 'white',
            'border': 'none',
            'border-radius': '4px',
            'cursor': 'pointer'
          }}
          onClick={() => setCount(c => c + 1)}
        >
          Increment
        </button>
      </div>
      <p style={{ 'font-size': '0.8rem', 'margin-top': '1rem' }}>
        Auto-incrementing every {props.interval || 1000}ms
      </p>
    </div>
  );
}
