import Me from 'assets/images/me.jpeg'
import styled from 'styled-components'

export default function Logo() {

  return (
    <ImageStyled>
      <img className="developer-image" src={Me} alt="g" />
      <figcaption>@greghim53lf</figcaption>
    </ImageStyled>
  )
}

const ImageStyled = styled.figure`
    z-index: 0;
    width: 400px;
    height: 609px;
    position: absolute;
    top: 0;
    right: 15%;
    bottom: 0;
    left: auto;
    margin: auto;

    animation: wave ease-in-out 0.8s infinite alternate;
    transform-origin: center -36px;
    &:hover{
      animation-play-state: paused;
      cursor: pointer;
    }
    .developer-image{
        animation: fadeIn 1s;
        position: absolute;
        top: auto;
        right: auto;
        bottom: auto;
        left: 0;
        margin: auto;
        width: 100%;
        transform: rotate3d(30deg);
        z-index: 1;
        border-radius: 12px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        border: 5px solid var(--primary-orange);
        display: block;
        /* width: 200px; */
        /* height: 250px; */
    }
    figcaption{
      text-align: center;
    }
    &::after{
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border: 1.5px solid #fff;
      top: -10px;
      left: 50%;
      border-bottom: none;
      border-right: none;
      transform: rotate(35deg);
    }
    &::before{
      content: "";
      position: absolute;
      top: -23px;
      left: 50%;
      display: block;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-image: url(https://img.freepik.com/premium-photo/realistic-diamond-crystal-with-caustic-close-up-texture-background-3d-rendering_169963-848.jpg?w=740);
      background-size: 20px 20px;
      background-repeat: no-repeat;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px inset;
      z-index: 16;
    }
    @keyframes wave {
     0%{transform: rotate(10deg);} 
     100%{transform: rotate(-10deg)}
    }
`