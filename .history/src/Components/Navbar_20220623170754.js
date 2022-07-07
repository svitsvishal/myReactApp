import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 60px;
 
`;
const Wrapper =styled.div`
padding: 10px 20px;
display: flex;
justify-content :space-between;
`
const Left =styled.div``
const Right =styled.div``
const Center =styled.div``
 
 
 
export const Navbar = () => {
  return (
    <Container>
<Wrapper>
    <Left>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur eum, ex laborum a voluptas explicabo culpa quam officia. Illo incidunt, consequatur autem explicabo voluptatibus facilis esse voluptatum molestiae expedita!</Left>
    <Center>center</Center>
    <Right>Right</Right>
</Wrapper>

    </Container>
  )
}
