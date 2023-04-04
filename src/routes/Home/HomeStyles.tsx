import styled from 'styled-components'

export const Section = styled.div`
  border: solid 1px red;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
   div:nth-of-type(2) {
    margin: 0;
   padding-bottom: 1rem;  
  }

  @media only screen and (max-width: 1000px) {
        
  }
`