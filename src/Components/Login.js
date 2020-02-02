import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        this.props.onLogin();
        this.props.history.push('/');
    }
    // Kakao Login
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        });
        this.props.onLogin();
        this.props.history.push('/');
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId='163108919135-1m0lr318kff9j67ld574hr205885n1n6.apps.googleusercontent.com'
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
                
            </Container>
        );
    }
}


const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

export default withRouter(Login);
