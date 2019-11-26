import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './app/router';
import Store, {Persistor} from './app/store';

console.disableYellowBox = true;

const App = (props) => {
	return(
		<>	
			<Provider store={Store}>
				<PersistGate persistor={Persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</>
	);
}



export default App;
