import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import backArrow from "../assets/images/chevron-left-solid.svg";
import dots from "../assets/images/ellipsis-h-solid.svg";
import ChatCard from "../components/ChatCard.js"

export default class LinksScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
                <View style = {styles.menu}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <SvgUri
                            width="40"
                            height="40"
                            source={backArrow}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>Беседы</Text>
                    <SvgUri
                        width="40"
                        height="40"
                        source={dots}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#F0B24F"
                            placeholder="Поиск"
                            onChangeText={(search) => this.setState({search})}
                            value={this.state.password}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Chats")}>
                            <ChatCard chatName={"Марина, Ваня"} lastMessage={"Привет..."} date={"Today"} time={"12:30"} src={"../assets/images/robot-prod.png"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }


}

LinksScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 15,
        backgroundColor: '#F8F3EB',
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,

    },
    titleText: {
        color: "#C88A27",
        fontSize: 32,
        marginTop: -7,
        marginLeft: -100,
    },
    bottomContainer: {
        backgroundColor: '#fff',
        flexGrow: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    input: {
        borderRadius: 30,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "#F0B24F",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: 350,
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
    }
});
