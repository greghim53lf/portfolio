export default function Portfolio({imgSrc, title, description, url}) {
  return (
      <div className="portfolio">
      <img src={imgSrc} className="portfolio-image" alt="portfolio" />
      <div className="content">
        <p className="title">{title}</p>
        <h4 className="description">{description}</h4>
        <button className="btn" onClick={() => window.open(url)}>View</button>
      </div>
    </div>
  )
}
