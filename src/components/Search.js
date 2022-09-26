import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input)
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input type="text" onChange={(e) => (setInput(e.target.value))} />
      </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
margin:0rem 21rem;
div{
  width:100%;
  position:relative;
}
input{
  border:none;
  border-radius:1rem;
  background:linear-gradient(35deg,#494949,#313131);
  font-size:1.5rem;
  color:white;
  padding:1rem 3rem;
  outline:none
  width:100%;
}
svg{
  color:white;
  top:50%;
  left:0%;
  position:absolute;
  transform:translate(100%,-50%)
}
`
export default Search