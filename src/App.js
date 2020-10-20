import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div>
			<x3d width="600" height="600">
				<scene >
        <viewpoint position="-1.94639 1.79771 -2.89271" orientation="0.03886 0.99185 0.12133 3.75685"></viewpoint>
					<inline nameSpaceName="Model" mapDEFToID="true" url="Deer.x3d"/>
				</scene>
			</x3d>
		</div>
  );
}

export default App;
