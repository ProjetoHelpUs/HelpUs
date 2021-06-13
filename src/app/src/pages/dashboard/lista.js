import React, { Component } from 'react'
import { View, Text, FlatList } from "react-native";
import Styles from './css'
import Card from './dashboard'

class List extends Component {
      constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
        };
      }
    
      componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };


  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.state.data }
        renderItem={ ({ item }) => (
          <Card data={ item } />
        )}
        keyExtractor={ item => item.email } 
      />
    )
  }
}

export default List


