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
    this._getMovies();
  }

  testGenre = ['anime']
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.s} 
                    poster={movie.img} 
                    key={movie.i} 
                    genres={this.testGenre}
                    synopsis={movie.s}
      />
    })
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    // call api 작업이 완료되기 전까지는 실행되지 않음  
    this.setState({
      movies // == movies: movies (모던 자바스크립트)
    });
  }

  _callApi = () => {
    return fetch('https://ohli.moe/timetable/list/now')
    .then(potato => potato.json())
    .then(json => {console.log(json[new Date().getDay()]); return json[new Date().getDay()]})
    .catch(err => console.log(err))
  }

  render() {
    // 2 
    // 컴포넌트 안에 state가 바뀔 때 마다, render이 발생 할 것이다.
    const { movies } = this.state;
    return (
      <div className={movies? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
