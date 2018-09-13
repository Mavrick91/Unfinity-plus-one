// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ItemFeature.css';

type Props = {
  features: Array<{
    id: number,
    icon: string,
    title: string,
    description: string,
  }>,
};

const ItemFeature = ({ features }: Props) => (
  <div className="col-md-12 item-feature_container">
    {features.map((feature) => (
      <div key={feature.id} className="feature_wrapper">
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
