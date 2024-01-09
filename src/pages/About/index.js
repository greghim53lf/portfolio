import styled from 'styled-components'
import AnimatedLetters from 'components/AnimatedLetters'
import CubeSpinner from "components/CubeSpinner"

export default function AboutPage() {

  return (
      <AboutPageStyled className="about-page">
        <div className="text">
          <h1>
            <AnimatedLetters word="About me" delay={1} />
          </h1>
          <p className='paragraph-style'>I'm a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</p>
          <p className='paragraph-style' align="LEFT">I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          <p className='paragraph-style'>If I need to define myself in one sentence that would be a family person, father of a beautiful daughter, a sports fanatic, photography enthusiast, and tech-obsessed!!!</p>
        </div>
        <div className="stage-cube-container">
          <CubeSpinner/>
        </div>
      </AboutPageStyled>
  )
}

const AboutPageStyled = styled.div`
  .stage-cube-container {
    width: 50%;
    height: 100%;
    top: 0;
    padding-top: 18%;
    margin-left: 0;
    position: absolute;
    right: 0;
    overflow: hidden;
    animation: fadeIn 3s;
  }
  @media(max-width: 1200px){
    .stage-cube-container{
      position: initial;
      width: 100%;
      height: 0;
      overflow: visible;
    }
  }
`