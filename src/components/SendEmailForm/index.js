import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

export default function SendEmailForm() {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env

    emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, REACT_APP_EMAILJS_PUBLIC_KEY).then(
      () => {
        alert('Message sucessfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Message failed to send!')
      }
    )
  }

  return (
    <FormStyled ref={formRef} onSubmit={sendEmail}>
      <ul>
        <li className="half">
          <input type="text" name="name" placeholder="Name" required />
        </li>
        <li className="half">
          <input type="email" name="email" placeholder="Email" required />
        </li>
        <li>
          <input type="text" name="subject" placeholder="Subject" required />
        </li>
        <li>
          <textarea placeholder="Message" name="message" required />
        </li>
        <li>
          <input type="submit" className="flat-button" value="SEND" />
        </li>
      </ul>
    </FormStyled>
  )
}

const FormStyled = styled.div`
  ul {
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;
      list-style: none;
      margin-bottom: 10px;
      overflow: hidden;
      display: block;
      position: relative;
      opacity: 0;
      animation: fadeInUp 2s 2s;
      animation-fill-mode: forwards;
      clear: both;
    }
    .half {
      width: 49%;
      margin-left: 2%;
      float: left;
      clear: none;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  input[type='text'],
  input[type='email'] {
    width: 100%;
    border: 0;
    background: #253458;
    height: 50px;
    font-size: 16px;
    color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
  }
  textarea {
    width: 100%;
    border: 0;
    background: #253458;
    height: 50px;
    font-size: 16px;
    color: #fff;
    padding: 20px;
    min-height: 150px;
    box-sizing: border-box;
  }
  .flat-button {
    cursor: pointer;
    color: #fa7a11;
    background: 0 0;
    font-size: 11px;
    letter-spacing: 3px;
    text-decoration: none;
    padding: 8px 10px;
    border: 1px solid #fa7a11;
    float: right;
    border-radius: 4px;
    &:hover {
      background: #fa7a11;
      color: #111;
    }
  }
`