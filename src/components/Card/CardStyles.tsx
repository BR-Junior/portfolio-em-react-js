import styled from 'styled-components'

const CardStyles = styled.div`
  width: 250px;
  height: auto;
  border-radius: 2rem;
  text-align: center;
  & span {
    text-transform: uppercase;
  }

  & div img {
    width: 200px;
    height: 200px;
    border-radius: 2rem;
  }

  & div p {
    width: 100%;
    margin-bottom: 1rem;
  }
  & div:nth-of-type(3) { margin-bottom: 1rem }
  & div a {
    border: solid 1px rgba(26, 98, 205, 0.5);
    text-decoration: none;
    color: white;
    padding: 1rem;
    cursor: pointer;
  }
`
export default CardStyles
