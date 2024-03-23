import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// wrrapping the <App/> with global store using context Api
import { AppProvider } from './Context/product_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>

)
