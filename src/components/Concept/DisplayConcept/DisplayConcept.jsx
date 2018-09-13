// @flow

import React from 'react';

import './DisplayConcept.css';

type conceptDataItem = {
  id: number,
  picture: string,
  title: string,
};

type Props = {
  concepts: Array<conceptDataItem>,
};

export default ({ concepts }: Props) => (
  <div className="col-md-12 display-concept_container">
    {concepts.map((item: conceptDataItem) => (
      <div key={item.id} className="display-concept_item">
        <div className="display-concept_image">
          <img src={item.picture} alt="" />
        </div>
        <h5 className="display-concept_title">{item.title}</h5>
      </div>
    ))}
  </div>
);
