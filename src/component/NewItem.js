import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="my-4" style={{border:'1px solid white',padding:'5px'}}>
          <img src={!imgUrl?"https://imgs.search.brave.com/kPWYVtbTQmc7AUL5WGMzxzEdItL5taWb3BhYLvGPWIE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MTcwNTg2NC9waG90/by90aGUtd29yZHMt/YnJlYWtpbmctbmV3/cy1vbi1hbi1hYnN0/cmFjdC1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ydDVWb3Rx/LUlyM2pzVG5fb2JJ/SDdUREs1N0g5MmJ3/UzN6dWlNQnI1ZHNZ/PQ":imgUrl} className="card-img-top" alt="..." style={{height:"15rem"}}/>
          <div className="card-body" style={{textAlign:'center',padding:'5px'}} >
            <h5 className="card-title"style={{height:"5rem",textAlign:'left'}}>{title}...</h5>
            <p className="card-text" style={{height:"5rem",textAlign:'left'}}>{description}...</p>
            <p class="card-text" style={{textAlign:'left'}}><small style={{color:'grey'}}>By {!author?"unkown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='non' href={newsUrl} className="btn btn-sm btn-dark my-4" >Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
