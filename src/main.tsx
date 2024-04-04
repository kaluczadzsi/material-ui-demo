import { createRoot } from 'react-dom/client';
import App from './App.js';
import './main.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);
root.render(<App />);
