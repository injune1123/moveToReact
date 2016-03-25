import React from 'react';

const Main = ({children}) => {
	return (
		<div className="Main-container">
			Hi there. I am the nav bar placeholder. Glad to see you.
			<div className="container">
				{children}
			</div>
		</div>
	)
}

export default Main;
