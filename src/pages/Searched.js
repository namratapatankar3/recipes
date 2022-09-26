import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const getSearched = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
        const data = await response.json()
        setSearchedRecipes(data.results)
    }
    useEffect(() => {
        getSearched(params.search)
    }, [params.search])
    return (
        <Grid>
            {searchedRecipes.map((recipe) => {
                return (
                    <Card key={recipe.id}>
                        <Link to={"/recipes/" + recipe.id}>
                            <img src={recipe.image} alt="" />
                            <h4>{recipe.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}
const Grid = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit, minmax(20rem,1fr));
grid-gap:3rem`
const Card = styled.div`
img{
    width:100%;
    border-radius:2rem
}
a{
    text-decoration:none;
}
h4{
    text-align:center;
    padding:1rem;
}`
export default Searched