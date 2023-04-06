import styled from 'styled-components'

const CardStyles = styled.div`
  //position: relative;
  width: 250px;
  height: 380px;
  border-radius: 2rem;
  text-align: center;
  //overflow: hidden;
  margin-bottom: auto;

  & span {
    text-transform: uppercase;
  }

  & div img {
    width: 250px;
    height: 250px;
    border-radius: 2rem;
  }

  & div p {
    width: 100%;
    margin-bottom: 1rem;
  }

  & div a {
    border: solid 1px rgba(26, 98, 205, 0.5);
    text-decoration: none;
    color: white;
    padding: 1rem;
    cursor: pointer;
  }
`
export default CardStyles
