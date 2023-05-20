import App from './App';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

console.log( 'process.env.SITE_URL', process.env.SITE_URL );

root.render(<App />);