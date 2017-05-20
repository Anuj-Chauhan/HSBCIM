import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'Request Documents';


function displayForms(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Request Documents from Customer</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <Panel header={<span></span>} >
            <div className="row">
              <div className="col-lg-6">
                <Form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Enter Customer's Public Address</ControlLabel>
                    <FormControl
                      type="text"
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Select and add documents</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="1">Aadhar Card</option>
                      <option value="2">Passport</option>
                      <option value="3">Pancard</option>
                      <option value="4">Driving License</option>
                      <option value="5">Registered Agreement</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <Button type="add">Add</Button>
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit">Submit</Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
