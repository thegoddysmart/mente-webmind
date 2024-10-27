import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Dashboard from './Dashboard';
import SignUpPage from './SignUp.tsx';
import SignInPage from './SignIn.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
