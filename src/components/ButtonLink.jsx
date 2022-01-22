import React from 'react';
import { Link } from 'react-router-dom'

export const ButtonLink = ({external=false, url, text}) => {
  return <div>
      <div>
            { 
                (external) ? 
                    <a href={url} >
                        <div className='button-link'>
                            <h5>{text}</h5>
                        </div>
                    </a>
                
                :

                    <Link to={url}>  
                        <div className='button-link'>
                            {/* <h5>{text}</h5> */}
                            <h5>{text}</h5>
                        </div>
                    </Link>
            }
        </div>
  </div>;
};
