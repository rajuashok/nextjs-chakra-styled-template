import { chakra } from '@chakra-ui/system';
import type { NextPage } from 'next'
import styled from 'styled-components';

const StyledButton = styled.div`
  width: fit-content;
  padding: 6px 8px;
  margin: 4px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
`;

const ChakraButton = chakra(StyledButton, {
  baseStyle: {
    backgroundColor: "lightblue",
    border: "4px dashed blue",
  }
})

const Home: NextPage = () => {
  return (
    <div>
      Next.js, Chakra and Styled Components
      <StyledButton>Styled</StyledButton>
      <ChakraButton>Chakra</ChakraButton>
    </div>
  )
}

export default Home
