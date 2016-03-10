import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

//это контейнер - связь между набором данных и отображением

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"
        onClick={() => this.props.selectBook(book)}>{book.title}</li>
      );
    })
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state){
  //organize props
  return {
    books: state.books
  };
}
//всё, что вернется из функции будет интепретироваться как проперти БукЛист
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}
// это самый стремный момент в подходе редукса. Что здесь происходит???
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
