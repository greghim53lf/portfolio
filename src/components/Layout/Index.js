import { Outlet } from "react-router-dom";
import Sidebar from "components/Sidebar/Index";
import styled from "styled-components";

export default function Layout() {
  return (
      <LayoutStyled>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  .page{
    width: 100%;
    height: 100%;
    position: absolute;
    .top-tags{
      bottom: auto;
      top: 35px;
    }
    .tags{
      color: #fa7a11;
      opacity: 0.6;
      position: absolute;
      bottom: 0;
      left: 120px;
      font-size: 18px;
      font-family: 'La Belle Aurore';
    }
    .bottom-tags{
      .bottom-tag-html{
        margin-left: -20px;
      }
    }

    .container{
      width: 100%;
      will-change: contents;
      height: 90%;
      min-height: 566px;
      position: absolute;
      opacity: 0;
      top: 5%;
      margin: 0 auto;
      z-Index: 1;
      transform-style: preserve-3d;
      animation: fadeIn 1s forwards;
      animation-delay: 1s;
    }

    .about-page,
    .contact-page,
    .portfolio-page{
      h1{
        font-size: 53px;
        font-family: 'Coolvetica';
        color: #fa7a11;
        font-weight: 400;
        margin-top: 0;
        position: relative;
        margin-bottom: 40px;
        left: 10px;
        &::before{
          content: '<h1>';
          font-family: 'La Belle Aurore';
          font-size: 18px;
          line-height: 18px;
          position: absolute;
          margin-top: -10px;
          left: -10px;
          opacity: 0.6;
        }
        &::after{
          content: '</h1>';
          font-family: 'La Belle Aurore';
          font-size: 18px;
          line-height: 18px;
          position: absolute;
          margin-left: 20px;
          left: -30px;
          bottom: -20px;
          opacity: 0.6;
        }
      }
      .paragraph-style{
        font-size: 13px;
        color: #fff;
        font-family: sans-serif;
        font-weight: 300;
        min-width: fit-content;
        animation: pulse 1s;
        &:nth-of-type(1){
          animation-delay: 0.1s;
        }
        &:nth-of-type(2){
          animation-delay: 0.2s;
        }
        &:nth-of-type(3){
          animation-delay: 0.3s;
        }
      }
      .text{
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 35%;
        vertical-align: middle;
        display: table-cell;
        max-height: 90%;
      }
    }
    .text-animate-hover{
      &:hover{
        color: #fff;
      }
    }
  }
`