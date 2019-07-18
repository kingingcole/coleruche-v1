import React, {Component} from 'react';
import {Link} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

class PostCard extends Component {
	render() {
		let {title, image, date, url} = this.props
		console.log(image)
		return (
				<div className='p col-sm-12 col-md-6 px-1'>
					<Link to={url}>
						<BackgroundImage Tag="div"
                           className='postcard-cont my-1'
                           fluid={image}
                           background={`green`}
				          >
			            	<div className='postcard'>
			            		<h1 className='post-title__index'>{title}</h1>
	            				<p className='post-date__index'>{date}</p>
			            	</div>
			          	</BackgroundImage>
					</Link>
				</div>
			)
	}
}

export default PostCard