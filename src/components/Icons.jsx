import React from 'react';

export default () => <span dangerouslySetInnerHTML={{ __html: require(`!raw-loader!./../images/icon-${this.props.icon}.svg`) }} />;
