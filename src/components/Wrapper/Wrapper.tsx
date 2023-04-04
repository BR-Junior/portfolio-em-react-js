import styled from 'styled-components'

export const Wrapper = styled.div`
  width: auto;
  margin-top: 2rem;
  margin-left: 210px;
  margin-right: 10px;
  padding: 1rem 1rem;
  background: transparent;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
  @media only screen and (max-width: 425px) {
    min-width: 320px;
    margin-left: 0;
  }
`