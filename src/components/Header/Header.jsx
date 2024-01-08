import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to='/ido'>Տոկենի նախնական վաճառքը մինչ լիստինգը</NavLink>
        </div>
        <div>
          <NavLink to='/tocenomics'>Տոկենոմիկա</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header