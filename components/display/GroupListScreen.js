import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, Button, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import GroupScreen from "./GroupScreen";
import JobSitesScreen from "./JobSitesScreen";

class GroupListScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Group List</Text>
                    <Text style={styles.text}>The list of groups will go here</Text>
                    <Button
                        title="Group 5"
                        onPress={() => this.props.navigation.navigate("Group")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator(
    {
        GroupList: {
            screen: GroupListScreen,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} />
                    </TouchableOpacity>
                ),
                headerStyle: { paddingRight: 10, paddingLeft: 20 }
            })
        },
        Group: {
            screen: GroupScreen,
            navigationOptions: (props) => ({
                title: "Example Group",
            })
        },
        JobSites: {
            screen: JobSitesScreen,
            navigationOptions: (props) => ({
                title: "Job Site"
            }),
        }
    }
);
