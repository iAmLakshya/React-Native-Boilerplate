import React, {PureComponent} from 'react';
import {View, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import {Input} from '../dumb/input'
import {ProximaNova} from '../dumb/proxima-nova'
import Modal from "react-native-modal";
import Styles, {WP,HP, Theme} from 'styles';
import * as CDI from 'assets/country-dial-info';

function FlatListCountryElement(props){
    return(
        <TouchableOpacity
            onPress={()=>props.onPress(props.data)}
            delayPressIn={50}
            style={[
            {
                flexDirection:'row', height:HP(6),maxHeight:50,
                borderBottomColor:Theme.text.placeholder+'50',
                borderBottomWidth:.25, alignItems:'center',
                width:WP(100),
            }]}>
            <ProximaNova style={[{flex:2, textAlign:'center', fontSize:WP(8)}]}>{props.data.flag}</ProximaNova>
            <ProximaNova style={[{
                flex:9, fontSize:WP(3.5), paddingHorizontal:WP(2),
                textTransform:'uppercase', letterSpacing:1
                }]}>
                {props.data.name}
            </ProximaNova>
            <ProximaNova 
                weight={'semibold'}
                style={[{
                    flex:2, fontSize:WP(4),
                    textAlign:'center', letterSpacing:1,
                    color:Theme.highlight.primary, opacity:0.75
                }]}>
                {props.data.dial_code}
            </ProximaNova>
        </TouchableOpacity>
    );
}

export class PhoneInput extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            country_code:'IN',
            dial_code:'+91',
            phone_number:'',
            isCountryPickerVisible:false,
        }
        console.log()
    }
    onChangeText = phone_number =>{
        this.setState({phone_number});
        this.props.onChangeText(this.state.dial_code+phone_number);
    }

    toggleCountryPicker = async () =>{
        this.setState({isCountryPickerVisible:!this.state.isCountryPickerVisible})
    }

    onSelectCountry = ({code, dial_code}) =>{
        this.setState({
            country_code:code,
            dial_code,
            isCountryPickerVisible:false
        });
        this.props.onChangeText(dial_code+this.state.phone_number);
    }

    render(){
        return(
            <>
                <View style={[{
                        flexDirection:'row', minWidth:'95%', paddingHorizontal:WP(1),
                        backgroundColor:Theme.base.secondary, borderRadius:WP(2)
                        }]}> 
                    <TouchableOpacity 
                        onPress={this.toggleCountryPicker}
                        style={[Styles.center,{flex:2, borderTopLeftRadius:WP(2), borderBottomLeftRadius:WP(2)}]}>
                        <ProximaNova weight={'bold'} style={{opacity:0.5, fontSize:WP(3.5), textAlign:'center'}}>
                            {this.state.country_code +' '+ this.state.dial_code}
                        </ProximaNova>
                    </TouchableOpacity>
                    <Input
                        keyboardType={this.props.keyboardType}
                        value={this.state.phone_number}
                        onChangeText={this.onChangeText}
                        placeholder={this.props.placeholder}
                        inputContainerStyle={{paddingHorizontal:WP(1), minWidth:0, flex:9}}/>
                </View>

                <Modal
                    isVisible={this.state.isCountryPickerVisible}
                    onBackdropPress={()=>this.setState({isCountryPickerVisible:false})}
                    onBackButtonPress={()=>this.setState({isCountryPickerVisible:false})}
                    useNativeDriver={true}
                    hideModalContentWhileAnimating={true}
                    style={Styles.bottomModal}>
                    <SafeAreaView style={[Styles.center,{
                            backgroundColor:Theme.base.secondary, height:HP(40),
                            borderTopRightRadius:WP(5), borderTopLeftRadius:WP(5)
                        }]}>
                        <FlatList
                            data={Object.values(CDI)}
                            renderItem={({item})=>{
                                return <FlatListCountryElement
                                    data={item}
                                    onPress={this.onSelectCountry}/>
                            }}
                            keyExtractor={country => country.code}
                            />
                    </SafeAreaView>
                </Modal>
            </>
        );
    }

}