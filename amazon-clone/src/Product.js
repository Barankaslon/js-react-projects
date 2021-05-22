import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
                Ipad Pro        
            </Title>
            <Price>
                $1499
            </Price>
            <Rating>

            </Rating>

            <Image />
            <AddToCartButton>
                Add to Cart
            </AddToCartButton>


        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: #fff;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
`

const Title = styled.span`

`
const Price = styled.span`

`
const Rating = styled.div`

`
const Image = styled.img`

`
const AddToCartButton = styled.button`

`