import React from 'react';
import './MainMenuTap.css';

const MainMenuTap = ({ title = "Apply Now" }) => {
    return ( 
<>

<div className='flex'>
<h2 className='b'>{title}</h2>
<h2 className='text'>News</h2>
<h2 className='text'>Blog Articles</h2>
<h2 className='text'>CIB International</h2>
<h2 className='text'>Sustainable Finance</h2>
<h2 className='text'>Awards</h2>
</div>

</>
     );
}
 
export default MainMenuTap ;