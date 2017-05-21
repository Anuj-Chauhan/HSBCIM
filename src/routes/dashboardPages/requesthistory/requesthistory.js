import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import Modal, { Footer, Header, Title, Body } from 'react-bootstrap/lib/Modal';
import Label from 'react-bootstrap/lib/Label';


const title = 'My Request History';

var RequestHistory = React.createClass({
  getInitialState() {
    return { showModal: false, rows: [] };

  },

  close() {
    this.setState({ showModal: false });
  },

  open(doc) {
    var rowfiller = [];

    if (doc === "Passport") {
      for (var i = 0; i <= 5; i++) {
      rowfiller.push(<tr>{i}</tr>);
      this.setState({ showModal: true, rows: rowfiller});
  }
  } 

  else if(doc === "Driving License"){
  for (var i = 0; i <= 10; i++) {
      rowfiller.push(<tr>{i}</tr>);
      this.setState({ showModal: true, rows: rowfiller});
  }
  } 

  else if(doc === "Electricity Bill"){
  for (var i = 0; i <= 2; i++) {
      rowfiller.push(<tr>{i}</tr>);
      this.setState({ showModal: true, rows: rowfiller});
  }
} ;
    

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
          <PageHeader>My Request History</PageHeader>
        </div>
      </div>
        
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Document upload window</Modal.Title>
            </Modal.Header>
          
          <Modal.Body>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
              {this.state.rows}
              </table>
            </div>
          </Modal.Body>

          
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
          </Modal>

      <Panel header={<span>History of all documents </span>} >
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Document Name </th>
                    <th>Last Verified on</th>
                    <th>Most recent status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 </td>
                    <td><a href="#" onClick={this.open.bind(null,"Driving License")}> Driving License </a></td>
                    <td>08/5/2017 </td>
                    <td><Label bsStyle="success">Approved</Label></td>
                  </tr>

                  <tr>
                    <td>1 </td>
                    <td><a href="#" onClick={this.open.bind(null,"Driving License")}> Aadhar Card </a></td>
                    <td>08/5/2017 </td>
                    <td><Label bsStyle="success">Approved</Label></td>
                  </tr>

                  <tr>
                    <td>1 </td>
                    <td><a href="#" onClick={this.open.bind(null,"Driving License")}> PAN Card </a></td>
                    <td>08/5/2017 </td>
                    <td><Label bsStyle="success">Approved</Label></td>
                  </tr>

                  <tr>
                    <td>2 </td>
                    <td><a href="#" onClick={this.open.bind(null,"Passport")}>Passport </a></td>
                    <td>13/5/2017 </td>
                    <td><Label bsStyle="warning">Waiting</Label></td>
                  </tr>

                  <tr>
                    <td>3 </td>
                    <td><a href="#" onClick={this.open.bind(null,"Electricity Bill")}>Electricity Bill</a></td>
                    <td>18/6/2017 </td>
                    <td><Label bsStyle="danger">Rejected</Label></td>
                  </tr>

                </tbody>
              </table>
            </div>
          </Panel>




    </div>
  );
}});
export default RequestHistory;
