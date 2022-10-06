import React, { Component } from "react";
import NewsItem from "./NewsItem";

import PropTypes from 'prop-types';


export class news extends Component {
  static defaultProps={
    country:'in',
    category: 'genral'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }
  
  constructor() {
      super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
      let url2=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3b06d608ba0426c9dbb1de5cb946238&page=2`
      let data=await fetch(url2);
      let parseData=await data.json();
      console.log(parseData);
      this.setState({articles: parseData.articles})
  }
  next=async()=>{
    let url2=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3b06d608ba0426c9dbb1de5cb946238&page=${this.state.page+1}`
    let data=await fetch(url2);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})

  this.setState({
    page:this.state.page+1,
    aeticles: parseData.articles

  })
    

  }
prev=async()=>{
  let url2=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f3b06d608ba0426c9dbb1de5cb946238&page=${this.state.page-1}`
  let data=await fetch(url2);
  let parseData=await data.json();
  console.log(parseData);
  this.setState({articles: parseData.articles})

this.setState({
  page:this.state.page-1,
  aeticles: parseData.articles

})
    
}
  render() {
    return (
        <>  <h3 className="text-center">Top headlines of today</h3>
      <div className="container my-4  " >
      <div
          dataLength={this.state.articles}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
         
         <div className="row">
        {this.state.articles.map((element,i) => {
          return (
            <div className="col-md-4" key={i}>
              <NewsItem
                tittle={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}


      </div>
        </div>
      <div className="btn d-flex justify-content-center">

      <button  type="button" class="btn btn-dark" onClick={this.prev}>next&rarr;</button>

      </div>
      </div></> 
    );
  }
}

export default news;
