import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';


const title = 'My Documents';

var displayBlank = React.createClass({
  getInitialState() {
    return { showModal: false };

  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  showTextBox(e){
      console.log(e.target.value);
      if (e.target.value === '8')
      {
        console.log(e.target.value);
        ReactDOM.render(<input type="text" id="STATE"/>, document.getElementById("textBox"));
      }
      else {
        ReactDOM.render(<div id = "dummy"/>, document.getElementById("textBox"));
      }},

  render() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>My Documents</PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 col-md-offset-9">
          <Button bsStyle="primary" bsSize="large" onClick={this.open}>Upload Documents</Button>
          
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Document upload window</Modal.Title>
            </Modal.Header>
          
          <Modal.Body>

          <div className = "row">
          <div className = "col-md-3 col-md-offset-1">
          <select placeholder="select" id="formControlsSelect" class="form-control" onChange={this.showTextBox} data-reactid="151">
          <option value="1" data-reactid="152">Aadhar</option>
          <option value="2" data-reactid="155">Bank Statement</option>
          <option value="3" data-reactid="155">Driving License</option>
          <option value="4" data-reactid="154">Utility Bills</option>
          
          
          <option value="5" data-reactid="155">PAN Card</option>
          <option value="6" data-reactid="153">Passport</option>
          <option value="7" data-reactid="155">Voter ID</option>

          <option value="8" data-reactid="156">Other</option>
          </select>
          </div>
          
          <div className = "col-md-3 col-md-offset-2">
          <div class="form-group has-feedback" data-reactid="100">
          <input type="file" id="formBasicFile" class="" data-reactid="102"/></div></div>
          </div>

          <div className = "row">
          <div className = "col-md-3 col-md-offset-1" id = "textBox"></div>
          </div>

          </Modal.Body>
          
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="success" onClick={this.close}> Submit </Button>
          </Modal.Footer>
          </Modal>


        </div>
      </div>


      <div className="row">
      <br/>
      </div>




      <Panel header={<span>List of service providers </span>} >
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Document Name </th>
                    <th>Date of Upload</th>
  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 </td>
                    <td><a href="#">Driving License </a></td>
                    <td>29/4/2017 </td>
            
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td><a href="#">Passport </a></td>
                    <td>13/5/2017 </td>
    
                  </tr>
                  <tr>
                    <td>3 </td>
                    <td><a href="#">Electricity Bill</a></td>
                    <td>18/6/2017 </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>




    </div>
  );
}});
export default displayBlank;
