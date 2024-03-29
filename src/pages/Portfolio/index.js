import styled from "styled-components";
import AnimatedLetters from "components/AnimatedLetters";
import Portfolios from "./Portfolios";

export default function PortfolioPage() {
  return (
      <PortfolioPageStyled className="portfolio-page">
          <h1>
              <AnimatedLetters word="portfolio" delay={1}/>
          </h1>
      <div><Portfolios/></div>
    </PortfolioPageStyled>
  )
}
const PortfolioPageStyled = styled.div`
  padding-left: 100px;
  padding-right: 50px;
  width: calc(100% - 150px);
  position: initial;
  height: 100%;
  overflow: auto;
  h1{
    margin-left: 50px;
    margin-top: 100px !important;
  }
  .image-container{
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding-bottom: 100px;
    .portfolio{
      position: relative;
      flex: 1 1 20%;
      height: 400px;
      overflow: hidden;
      border-radius: 10px;
      max-width: calc(25% - 10px);
      .portfolio-image{
         position: absolute;
         z-index: 2;
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      .content{
        position: absolute;
        width: 100%;
        z-index: 3;
        padding: 10px 20px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 1));
        bottom: -70px;
        .title{
          margin-bottom: 0;
          margin-top: 0;
          color: #fff;
          font-size: 24px;
          font-weight: 500;
          line-height: 24px;
        }
        .description{
          font-size: 14px;
          margin-bottom: 5px;
          color: #fff;
          font-weight: 700;
        }
        .btn{
          margin-top: 30px;
          margin-bottom: 10px;
          padding: 0 23px;
          height: 40px;
          line-height: normal;
          border: 2px solid var(--primary-orange);
          border-radius: 4px;
          color: #fff;
          background: transparent;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          cursor: pointer;
          &:hover{
            transform: translateY(-3px);
            background: var(--primary-orange);
          }
        }
      }
      &:after{
        content: "";
        background: linear-gradient(180deg, var(--primary-orange), #000);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0;
      }
      &:hover::after{
        opacity: 0.85;
      }
      &:hover .content{
        bottom: 0;
        background: transparent;
      }
    }
  }
  @media(max-width: 1200px){
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    h1{
      margin-left: 20px;
      margin-top: 20px !important;
    }
    .image-container{
      .portfolio{
        height: 200px;
        max-width: calc(50% - 10px);
      }
    }
  }
`