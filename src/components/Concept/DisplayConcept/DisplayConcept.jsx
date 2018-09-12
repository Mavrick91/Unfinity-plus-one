// @flow

import React from 'react';
import allConcept from '../../../services/concept_data';

import './DisplayConcept.css';

type conceptDataItem = {
  id: number,
  image: any,
  title: string
};

export default () => (
  <div className="col-md-12 display-concept_container">
    {allConcept.map((item: conceptDataItem) => (
      <div key={item.id} className="display-concept_item">
        <div className="display-concept_image">
          <img src={item.image} alt="" />
        </div>
        <h5 className="display-concept_title">{item.title}</h5>
      </div>
    ))}
  </div>
);
