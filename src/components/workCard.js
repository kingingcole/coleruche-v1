import React from "react"
import FeatherIcon from 'feather-icons-react';

const WorkCard = () => {
  return (
    <div className='col-sm-12 col-md-6 px-2'>
     <div className="work-card">
       <h6>Blermo</h6>
       <p style={{fontSize: '0.8em'}}>An app I built for builfing sake</p>
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