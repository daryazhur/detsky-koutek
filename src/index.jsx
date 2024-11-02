import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom' //instalace funkce z knihovny React Router DOM
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Link, Outlet } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';

const App = () => {
  return(
    <div className='container'>
      <header>
        <h1>Dětský koutek</h1>
      </header>
      <nav>
        <Link to='/'>Domů</Link>
        <span> | </span>
        <Link to='/about'>O nás</Link>
        <span> | </span>
        <Link to='/contact'>Kontakty</Link>
        <span> | </span>
        <Link to='/pobocky'>Pobočky</Link>
        <Outlet />
      </nav>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  )
}

const routes = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/pobocky',
      element: <CentersPage />
    },
    {
      path: '/pobocky/:id',
      element: <CenterDetail />
    }
  ]
}])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={routes} />);
