import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyABXG_AuCzrp-Eb9mTKF2SKRkAiupIar0Q';

// Create a new component. This component should produce 
// some HTML
class App extends Component {

	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'action camera'}, (videos) => {
			this.setState({ videos });
		});
	}

	render(){
	return (
	<div>
		<SearchBar />
		<VideoList videos={this.state.videos} />
	</div>
	);
	}
}

// Take this component's gnerated HTML and put
// it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

