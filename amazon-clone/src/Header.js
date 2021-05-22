import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"http://pngimg.com/uploads/amazon/amazon_PNG25.png"}/>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />  
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your address</OptionLineTwo>
                </HeaderOption>

            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <OptionLineOne>Hello, Alex</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <ShoppingBasketIcon />
                    <CartCount>4</CartCount>
                </HeaderOptionCart>

            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    alighn-items: center;
    justify-content: space-between;
    color: #fff;
    padding: 10px;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
    }
`
const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 600;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOption = styled.div`
    padding: 0 10px;
`

const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px
`

const CartCount = styled.div`
    padding-left: 5px;
`