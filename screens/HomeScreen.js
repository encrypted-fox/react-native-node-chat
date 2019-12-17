import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                __DEV__
                                    ? require('../assets/images/robot-prod.png')
                                    : require('../assets/images/robot-dev.png')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>
                        {/*<DevelopmentModeNotice/>*/}

                        <Text style={styles.getStartedText}>Awesome Chat</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#F0B24F"
                                placeholder="Login"
                                onChangeText={(login) => this.setState({login})}
                                value={this.state.login}
                            />

                            <TextInput
                                style={styles.input}
                                placeholderTextColor="#F0B24F"
                                placeholder="Password"
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                                value={this.state.password}
                            />

                        </View>

                    </View>

                </ScrollView>

                <View style={styles.tabBarInfoContainer}>

                    <TouchableOpacity
                        style={styles.buttonOrange}
                        title="Press me"
                        onPress={() => this.props.navigation.navigate('Chats')}>
                        <Text style={styles.buttonTextWhite}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonWhite}
                        title="Press me"
                        onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={styles.buttonTextOrange}>Register</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 100,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'rgba(96,100,109, 1)',
        lineHeight: 40,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    buttonTextWhite: {
        color: '#fff',
        marginVertical: "auto",
        textAlign: 'center',
        fontSize: 25,
        marginTop: 5,
    },
    buttonTextOrange: {
        color: '#F0B24F',
        marginVertical: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth: 2,
        borderBottomColor: "#F0B24F",
        width: 110,
    },
    buttonOrange: {
        textAlign: "center",
        backgroundColor: "#F0B24F",
        marginTop: 30,
        width: 330,
        height: 50,
        borderRadius: 30,
    },
    buttonWhite: {
        backgroundColor: "#fff",
        marginTop: 10,
        width: 330,
        height: 50,
        borderRadius: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#F0B24f",
        textAlign: "center",
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    input: {
        height: 60,
        width: 250,
        fontSize: 25,
        borderBottomWidth: 2,
        borderColor: "#f0b24f",
        color: "#F0B24F",
    },
    inputContainer: {
        marginTop: 50,
    },

});
