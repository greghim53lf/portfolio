import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faGitAlt, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import styled from "styled-components"

export default function index() {
    return (
        <CubeSpinnerStyled>
            <div className="face1">
                <FontAwesomeIcon icon={faFigma} color="#e4041d" />
            </div>
            <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
                <FontAwesomeIcon icon={faNodeJs} color="#efd81d" />
            </div>
            <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
            <div className="face6">
                <FontAwesomeIcon icon={faPython} color="#000" />
            </div>
        </CubeSpinnerStyled>
    )
}

const CubeSpinnerStyled = styled.div`
      animation-name: spincube;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 12s;
      transform-style: preserve-3d;
      transform-origin: 100px 100px 0;
      margin-left: calc(50% - 100px);
      div {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
        background: rgba(255, 255, 255, 0.4);
        font-size: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 20px 0 lightcoral;
      }
      .face1 {
        transform: translateZ(100px);
      }
      .face2 {
        transform: rotateY(90deg) translateZ(100px);
      }
      .face3 {
        transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
      }
      .face4 {
        transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
      }
      .face5 {
        transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
      }
      .face6 {
        transform: rotateX(-90deg) translateZ(100px);
      }

    @keyframes spincube {
        from,
        to {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
        16% {
        transform: rotateY(-90deg);
        }
        33% {
        transform: rotateY(-90deg) rotateZ(90deg);
        }
        50% {
        transform: rotateY(-180deg) rotateZ(90deg);
        }
        66% {
        transform: rotateY(-270deg) rotateZ(90deg);
        }
        83% {
        transform: rotateX(90deg);
        }
  }
`