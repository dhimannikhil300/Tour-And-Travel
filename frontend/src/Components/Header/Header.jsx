import React, {useRef, useEffect, useContext} from 'react'
import { Container, Row, Button } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./header.css"
import { AuthContext } from '../../context/AuthContext'

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/')
  }
  const navLinks = [
    {
      id:1,
      path: '/home',
      display: 'Home',
    },
    {
      id:2,
      path: '/about',
      display: 'About',
    },
    {
      id:3,
      path: '/tours',
      display: 'Tours',
    },
  ]

  const stickyHeaderFunc = () => {
    window.addEventListener( 'scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu')
  }

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-itemo-center justify-content
          justify-content-between'>
            {/*------------ LOGO ------------ */} 
            <div className='logo'>
              <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941784/tourAndTravel/kybmrzsjwemlk1outkt4.png`} alt=''/>
            </div>

            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-item-center gap-5'>
                {
                  navLinks.map( (item)=>(
                    <li className='nav__item' key={item.id}>
                      <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link": ""}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className='nav__right d-flex align-tems-center gap-4'> 
              <div className='nav__btns d-flex align-items-center gap-4'>
                {
                  user ? <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                  </> : <>
                    <Button className="btn secondary__btn"><Link to="/login">Login</Link></Button>
                    <Button className="btn primary__btn"><Link to="/register">Register</Link></Button>
                  </>
                }
              </div>
              
              <span className='mobile__menu' onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header