import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Faq_Projects/App'
import Index from './index'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Index />
    {/* <App /> */}
  </StrictMode>,
)
