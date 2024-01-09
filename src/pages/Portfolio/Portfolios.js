import portfolioData from "data/portfolio.json";
import Portfolio from "./Portfolio";

export default function Portfolios(){
    return (
      <div className="image-container">{
            portfolioData.portfolio.map(data => {
                const {id, cover, title, description, url} = data
                return <Portfolio key={id} imgSrc={cover} title={title} description={description} url={url}/>
            })
      }</div>
    )
   }