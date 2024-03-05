import React, {useContext, useState} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import registerImg from '../assets/images/register.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'


const Register = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: undefined,
    email:undefined,
    password: undefined
  })

  const {dispatch} = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const result = await res.json()

      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <section>
      <Container>
        <Row className='d-flex  justify-content-center'>
          <Col lg='8'>
            <div className="login__container d-flex justify-content-between ">
              <div className="login__img">
                <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941785/tourAndTravel/pp4aaa8onzzlgey7ohsv.png`} alt="" />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941786/tourAndTravel/vn5ojl31eway0f5yanaw.png`} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='text' placeholder='UserName' required id='username' onChange={handleChange}/>
                  </FormGroup>

                  <FormGroup>
                    <input type='text' placeholder='Email' required id='email' onChange={handleChange}/>
                  </FormGroup>

                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                  </FormGroup>

                  <Button type='submit' className='btn secondary__btn auth__btn'>Create Account</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register