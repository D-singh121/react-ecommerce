import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// wrrapping the <App/> with global store using context Api
import { AppProvider } from './Context/product_context.jsx'

//only for products data and filter prducts page
import { FilterContextProvider } from './Context/Filter_Context.jsx'



// we are using multiple context.
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>
)
