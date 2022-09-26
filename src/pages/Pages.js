import React from 'react'
import Home from './Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Cuisine } from '../components/Cuisine'
import { AnimatePresence } from 'framer-motion'
import Searched from './Searched'
import Recipe from './Recipe'
function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/searched/:search" element={<Searched />}></Route>
        <Route path="/recipes/:name" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>


  )
}

export default Pages