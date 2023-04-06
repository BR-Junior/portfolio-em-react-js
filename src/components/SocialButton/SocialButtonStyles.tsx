import styled from 'styled-components'

const SocialButtonStyles = styled.div`
  margin-top: 2.1rem;
  display: flex;
  flex-direction: column;

  & div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 200px;
    height: 50px;
    margin: 0 0;
    margin-bottom: .5rem;
  }

  & div:nth-of-type(2) {
    margin: 0 0;
    display: flex;
    justify-content: center;
  }

  & div button {
    padding: 1rem;
    cursor: pointer;
    background: #1a62cd;
    border: none;
    color: #ffffff;
    border-radius: .5rem;
  }
`
export { SocialButtonStyles }
