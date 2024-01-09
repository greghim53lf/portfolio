import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from 'assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react'

export default function Sidebar() {
    const [showNav, setShowNav] = useState(false)
    
  return (
    <SidebarStyled className='nav-bar'>
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show': ''}>
        <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#404040" />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about" to="/about">
          <FontAwesomeIcon icon={faUser} color="#404040" />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#404040" />
              </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#404040" />
              </NavLink>
              <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#fa7a11" size='3x' className='close-icon'/>
          </nav>
          <ul className={showNav ? 'mobile-show' : ''}>
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
          <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#fa7a11' size='3x' className='hamburger-icon'/>
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
      margin: 14px auto;
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
        i, svg{
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
        .hamburger-icon,
        .close-icon{
            display: none;
            cursor: pointer;
        }
        @media(max-width: 1200px){
            background: transparent;
            position: initial;
            height: auto;
            min-height: auto;
            ul, nav{
                display: none;
                z-index: 10;
            }
            nav{
                width: 100%;
                height: 100%;
                background-color: #19191a;
                top: 0;
                left: 0;
                position: fixed;
                margin: 0;
                .active{
                    &::after{
                        color: var(--primary-orange);
                    }
                }
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &::after{
                        opacity: 1;
                        position: initial;
                        width: 100px;
                        font-weight: 700;
                        font-size: 13px;
                        margin-left: 10px;
                    }
                    &:hover{
                        svg, &::after{
                            color: var(--primary-orange);
                        }
                    }
                }
                a svg{
                    width: 40px;
                    opacity: 1 !important;
                }
            }
            .mobile-show{
                display: block;
                li{
                    display: inline-block;
                    margin: 0 20px;
                    a{
                        font-size: 20px;
                    }
                }
            }
            .hamburger-icon, .close-icon{
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }
`
