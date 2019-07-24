import React from "react"
import FeatherIcon from 'feather-icons-react';

const WorkCard = ({title, description}) => {
  return (
    <div className='col-sm-12 col-md-6 px-2'>
     <div className="work-card">
       <h6>{title}</h6>
       <p style={{fontSize: '0.8em'}}>{description}</p>
       <div>
         <span className='mr-2'>
						<a href={`https://github.com/`}>
			            	<FeatherIcon icon="github" size='15'/>
			          	</a>
					</span>
         <span className='mr-2'>
						<a href={`https://github.com/`}>
			            	<FeatherIcon icon="globe" size='15'/>
			          	</a>
					</span>
       </div>
     </div>
    </div>
  )
}

export default WorkCard