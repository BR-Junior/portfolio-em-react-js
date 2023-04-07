import {SocialButtonStyles} from './SocialButtonStyles'
import github from '../../assets/images/icon/github.svg'
import linkedin from '../../assets/images/icon/linkedin.svg'
import cv from  '../../assets/CvBianor.pdf'

const SocialButton = () => {
  const DownloadCv = () => {
    window.open(cv)
  }
  return(
    <SocialButtonStyles>
      <div>
        <a href="https://github.com/BR-Junior" target="_blank"><img src={github} alt="github"/></a>
        <a href="https://www.linkedin.com/in/bianor-ramos/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
      </div>
      <div>
        <button onClick={DownloadCv}>Download CV</button>
      </div>
    </SocialButtonStyles>
  )
}
export { SocialButton }