import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgurl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="container my-3">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>

          <img src={!imgurl ? "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </div>

    </div>
  )

}

export default NewsItem;
