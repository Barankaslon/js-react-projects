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
                :star:
            </Rating>

            <Image src="https://www.bhphotovideo.com/images/images2500x2500/apple_my232ll_a_11_ipad_pro_early_1553824.jpg"/>

            <ActionSection>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>



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
    display: flex;
    flex-direction: column;
`

const Title = styled.span`

`
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div`

`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    margin: 10px;
`

const ActionSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`