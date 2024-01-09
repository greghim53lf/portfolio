import styled from 'styled-components'
import AnimatedLetters from 'components/AnimatedLetters'
import Map from 'components/Map'
import SendEmailForm from 'components/SendEmailForm'


export default function ContactPage() {
    
  return (
    <ContactPageStyled className="contact-page">
      <div className='form-text-field'>
      <div className="text">
        <h1>
          <AnimatedLetters word="Contact me" delay={1} />
        </h1>
        <p className='paragraph-style'>
          I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form
          either.
        </p>
        <div className="contact-form">
          <SendEmailForm/>
        </div>
      </div>
        </div>
      <div className="info-map">
        Okpeahior Gregory
        <br />
        Nigeria,
        <br />
        11, Adekoya Street, Off College-Road <br />
        Ogba
        <br />
        <span>greghim53lf@gmail.com</span>
        </div>
          <div className="map">
        <Map/>
      </div>
    </ContactPageStyled>
  )
}

const ContactPageStyled = styled.div`
  .contact-form {
    width: 100%;
    margin-top: 20px;
  }
  .info-map {
    position: absolute;
    background: #000;
    top: 50px;
    right: 30%;
    z-index: 9;
    width: 267px;
    padding: 20px;
    color: #fff;
    font-family: 'Helvetica';
    font-size: 15px;
    font-weight: 300;
    opacity: 0;
    animation: fadeIn 1s 1.5s;
    animation-fill-mode: forwards;
    span {
      font-size: 16px;
      display: block;
      padding-top: 20px;
      color: #fa7a11;
    }
  }
  .map{
    background: rgba(8, 216, 253, 0.3);
    float: right;
    width: 53%;
    height: 100vh;
    opacity: 0;
    animation: backInRight 1s 1.2s forwards;
  }
  @media(max-width: 1200px){
    .form-text-field{
      height: 100vh;
    }
    .info-map{
      display: none;
    }
    .map{
      float: none;
      width: 100%;
      height: 70vh;
      margin: 0;
    }
  }
`