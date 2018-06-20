import React, { Component } from "react";
import t from "tcomb-form-native";
import { createStackNavigator } from "react-navigation";
import { StatusBar, Button, SafeAreaView, View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Form = t.form.Form;

const LunchOrder = t.struct({
    name: t.String,
    sandwichType: t.String,
    groupNumber: t.Number
});

class LunchOrderScreen extends Component {

    handleSubmit = () => {
        var formValues = this._form.getValue();
        if (formValues) {
            console.log(formValues);
            this.props.navigation.push("Confirmation", {
                formValues
            });
        }
    }

    render() {
        const options = {
            fields: {
                name: {
                    returnKeyType: "next",
                    onSubmitEditing: () => this._form.getComponent("sandwichType").refs.input.focus()
                },
                sandwichType: {
                    label: "Sandwich Type",
                    returnKeyType: "next",
                    onSubmitEditing: () => this._form.getComponent("groupNumber").refs.input.focus()
                },
                groupNumber: {
                    label: "Group Number",
                    onSubmitEditing: () => this.submit()
                }
            }
        };

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Lunch Order</Text>
                    <Form type={LunchOrder} options={options} ref={c => this._form = c} />
                    <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}

class ConfirmationScreen extends Component {

    render() {
        const { navigation } = this.props;
        const formValues = navigation.getParam("formValues", "Nothing here :(");
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Name: {formValues.name}</Text>
                <Text style={styles.text}>Sandwich Type: {formValues.sandwichType}</Text>
                <Text style={styles.text}>Group: {formValues.groupNumber}</Text>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator(
    {
        LunchOrderScreen,
        Confirmation: { screen: ConfirmationScreen }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 20 }
        })
    }
);