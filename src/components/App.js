import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends Component {

    state = { images: [] };



  // onSearchSubmit(term){
  //   axios.get('https://api.unsplash.com/search/photos',{
  //     params: { query: term},
  //     headers: {
  //       Authorization: 'Client-ID e415ef54cc1c072081b3c668c7d478aed82955aec8b9573f329974be196f49d0'
  //     }

  //   }).then(response => {
  //     console.log(response.data.results);
  //   })
  // }

  //need to make it an arrow function in order to use this with state
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params: { query: term}
    });

    

    this.setState({ images: response.data.results });

  }





  render() {
    return (
      <div className = 'ui container' style = {{ marginTop: '10px'}} >
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
