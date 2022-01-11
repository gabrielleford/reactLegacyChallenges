import React, {Component} from 'react';
import {Input} from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: '',
      filteredSearch: []
    }
  }

  searchFunction(e) {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
    this.state.things.map(item => {
      if (item.startsWith(this.state.searchTerm)) {
        this.setState({
          filteredSearch: this.state.things.filter((term) =>
            term.startsWith(this.state.searchTerm)
          ),
        });
      }
    })
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' onChange={e => this.searchFunction(e)} />
        <h3>Results:</h3>
        {this.state.searchTerm !== '' ? this.state.filteredSearch.map((item, index) => {
          return <p key={index}>{item}</p>
        }) : this.state.things.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    )
  }
}