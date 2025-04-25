import { customElement } from 'solid-element';

// Import and register all Solid components as Web Components
import { Counter } from './Counter';

// Convert the Solid component to a Web Component
customElement('solid-counter', { initialValue: 0, interval: 1000 }, Counter);