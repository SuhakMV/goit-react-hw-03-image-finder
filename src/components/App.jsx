import { Component } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
//import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
//import fetchGallery from "api/galleryApi";

import Searchbar from "./Searchbar/Searchbar";
import './styles.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30112757-abf194c84cfc9ccef9cde8e0f';


export default class App extends Component {
  state = {
    pictures: [],
    query: '',
    page: 1,

  }
  
  componentDidMount() {
    fetch(`${BASE_URL}?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json()).then(query => this.setState({ query}));
  }

  /*async searchImages() {
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
  }*/

  handleFormSubmit = query => {
    this.setState({ query, pictures: [], page: 1 });
  }

  handleOnLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery/>

        <Button onClick={this.handleOnLoadMore}/>
          

        <ToastContainer autoClose={3000} />

      </div>
    )
  }
};
