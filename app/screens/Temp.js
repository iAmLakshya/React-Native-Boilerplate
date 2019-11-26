import React, {Component} from 'react';
import {RootWrapper, ProximaNova, Button} from 'components'
import {View} from 'react-native'
import Store, {connect, Actions} from 'store'
import Styles from 'styles'
class Temp extends Component{
    render(){
        return(
            <RootWrapper>
                <View style={[{flex:1}, Styles.center]}>
                    <ProximaNova style={{fontSize:30, marginVertical:10}}>Clicks: {this.props.auth.clicks}</ProximaNova>
                    <Button onPress={()=>{Store.dispatch(Actions.auth.RequestButtonClick('ok'))}}>Click</Button>
                </View>
            </RootWrapper>
        );
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Temp);