import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './ui/pages/Home.jsx'
import Produtos from './ui/pages/Produtos.jsx'
import Produto from './ui/pages/Produto.jsx'
import Trabalhos from './ui/pages/Trabalhos.jsx'
import Sobre from './ui/pages/Sobre.jsx'
import Contato from './ui/pages/Contato.jsx'
import './ui/styles.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/produtos/:slug', element: <Produto /> },
      { path: '/trabalhos', element: <Trabalhos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/contato', element: <Contato /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
