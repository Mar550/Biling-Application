import React from 'react'
import styled from 'styled-components'
import google from '../assets/google-svg.svg'
import twitter from '../assets/twitter-svg.svg'
import data2 from '../assets/data2.svg'

const Wrapper = styled.div`
  background-color: #3c0d99;
  width: 100%;
  height: 49rem;
  padding: 2rem;
`
const Container = styled.div`
  background-color: white;
  padding: 2rem;
  display:flex;
  flex-direction: row;
  border-radius: 10px;
  gap: 1rem;
  width: 84%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
`
const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 0.7rem;
`
const Form = styled.div`
display: flex;
  flex-direction: column;
  gap: 0.7rem;

`
const Title = styled.h1`
  margin-top: 1rem;
  font-size: 28px;
  font-weight: 800;
  text-align:center;
`
const Social = styled.div`
margin-top: 1rem;
  display:flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const Input = styled.input`
  background-color: #f0f0f0;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  height: 2.3rem;
`
const Button = styled.button`
  height: 2.8rem;
  border:none;
  border-radius: 5px;
  gap: 1rem;
`
const Icon = styled.img`
width: 2rem;
`
const Submit = styled.button`
  margin-top: 1rem;
  border-radius: 5px;
  color: white;
  background-color: #8f00ff;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  border:none;
  &:hover {
    background-color: #3c0d99;
  }
`
const ImgContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;

`
const Image = styled.img`
  width: 100%;
  margin-top: 22%;
`
const Text = styled.p`
  color: #2c2a2b;
  font-size: 14px;
  text-align:center;
  width: 75%;
  margin-left: auto;
  margin-right:auto;
`
const Linked = styled.p`
  color: #2c2a2b;
  font-weight: bold;
  font-size: 16px;
  text-align:center;
  &:hover{
    cursor:pointer
  }
`
const Subtitle = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 80%;
  margin-left:auto;
  margin-right: auto;
`
const Line = styled.div`
border: 1px solid black;
margin-top: 12px;
height:1px;
width: 20%;
`

const Register = () => {
  return (
    <>
    <Wrapper>
      <Container>
        <FormContainer>
          <Title>
            SIGN UP TO JOIN US
          </Title>
          <Social>
            <Button> <Icon src={google}/> Sign up With Google </Button>
            <Button> <Icon src={twitter}/> Sign up With Twitter </Button>
          </Social>
          <Subtitle> <Line></Line> <Text> Or your can register with your email </Text> <Line></Line> </Subtitle>
          <Form> 
            <Input placeholder="Username" />            
            <Input placeholder="Email" />            
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />            
            <Submit> 
              CREATE AN ACCOUNT
            </Submit>
          </Form>
          <Text> By creating an account, i agree to the general Terms of Service and the Privacy Policy</Text>
          <Linked> Already have an account ? Sign In Here</Linked>
        </FormContainer>
        <ImgContainer>
          <Image src={data2}/>
        </ImgContainer>
      </Container>
    </Wrapper>
  </>
  )
}

export default Register