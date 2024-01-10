import styled from 'styled-components'
import LogoG from 'assets/images/g.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from 'components/AnimatedLetters'
import Logo from 'components/Logo'

export default function HomePage() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
     }
  }, [])

  return (
    <HomePageStyled className="container">
      <div className="text">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoG} alt="developer" />
          <AnimatedLetters timeout={4000} word="reg" delay={15} />
          <br />
          <AnimatedLetters word="software developer." timeout={4000} delay={18} />
        </h1>
        <h2>Software Engineer</h2>
        <Link className="flat-button" to="/contact">
          CONTACT ME
        </Link>
      </div>
      <Logo className="logo-container"/>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
  .text {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    max-height: 90%;
    h1 {
      color: #fff;
      font-family: 'Coolvetica';
      font-size: 53px;
      font-weight: 400;
      margin: 0;
      &:before {
        content: '<h1>';
        font-family: 'La Belle Aurore';
        color: #fa7a11;
        font-size: 18px;
        position: absolute;
        margin-top: -40px;
        left: 15px;
        opacity: 0.6;
      }
      &:after {
        content: '</h1>';
        font-family: 'La Belle Aurore';
        color: #fa7a11;
        font-size: 18px;
        position: absolute;
        margin-top: 18px;
        margin-left: 20px;
        animation: fadeIn 1s 1.7s backwards;
        opacity: 0.6;
      }
      .text-animate {
        display: inline-block;
        opacity: 0;
        animation: bounceIn 1s 1s;
        animation-fill-mode: forwards;
        min-width: 10px;
      }
      .text-animate-hover {
        min-width: 10px;
        display: inline-block;
        animation-fill-mode: both;
        &:hover {
          animation: rubberBand 1s;
          color: #fa7a11;
        }
      }

      @for $i from 1 through 31 {
        .text-animate ._#{$i} {
          animation-delay: #{$i / 10}s;
        }
      }
      img {
        width: 64px;
        margin-left: 20px;
        opacity: 0;
        height: auto;
        animation: rotateIn 1s linear both;
        animation-delay: 1.4s;
      }
    }
    h2 {
      color: #8c8f8c;
      margin-top: 20px;
      font-family: sans-serif;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 3px;
      animation: fadeIn 1s 1.8s backwards;
    }
    .flat-button {
      color: #fa7a11;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 4px;
      font-family: sans-serif;
      text-decoration: none;
      padding: 10px 18px;
      border: 1px solid #fa7a11;
      margin-top: 25px;
      float: left;
      animation: fadeIn 1s 1.8s backwards;
      white-space: nowrap;
      &:hover {
        background: #fa7a11;
        color: #111;
      }
    }
  }
  @media(max-width: 1200px){
    .text{
      position: initial;
      width: 100%;
      transform: none;
      padding: 10px;
      box-sizing: border-box;
      h1::before,
      h1::after{
        display: none;
      }
      h2{
        text-align: center;
      }
      .flat-button{
        float: none;
        display: block;
        margin: 20px auto 0 auto;
        width: 125px;
      }
    }

    .logo-container{
      position: relative;
      width: 150px;
      height: auto;
      top: 50px;
      right: 0;
      box-sizing: border-box;
      margin: auto;
      left: 0;
    }
  }
  @media(max-width: 1200px) and (min-width: 768px){
    .logo-container{
      width: 350px;
    }
  }
  @media(max-width: 280px){
    .logo-container{
      width: 75px;
    }
  }
`