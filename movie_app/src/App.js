import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> 
  //          shouldComponentUpdate() == true -> 
  //          componentWillUpdate() [로딩중 스피너를 붙일수 있다]
  //          render() -> componentDidUpdate() [로딩중 스피너 숨기기]
  
  state = {

  };

  componentWillMount() {
    // 1
    // 예를 들어 api에 작업을 요청
  }

  componentDidMount() {
    // 3
    setTimeout(()=>{
      this.setState({
        movies: [
        {
          title: "Matrix",
          poster: "m1.png"
        },
        {
          title: "Nichijou",
          poster: "m2.png"
        },
        {
          title: "Samakani",
          poster: "m3.png"
        },
        {
          title: "Overwatch",
          poster: "m4.png"
        },
        {
          title: 'Trainspotting',
          poster: 'm5.png'
        }

        ]
      });
    }, 2000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  };

  render() {
    // 2 
    // 컴포넌트 안에 state가 바뀔 때 마다, render이 발생 할 것이다.
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
