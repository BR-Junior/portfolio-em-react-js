import styled from 'styled-components'

const CardStyles = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 2rem;
  text-align: center;
  //border: solid 2px rgba(26, 98, 205, 0.5);
  overflow: hidden;
  & span { text-transform: uppercase; }
  & div img{
    width: 250px;
    height: 200px;
    border-radius: 2rem;
  }
  & p {
    position: absolute; 
    width: 250px;
    height: 250px;
    backdrop-filter: blur(20px);
  }
  & p:hover {
    top: 10%;    
  }
`
export default CardStyles
