import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NameInput } from './components/NameInput';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
   <NameInput/>
  </StrictMode>
);


