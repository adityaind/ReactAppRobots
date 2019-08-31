import React from 'react';
// render to children
const Scroll = (props) => {
	return (
	 <div style ={{overflowY:'scroll', border:'5px solid black', height:'500px'}}>
	 {props.children}
	 </div>	
	)
};


export default Scroll;