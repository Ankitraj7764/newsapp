import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let { tittle, description, imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card" >
          <img src={(!imgUrl)?"https://images.hindustantimes.com/img/2022/01/05/1600x900/ANI-20220104174-0_1641391230446_1641391247977.jpg":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
