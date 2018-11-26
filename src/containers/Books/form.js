import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as bookActions from '../../redux/actions/bookActions';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getBooks();
  }
  render() {
    return (
    <div>
      <h1>Create Book</h1>
      <form onSubmit={this.handleSubmit}>
       <input required type="text" ref={(input)=>this.getTitle = input} 
        placeholder="Enter Book Title"/>
       <br /><br />
       <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
        placeholder="Enter Post" />
       <br /><br />
       <button>Post</button>
       {
        this.props.books &&
          <div>
            {
              this.props.books.map((book) => 
                <div>
                  <span>{book.title}</span>
                  <span>{book.description}</span>
                </div>
              )
            }
          </div>
       }
      </form>
    </div>
    );
  }
}

export default connect(state => ({
  ...state.books,
}),{
  ...bookActions,
})(Form);