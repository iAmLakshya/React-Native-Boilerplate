import React, {Component} from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {ProximaNova} from '../dumb/proxima-nova';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles, {SCALE, Theme} from 'styles'

const __renderIconAD = (name, active) => <AntDesign
                                            name={name}
                                            size={SCALE(22)}
                                            color={active?Theme.highlight.primary:Theme.text.primary}/>
const Icons={
    "PROFILE": (active)=>__renderIconAD('user', active),
    "MESSENGER": (active)=>__renderIconAD('message1', active),
    "FEED": (active)=>__renderIconAD('home', active),
}

export class CustomTabBar extends Component {
    render() {
        const { state } = this.props.navigation;
        const activeTabIndex = state.index;
        return (
            <View 
                style={[Styles.center, {
                    flexDirection:'row',
                    paddingBottom:SCALE(Platform.select({ios:15,android:0})),
                    height:SCALE(Platform.select({ios:60,android:50})), backgroundColor:Theme.base.secondary
                }]}>

                {
                    state.routes.map((element, key) => {
                        return(
                            <TouchableOpacity
                                key={element.key}
                                // onPress={() => Actions[element.key]()}
                                onPress={() => Actions.jump(element.key)}
                                style={[Styles.center, {
                                    flex:1, height:'100%',
                                }]}>
                                {
                                    Icons[element.key]?Icons[element.key](activeTabIndex==key):<></>
                                }
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }
  }