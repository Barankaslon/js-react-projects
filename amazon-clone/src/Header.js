import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"http://pngimg.com/uploads/amazon/amazon_PNG25.png"}/>
            </HeaderLogo>
            <HeaderOptionAddress>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select Your address</OptionLineTwo>
            </HeaderOptionAddress>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    alighn-items: center;
`

const HeaderLogo = styled.div`

`
const HeaderOptionAddress = styled.div`

`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`

`