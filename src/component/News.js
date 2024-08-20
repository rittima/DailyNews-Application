import React, { Component } from 'react'
import NewItem from './NewItem'
import Navbar from './Navbar';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    query:'india',
    pageSize:6,
    
  }

  static propsTypes = {
    query:PropTypes.string,
    pageSize:PropTypes.number,
    
  }
    
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
          }        
    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?q=${this.props.query}&apiKey=6be71fce3d3843c38d7a12b88733f731&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let articles = await fetch(url);
      let parsearticles = await articles.json();
      console.log(parsearticles);
      this.setState({
        articles:parsearticles.articles,
        totalResults:parsearticles.totalResults,
        loading:false
      })
    }

    handlePrevClick = async() => {
      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?q=${this.props.query}&apiKey=6be71fce3d3843c38d7a12b88733f731&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let articles = await fetch(url);
      let parsearticles = await articles.json();
      this.setState({
        page:this.state.page - 1,
        articles: parsearticles.articles,
        loading:false
      })
    }

    handleNextClick = async() => {
      console.log("Next");
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?q=${this.props.query}&apiKey=6be71fce3d3843c38d7a12b88733f731&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let articles = await fetch(url);
      let parsearticles = await articles.json();
      this.setState({
        page:this.state.page + 1,
        articles: parsearticles.articles,
        loading:false
      })   
    }   
    }


  render() {    
    return (
      <div style={{backgroundColor:'black',color:'white'}}>
        <Navbar/>
      <div className="container my-4" style={{backgroundColor:'black',color:'white'}}>
        <h1 className='text-center my-5'>DailyNews - Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewItem
              title={element.title?element.title.slice(0,50):""}
              description={element.description?element.description.slice(0,80):""}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
              date={element.publishedAt}
              author={element.author}
            />
          </div>;
        })}
        </div>
        <div className="container d-flex justify-content-between" style={{paddingBottom:'10%',paddingTop:'5%'}}>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next</button>
        </div>
      </div>
      </div>
    );
  }
}

export default News
