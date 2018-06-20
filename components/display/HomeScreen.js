import React, { Component } from "react";
import { StatusBar, Button, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Agape Missions</Text>
                    <Button
                        title="Registration"
                        onPress={() => this.props.navigation.navigate("Register")}
                    />
                    <Button
                        title="Groups"
                        onPress={() => this.props.navigation.navigate("GroupList")}
                    />
                    <Button
                        title="Lunch Order Form"
                        onPress={() => this.props.navigation.navigate("LunchOrder")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: "Home",
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 20 }
        })
    }
});