// @flow

import React from 'react';

type Props = {
  backgroundColor?: string,
  children: any,
  id?: string,
};

const ContainerSection = ({ backgroundColor, children, id }: Props) => (
  <div
    id={id}
    className="col-md-12 py-5 px-4"
    style={{ background: backgroundColor }}
  >
    {children}
  </div>
);

ContainerSection.defaultProps = {
  backgroundColor: 'white',
  id: '',
};

export default ContainerSection;
