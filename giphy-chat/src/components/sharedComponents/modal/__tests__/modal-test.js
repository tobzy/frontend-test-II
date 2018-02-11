import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MxModal from '../index.js';

describe('An MxModal', function() {

  it('should contain class "mx-modal-fixed-wrapper" on render', function() {
    expect(shallow(<MxModal />).is('.mx-modal-fixed-wrapper')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(shallow(<MxModal />).find('.mx-modal-fixed-wrapper').length).toBe(1);
  });

  

});