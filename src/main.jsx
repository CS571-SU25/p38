import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './components/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserProvider> 
    <App />
  </UserProvider>
);
