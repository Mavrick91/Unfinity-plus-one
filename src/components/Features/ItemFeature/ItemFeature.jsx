// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllFeatures from '../../../services/features_data';

import './ItemFeature.css';

const ItemFeature = () => (
  <div className="col-md-12 item-feature_container">
    {AllFeatures.map(feature => (
      <div key={feature.title} className="feature_wrapper">
        <div className="item_icon">
          <FontAwesomeIcon icon={feature.icon} size="2x" color="white" />
        </div>
        <h4 className="item_title">{feature.title}</h4>
        <div className="item_description">{feature.description}</div>
      </div>
    ))}
  </div>
);

export default ItemFeature;
