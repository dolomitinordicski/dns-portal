import '@fontsource/be-vietnam-pro/400.css';
import '@fontsource/be-vietnam-pro/600.css';
import '@fontsource/be-vietnam-pro/700.css';
import '@fontsource/roboto/400.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles.css';
import './portal-visual.css';

const container = document.getElementById('app');
if (!container) throw new Error('Missing app root');
createRoot(container).render(<StrictMode><App /></StrictMode>);
