import './App.css'
import SolidCounter from './components/SolidCounter'

// Import our Solid Web Components
// This registers them with the browser
import './solid-components'

function App() {
  return (
    <div className="app-container">
      <h1>SolidJS Components in React Demo</h1>
      
      <div className="description">
        <p>
          This demo shows how SolidJS components can be used in a React application
          by converting them to Web Components using <code>solid-element</code>.
        </p>
      </div>
      
      <div className="demo-section">
        <h2>SolidJS Counter as Web Component</h2>
        <SolidCounter initialValue={5} interval={1000} />
      </div>
      
      <div className="info-section">
        <h3>How It Works</h3>
        <ol>
          <li>Create a SolidJS component with its own state and reactivity</li>
          <li>Convert it to a Web Component using <code>solid-element</code></li>
          <li>Create a React wrapper component (optional but recommended)</li>
          <li>Use the component in your React application</li>
        </ol>
      </div>
    </div>
  )
}

export default App