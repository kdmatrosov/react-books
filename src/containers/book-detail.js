import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render()
  {
    if (!this.props.book)
    {
      return (<div>Select a book</div>);
    }
    return (
      <div>
        <h3>{this.props.book.title}</h3>
        <h3>Количество страниц: {this.props.book.pages}</h3>
      </div>
    );
  }
}
function mapStateToProps(state){
  //organize props
  return {
    book: state.activeBook
  };
}
export default connect(mapStateToProps)(BookDetail);
