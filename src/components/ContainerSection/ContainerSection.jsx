// @flow

import React from 'react';

type Props = {
  backgroundColor?: string,
  children: any,
};

const ContainerSection = ({ backgroundColor, children }: Props) => (
  <div className="col-md-12 py-5 px-4" style={{ background: backgroundColor }}>
    {children}
  </div>
);

ContainerSection.defaultProps = {
  backgroundColor: 'white',
};

export default ContainerSection;
