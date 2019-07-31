import React from 'react';
import { Embed, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const VideoCard = () => (
	<Card.Group itemsPerRow={4} id="card-container">
		<Card>
			<Embed aspectRatio="4:3" id="O6Xo21L0ybE" placeholder="/images/image-16by9.png" source="youtube" />
		</Card>
		<Card>
			<Embed aspectRatio="4:3" id="O6Xo21L0ybE" placeholder="/images/image-16by9.png" source="youtube" />
		</Card>
		<Card>
			<Embed aspectRatio="4:3" id="O6Xo21L0ybE" placeholder="/images/image-16by9.png" source="youtube" />
		</Card>
	</Card.Group>
);
export default VideoCard;
