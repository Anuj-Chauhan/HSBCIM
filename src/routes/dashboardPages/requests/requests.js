import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';


const title = 'Requests';

function Requests(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Requests</PageHeader>
        </div>
      </div>

      <Panel header={<span>List of service providers </span>} >
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th># </th>
                    <th>Service Provider </th>
                    <th>Documents Requested </th>
                    <th>Date of Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 </td>
                    <td><a href="#">HSBC</a></td>
                    <td>Proof of Address, Proof of Identity </td>
                    <td>29/4/2017 </td>
                  </tr>
                  <tr>
                    <td>2 </td>
                    <td><a href="#">ICICI </a></td>
                    <td>2 Photo Proofs </td>
                    <td>13/5/2017 </td>
                  </tr>
                  <tr>
                    <td>3 </td>
                    <td><a href="#">HSBC Loan </a></td>
                    <td>Proof of Address, Proof of Identity, 2 Photos </td>
                    <td>18/6/2017 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>


    </div>
  );
}


Requests.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Requests;
