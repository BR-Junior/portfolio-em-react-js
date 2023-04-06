import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: justify;
  border-bottom: solid 1px #ffffff;
  margin-bottom: 1rem;
  div:nth-of-type(1) {
    text-transform: uppercase;
    width: 100%;
    text-align: center;   
  }
  div:nth-of-type(2) {
    margin: 0;
    padding-bottom: 1rem;
    display: flex;
  }
`