import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 60px;
 
`;
const Wrapper =styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content :space-between;
`;
const Left =styled.div`
flex: 1;
display: flex;
align-items:center;

`;
const SearchContainer =styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input =styled.div`
border:none;

`;

const Language =styled.span`
font-size: 14px;
cursor: pointer;
`
const Right =styled.div`
flex: 1;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;

`;// ${mobile({ fontSize: "24px" })}
 
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;

`;//${mobile({ fontSize: "12px", marginLeft: "10px" })}
 
export const Navbar = () => {
  return (
    <Container>
<Wrapper>
<Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
      </Left>
    
    <Center><Logo>LAMA.</Logo></Center>
    <Right>Right
    <MenuItem>REGISTER</MenuItem>

    </Right>
</Wrapper>

    </Container>
  )
}
