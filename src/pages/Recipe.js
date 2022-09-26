import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Recipe() {
    let params = useParams()
    const [activeTab, setActiveTab] = useState('instructions')
    const [details, setDeatails] = useState({})
    const fetchDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data = await response.json()
        setDeatails(data)
    }
    useEffect(() => {
        fetchDetails()
    }, [params.name])
    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => (setActiveTab("instructions"))}>
                    Instructions
                </Button>
                <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => (setActiveTab("ingredients"))}>
                    Ingredients
                </Button>
                {activeTab === "instructions" && (<div style={{ margin: '20px' }}>

                    <h5 dangerouslySetInnerHTML={{ __html: details.instructions }}></h5>
                </div>)}
                {activeTab === "ingredients" && (<h5><ul>

                    {details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul></h5>)}
            </Info>
        </DetailWrapper>
    )
}
const DetailWrapper = styled.div`
margin-top:3rem;
margin-bottom:5rem;
display:flex;
.active{
    color:white;
    background:linear-gradient(35deg,#494949,#313131);
}
h2{
    margin-bottom:2rem;
}
li{
   
    font-size:1.2rem;
    line-height:2rem;
}
ul{
    margin-top:1rem;
    color:black;
}`
const Button = styled.button`
margin-right:2rem;
margin-left:1rem;
padding:1rem 2rem;
background:white;
color:black;
border:2px solid black;
font-weight:600
`
const Info = styled.div`
margin-left:7rem
`
export default Recipe