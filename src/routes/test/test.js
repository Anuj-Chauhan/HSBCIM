/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

function TestPage() {
  let title = 'Test';
  let content = 'Praveen, you rock!';

  
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

TestPage.propTypes = { error: PropTypes.object.isRequired };
TestPage.contextTypes = { setTitle: PropTypes.func.isRequired };

export default TestPage;
