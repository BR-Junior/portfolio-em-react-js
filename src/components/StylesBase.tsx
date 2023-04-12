import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  text-align: justify;
  border-bottom: solid 1px #ffffff;
  margin-bottom: 1rem;
  .title {
    text-transform: uppercase;
    width: 100%;
    display: flex;
    justify-content: center;       
  }
  div .content {
    margin: 0;
    padding-bottom: 1rem;
    display: flex;
  }
`