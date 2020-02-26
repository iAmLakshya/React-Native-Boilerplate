import React, { Component } from 'react';
import {
    RootWrapper, ProximaNova, Button, PhoneInput, Input
} from 'components';
import { Image, View, ActivityIndicator, Platform } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import Store, { connect, Actions } from 'store';
import Styles, { WP, Theme } from 'styles';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import LottieView from 'lottie-react-native';
import EcgLottieAnimation from 'assets/lottie/ecg_red.json';
import LoginPromptImg from 'assets/img/login_prompt.png';
import VerifyOtpImg from 'assets/img/verify_otp.png';
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone_number: '+919999006466',
            otp_sent: false,
            processing_otp: false,
            auto_verify_timeout: Platform.select({ ios: true, android: false })
        }
    }
    // DidFocus
    // WillBlur
    // VerifyOTP
    // InitiateLogin
    render() {
        if (this.state.otp_sent) {
            return (
                <RootWrapper>
                    <Grid>
                        <Row size={1}>
                            <Col style={Styles.bottomCenter}>
                                <ProximaNova weight={'extrabold'} style={Styles.loginHeading}>H E A L T H Y</ProximaNova>
                                <ProximaNova weight={'light'} style={Styles.loginSubHeading}>Ut pharetra sit amet aliquam</ProximaNova>
                                <ProximaNova weight={'light'} style={[{ textAlign: 'center', fontSize: WP(4) }]}>
                                    We've just sent you a 6-digit secure{'\n'}OTP to
                                    <ProximaNova weight={'semibold'}>
                                        {' ' + parsePhoneNumberFromString(this.state.phone_number).formatInternational() + ' '}
                                    </ProximaNova>,
                                    please{'\n'}submit the following to continue!
                                </ProximaNova>
                            </Col>
                        </Row>
                        <Row size={1.5} style={Styles.center}>
                            <Image source={VerifyOtpImg} style={{ width: '95%', aspectRatio: 1.4 }} />
                        </Row>
                        <Row>
                            <Col style={[Styles.horizontallyCenter, { flex: 1 }]}>
                                <Input
                                    keyboardType={'numeric'}
                                    maxLength={6}
                                    // disabled={this.state.otp_input_disabled}
                                    inputStyle={{ textAlign: 'center', letterSpacing: WP(5) }}
                                    onChangeText={otp => { }}
                                    placeholder={'XXXXXX'} />
                                <View
                                    style={[Styles.center, {
                                        flexDirection: 'row', opacity: 0.5,
                                        display: this.state.auto_verify_timeout ? 'none' : 'flex'
                                    }]}>
                                    <ProximaNova weight={'bold'} style={{ margin: WP(1) }}>Trying to auto-verify</ProximaNova>
                                    <ActivityIndicator size={'small'} color={Theme.highlight.primary} />
                                </View>

                                <Button busy={this.state.processing_otp}>Verify</Button>
                            </Col>
                        </Row>
                    </Grid>
                </RootWrapper>
            );
        } else {
            return (
                <RootWrapper>
                    <Grid>
                        <Row>
                            <Col style={Styles.bottomCenter}>
                                <ProximaNova weight={'extrabold'} style={Styles.loginHeading}>H E A L T H Y</ProximaNova>
                                <ProximaNova weight={'light'} style={Styles.loginSubHeading}>Your Healthy App</ProximaNova>
                            </Col>
                        </Row>
                        <Row size={1.5} style={Styles.center}>
                            <LottieView source={EcgLottieAnimation} autoPlay loop />
                            {/* <Image source={LoginPromptImg} style={{
                                width: '95%',
                                aspectRatio: 1.4
                            }} /> */}
                        </Row>
                        <Row>
                            <Col style={[Styles.horizontallyCenter, { flex: 1 }]}>
                                <PhoneInput
                                    onChangeText={() => { }}
                                    placeholder={'Mobile Number'}
                                />

                                <Button onPress={() => { this.setState({ otp_sent: true }) }}>Login</Button>
                            </Col>
                        </Row>
                    </Grid>
                </RootWrapper>
            );
        }
    }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Login);