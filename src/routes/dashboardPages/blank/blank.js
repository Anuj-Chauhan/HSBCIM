import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'Blank';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Blank</PageHeader>
        </div>
      </div>
    


  <div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr/>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
</div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
