import React from 'react';

const VideoListItem = ({videok}) => {
	// const video = props.video;
	// console.log(video);
	const imageUrl = videok.snippet.thumbnails.default.url;
	return (
	<li className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img className="media-object" src={imageUrl} />
			</div>
			<div className="media-body">
				<div className="media-heading">{videok.snippet.title}</div>
			</div>
		</div>
	</li>
		);
};

export default VideoListItem;