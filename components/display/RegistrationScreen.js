import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import t from "tcomb-form-native";

let Form = t.form.Form;

/* const options = {
    fields: {
        lastName: {
            label: "Last Name",
            returnKeyType: 'next',
            onSubmitEditing: () => this.loginForm.getComponent('church').refs.input.focus()
        },
        firstName: {
            label: "First Name",
            returnKeyType: 'next',
            onSubmitEditing: () => this.loginForm.getComponent('lastName').refs.input.focus()
        },
        mailingAddress: {
            label: "Mailing Address"
        },
        homePhone: {
            label: "Home Phone"
        },
        cellPhone: {
            label: "Cell Phone"
        },
        tShirtSize: {
            label: "T-Shirt Size"
        },
        specialSkills: {
            label: "Special Skills"
        },
        physicianPhone: {
            label: "Phone"
        },
        medicalConditions: {
            label: "Medical Conditions"
        },
        insuranceCompany: {
            label: "Insurance Company"
        },
        policyNumber: {
            label: "Policy Number"
        }
    }
} */

class ScreenOne extends Component {
    static navigationOptions = ({ navigation }) => {
        let handleSubmit = navigation.getParam("handleSubmit");
        return {
            headerRight: (
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        };
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleSubmit: this.handleSubmit });
    }

    handleSubmit = () => {
        var value = this._form.getValue();
        if (value) {
            console.log(value);
            this.props.navigation.navigate("ScreenTwo", { value });
        }
    }

    render() {
        const Positive = t.refinement(t.Number, function (n) {
            return n >= 0;
        });

        const Gender = t.enums({
            M: "Male",
            F: "Female"
        }, "Gender");

        const Form1 = t.struct({
            firstName: t.String,
            lastName: t.String,
            church: t.String,
            age: Positive,
            gender: Gender,
        });

        const options = {
            fields: {
                firstName: {
                    label: "First Name",
                    returnKeyType: "next",
                    onSubmitEditing: () => this._form.getComponent("lastName").refs.input.focus()
                },
                lastName: {
                    label: "Last Name",
                    returnKeyType: "next",
                    onSubmitEditing: () => this._form.getComponent("church").refs.input.focus()
                },
                church: {
                    returnKeyType: "next",
                    onSubmitEditing: () => this._form.getComponent("age").refs.input.focus()
                },
                // age: {
                //     returnKeyType: 'next',
                //     onSubmitEditing: () => this._form.getComponent('gender').refs.input.focus()
                // },
                gender: {
                    selectedValue: null,
                    label: "Gender",
                    onSubmitEditing: () => this.submit()
                }
            }
        };

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.form}>
                    <Form type={Form1} options={options} ref={c => this._form = c} />
                    <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableHighlight>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}

class ScreenTwo extends Component {
    static navigationOptions = ({ navigation }) => {
        let handleSubmit = navigation.getParam("handleSubmit");
        return {
            headerRight: (
                <TouchableOpacity onPress={handleSubmit}>
                    <Text>Next</Text>
                </TouchableOpacity>
            )
        };
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleSubmit: this.handleSubmit });
    }

    handleSubmit = () => {
        var value = this._form.getValue();
        if (value) {
            console.log(value);
            let { firstName, lastName } = this.props.navigation.getParam("value");
            let name = firstName + " " + lastName;
            this.props.navigation.navigate("ScreenThree", {
                value, name
            });
        }
    }

    render() {
        const Form2 = t.struct({
            mailingAddress: t.String,
            city: t.String,
            state: t.String,
            zip: t.Number,
            phone: t.Number
        });

        const options = {
            fields: {
                mailingAddress: {
                    "label": "Mailing Address",
                    onSubmitEditing: () => this._form.getComponent("city").refs.input.focus()
                },
                city: {
                    onSubmitEditing: () => this._form.getComponent("state").refs.input.focus()
                },
                state: {
                    onSubmitEditing: () => this._form.getComponent("zip").refs.input.focus()
                }
            }
        };

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.form}>
                    <Text style={styles.title}>Register</Text>
                    <Form type={Form2} options={options} ref={c => this._form = c} />
                    <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableHighlight>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }
}

class ConfirmationScreen extends Component {
    render() {
        const name = this.props.navigation.getParam("name");
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Form Submitted</Text>
                <Text style={styles.subTitle}>Thank you, {name}</Text>
                <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate("Home"); }}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableHighlight>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator(
    {
        ScreenOne: {
            screen: ScreenOne,
            navigationOptions: ({ navigation }) => ({
                title: "Register",
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={20} />
                    </TouchableOpacity>
                ),
                headerStyle: { paddingRight: 10, paddingLeft: 20 }
            })
        },
        ScreenTwo: {
            screen: ScreenTwo,
            navigationOptions: {
                title: "Register",
                headerStyle: { paddingRight: 10 }
            }
        },
        ScreenThree: {
            screen: ConfirmationScreen
        }
    },
    {

    }
);