import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home/HomePage'
import { LocationPage } from './pages/locations/LocationPage'
import { Layout } from './components/layout/Layout'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path="locations" element={<LocationPage/>}/>
          <Route path="pokemon/:id" element={<PokemonDetailPage/>}/>

        </Route>
    
      </Routes>
    </BrowserRouter>    

  </StrictMode>,
)