import React, {useState, useContext} from 'react'
import '../styles/login.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'


import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const userIcon = 'https://res.cloudinary.com/dgrefesap/image/upload/v1708941786/tourAndTravel/vn5ojl31eway0f5yanaw.png'

const Login = () => {
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const [credentials, setCredentials] = useState({
    email:undefined,
    password: undefined
})

  const handleChange = (e) => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type:'LOGIN_START'})
    try{
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
      const result = await res.json()

      if(!res.ok) alert(result.message)

      console.log(result.data);

      dispatch({type:'LOGIN_SUCCESS', payload: result.data})
      navigate('/')
    }catch(err){
      dispatch({type:'LOGIN_FAILURE', payload: err.message})
      alert(err.message)
    }
  }

  return (
    <section>
      <Container>
        <Row className='d-flex  justify-content-center '>
          <Col lg='8'>
            <div className="login__container d-flex justify-content-center ">
              <div className="login__img">
                <img src={`https://res.cloudinary.com/dgrefesap/image/upload/v1708941784/tourAndTravel/w86omfyw8aoylhf2b0jc.png`} alt="" />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='text' placeholder='Email' required id='email' onChange={handleChange}/>
                  </FormGroup>

                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                  </FormGroup>

                  <Button type='submit' className='btn secondary__btn auth__btn'>Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login