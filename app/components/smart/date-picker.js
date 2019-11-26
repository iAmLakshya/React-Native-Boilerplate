import React, {PureComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Modal from "react-native-modal";
import {default  as Calendar}from 'react-native-date-picker';
import Styles, {Theme, SCALE, WP} from 'styles';
import {ProximaNova} from '../dumb/proxima-nova';

function padInt(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export class DatePicker extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            date:false,
            isCalenderOpen:false,
        }
    }
    toggleCalender = async ()=>{
        this.setState({isCalenderOpen:!this.state.isCalenderOpen});
    }
    render(){
        const {date} = this.state;
        return(
            <>
                
                <TouchableOpacity
                    onPress={this.toggleCalender}
                    disabled={this.props.disabled}
                    style={[
                        Styles.inputContainer,
                        this.props.inputContainerStyle,
                        this.props.disabled?{opacity:0.5}:{}
                    ]}>
                    <ProximaNova 
                        weight={'light'}
                        style={{textAlign:'center', opacity:date?1:0.5, fontSize:SCALE(15), letterSpacing:WP(1)}}>
                            {
                                date
                                ?`${padInt(date.getDate(),2)} / ${padInt(date.getMonth()+1,2)} / ${date.getFullYear()}`
                                :'DD / MM / YYYY'
                            }
                    </ProximaNova>
                </TouchableOpacity>
                

                <Modal
                    onBackdropPress={()=>this.setState({isCalenderOpen:false})}
                    onBackButtonPress={()=>this.setState({isCalenderOpen:false})}
                    useNativeDriver={true}
                    hideModalContentWhileAnimating={true}
                    isVisible={this.state.isCalenderOpen}
                    style={[Styles.center,{flex:1}]}>
                    <View style={[Styles.center, {width:WP(90), paddingVertical:SCALE(10), borderRadius:WP(5), backgroundColor:Theme.base.secondary+'e8'}]}>
                        <Calendar
                            date={date?date:new Date()}
                            fadeToColor={Theme.base.secondary}
                            maximumDate={new Date()}
                            mode={'date'}
                            textColor={Theme.text.primary}
                            onDateChange={date => {this.setState({ date }); this.props.onDateChange(date)}}
                            />
                    </View>
                </Modal>
            </>
        );
    }
}