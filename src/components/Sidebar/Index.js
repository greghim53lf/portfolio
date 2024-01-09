import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from 'assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import "./index.scss";

export default function Sidebar() {
  return (
    <SidebarStyled className='nav-bar'>
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#404040" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about" to="/about">
          <FontAwesomeIcon icon={faUser} color="#404040" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#404040" />
              </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#404040" />
              </NavLink>
          </nav>
          <ul>
              <li>
                  <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/greghim53lf'>
                      <FontAwesomeIcon icon={faLinkedin} color="#404040"/>
                  </a>
              </li>
              <li>
                  <a target='_blank' rel='noreferrer' href='https://www.github.com/greghim53lf'>
                      <FontAwesomeIcon icon={faGithub} color="#404040"/>
                  </a>
              </li>
              <li>
                  <a target='_blank' rel='noreferrer' href='https://www.instagram.com/greghim53lf'>
                      <FontAwesomeIcon icon={faInstagram} color="#404040"/>
                  </a>
              </li>
              <li>
                  <a target='_blank' rel='noreferrer' href='https://www.twitter.com/greghim53lf'>
                      <FontAwesomeIcon icon={faTwitter} color="#404040"/>
                  </a>
              </li>
              <li>
                  <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCS5hK9FDKU-3QAg6bz7NaPA'>
                      <FontAwesomeIcon icon={faYoutube} color="#404040"/>
                  </a>
              </li>
          </ul>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  background: #19191a;
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  min-height: 500px;
  .logo {
    display: block;
    padding: 8px auto;
    img {
      display: block;
      margin: 8px auto;
      width: 36px;
      height: auto;
    }
  }
  nav{
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -120px;
    width: 100%;
    a{
        font-size: 22px;
        color: #404040;
        display: block;
        line-height: 51px;
        height: 51px;
        position: relative;
        text-decoration: none;
        i{
            transition: all 0.3s ease-in-out;
        }
        &:hover{
            color: #fa7a11;
            svg{
                opacity: 0;
            }
            &:after{
                opacity: 1;
            }
        }
        &:after{
            content: '';
            font-size: 7px;
            letter-spacing: 2px;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: all 0.3s ease-in-out;
        }
        &:first-child{
            &:after{
                content: 'HOME';
            }
        }
    }
        .about{
            &:after{
                content: 'ABOUT';
            }
        }
        .portfolio{
            &:after{
                content: 'PORTFOLIO';
            }
        }
        .contact{
            &:after{
                content: 'CONTACT';
            }
        }

        .active{
            svg{
                color: #fa7a11;
            }
        }

  }
        ul{
            position: absolute;
            bottom: 20px;
            width: 100%;
            display: block;
            padding: 0;
            list-style: none;
            text-align: center;
            margin: 0;
            li{
                a{
                    padding: 7px 0;
                    display: block;
                    font-size: 15px;
                    line-height: 16px;
                    &:hover{
                       svg{
                        color: #fa7a11;
                       } 
                    }
                }
            }
        }
        @media(max-width: 1200px){

        }
`
