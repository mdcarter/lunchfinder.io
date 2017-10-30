import React from 'react';

export default props => (
  <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#A6A6A6"
        fillRule="nonzero"
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
      />
      <path d="M-2-2h24v24H-2z" />
      <path fill="#A6A6A6" fillRule="nonzero" d="M10.5 5H9v6l5.3 3 .7-1-4.5-2.8z" />
    </g>
  </svg>
);
