import { Component } from "react";
import fetchGallery from "api/galleryApi";

import Searchbar from "./Searchbar/Searchbar";


export default class App extends Component {
  state = {
    pictures: [],
    query: '',

  }

  async searchImages() {
    const { query } = this.state;
    try {
      const data = await fetchGallery(query);
      this.setState({
        pictures: data.hits,
      });
      //console.log(data, '--res');
    } catch (error) {

    }
    
  }

  getPictures = () => {

  }

  async componentDidMount() {
    //this.getPictures();
    fetchGallery('react').then(console.log);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
};
