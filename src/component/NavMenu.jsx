import React from 'react'
const NavMenu = (props) => {
  return (
    <div className="nav-menu flex">
      <ul className="nav-links flex list-none p-4 text-xl font-medium">
        <li className='mx-6'><a href={props.link.url}>{props.link.name}</a></li>
      </ul>
    </div>
  )
}

export default NavMenu