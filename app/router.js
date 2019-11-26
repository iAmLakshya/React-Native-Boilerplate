import React, {Component} from 'react';
// import {BackHandler} from 'react-native';
import {Router, Scene, Tabs, ActionConst, Actions} from 'react-native-router-flux';
// import auth from '@react-native-firebase/auth';
import {CustomTabBar} from 'components';
// import { Provider } from 'react-redux';
// import Store from './app/core/redux/store'
import Temp from 'screens/Temp'

export default class AppRouter extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount() {
		// this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
		// this.unsubscribeAuthChange = auth().onAuthStateChanged(user => {
        //     console.log('onAuthChange:', user);
        // });
	}
	componentWillUnmount() {
		// this.backHandler.remove()
		// this.unsubscribeAuthChange();
	}

	render(){
		return(
			<Router>
				<Scene key={'ROOT'}>
					<Scene key={'TEMP'} initial init hideNavBar component={Temp} type={ActionConst.REPLACE} />
					{/* <Tabs key={'HOME'} type={ActionConst.REPLACE}
						hideNavBar
						wrap={false}
						tabBarComponent={CustomTabBar}
						tabBarPosition={'bottom'}
						>

						<Scene key={'MESSENGER'} component={Messenger}/>
						<Scene key={'FEED'} component={Feed}/>
						<Scene key={'PROFILE'} component={Profile} />

					</Tabs> */}
				</Scene>
			</Router>
		);
	  }
};
// drawerLockMode='locked-closed' gesturesEnabled={false} panHandlers={null}