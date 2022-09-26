import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export const Cuisine = () => {
    let params = useParams()
    const [cuisine, setCuisine] = useState([])
    const getCuisine = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
        const data = await response.json()
        setCuisine(data.results)
    }
    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])
    return (
        <Grid animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            {cuisine.map((recipe) => {
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
const Grid = styled(motion.div)`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-row: 1fr 1fr 1fr;
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
