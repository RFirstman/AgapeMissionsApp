import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import styles from "./public/styles";
import HomeScreen from "./components/display/HomeScreen";
import LunchOrderScreen from "./components/display/LunchOrderScreen";
import RegistrationStack from "./components/display/RegistrationScreen";
import GroupListScreen from "./components/display/GroupListScreen";

const DrawerNav = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: "Home"
        }
    },
    Register: {
        screen: RegistrationStack,
        navigationOptions: {
            drawerLabel: "Register"
        }
    },
    LunchOrder: {
        screen: LunchOrderScreen,
        navigationOptions: {
            drawerLabel: "Lunch Order"
        }
    },
    GroupList: {
        screen: GroupListScreen,
        navigationOptions: {
            drawerLabel: "Groups"
        }
    }
});

export default class App extends React.Component {
    render() {
        return <DrawerNav />;
    }
}
