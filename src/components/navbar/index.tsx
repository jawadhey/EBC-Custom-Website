import React from 'react'
// import MobileMenu from './mobileMenu'
import { isAbsolute } from 'path'
import Container from '../Container'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

type PropType = {
   isAbsolute?: boolean
   border?: boolean
}

const Navbar = ({ isAbsolute, border }: PropType) => {
   return (

      <header className={`w-full z-50 
         ${isAbsolute ? 'absolute top-0 left-0' : 'static'}
         ${border && 'border-b-[1px] border-[#CFD1D3]'}
      `}>
         <Menu />
         <MobileMenu />
      </header>
   )
}

export default Navbar