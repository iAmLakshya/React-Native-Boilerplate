import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {Router, Scene, Tabs, ActionConst, Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';
import {CustomTabBar} from 'components';
import { Provider } from 'react-redux';
import Store from './app/core/redux/store'
import Login from './app/screens/login';
import NewUser from './app/screens/new-user';
import Profile from './app/screens/profile';
import Feed from './app/screens/feed';
import Messenger from './app/screens/messenger';

// IF PROD:
console.disableYellowBox = true;

const defaultState = {
	isLoggedIn:false
}
export default class App extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount() {
		// this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
		this.unsubscribeAuthChange = auth().onAuthStateChanged(user => {
            console.log('onAuthChange:', user);
            // if (user) {
            //     Actions.REGISTER();
            // }
        });
	}
	componentWillUnmount() {
		// this.backHandler.remove()
		this.unsubscribeAuthChange();
	}
	// handleBackPress = () =>{
	// 	console.log(Actions, Actions.prevScene);
	// 	// Actions.jump(Actions.prevScene)
	// 	Actions.pop()
	// 	return true;
	// } 
	render(){
		return(
			<Provider store={Store}>
				<Router>
					<Scene key={'ROOT'}>
						<Scene key={'AUTH'} initial init hideNavBar>
							<Scene key={'LOGIN'} component={Login}/>
							<Scene key={'REGISTER'} component={NewUser} type={ActionConst.REPLACE} />
						</Scene>

						<Scene key={'MESSENGER'} init component={Messenger} hideNavBar/>

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
		  	</Provider>
		);
	  }
};
// drawerLockMode='locked-closed' gesturesEnabled={false} panHandlers={null}