import React, { Component } from "react";
import { Panel } from "react-bootstrap"

export default (WrappedForm, heading, title) => {
    class FormWrapper extends Component {
        render() {
            return (
                <Panel>
                    {heading &&
                        <Panel.Heading>
                            {title ?
                                (<Panel.Title>{title}</Panel.Title>) :
                                heading
                            }
                        </Panel.Heading>
                    }
                    <Panel.Body>
                        <WrappedForm {...this.props} />
                    </Panel.Body>
                </Panel>
            );
        }
    }
    return FormWrapper
}