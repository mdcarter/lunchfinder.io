import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    return (
      <span>
        {(() => {
          switch (this.props.name) {
            case 'distance':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20">
                  <g fill="none" fillRule="evenodd">
                    <path
                      fill="#A6A6A6"
                      fillRule="nonzero"
                      d="M7 0C3 0 0 3 0 7c0 5.3 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"
                    />
                    <path d="M-5-2h24v24H-5z" />
                  </g>
                </svg>
              );
            case 'duration':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="22" viewBox="0 0 13 22">
                  <g fill="none" fillRule="evenodd">
                    <path d="M-6-1h24v24H-6z" />
                    <path
                      fill="#A6A6A6"
                      fillRule="nonzero"
                      d="M7.5 4.5c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2zM3.8 8L1 22h2l2-8 2 2v6h2v-7.5l-2-2 .5-3C8.8 11 10.8 12 13 12v-2c-2 0-3.5-1-4.3-2.4L7.7 6c-.4-.6-1-1-1.7-1h-.8L0 7.4V12h2V8.6L3.8 8z"
                    />
                  </g>
                </svg>
              );
            case 'phone':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <g fill="none" fillRule="evenodd">
                    <path d="M-3-3h24v24H-3z" />
                    <path
                      fill="#A6A6A6"
                      fillRule="nonzero"
                      d="M3.6 7.8c1.5 2.8 3.8 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3l3.6.2c.6 0 1 .5 1 1V17c0 .6-.5 1-1 1C7.6 18 0 10.4 0 1c0-.6.5-1 1-1h3.5c.6 0 1 .5 1 1 0 1.3.2 2.5.6 3.6.5.3 0 .7 0 1L3.7 7.8z"
                    />
                  </g>
                </svg>
              );
            case 'category':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
                  <g fill="none" fillRule="evenodd">
                    <path d="M-2-3h24v24H-2z" />
                    <path
                      fill="#A6A6A6"
                      fillRule="nonzero"
                      d="M6 10.3l3-2.8-7-7a4 4 0 0 0 0 5.7l4 4zm7-1.8c1.4.7 3.6.2 5-1.4 2-1.7 2.4-4.4 1-6-1.5-1.3-4.2-1-6.2 1-1.6 1.5-2 3.7-1.3 5.2L1.7 17 3 18.2l7-7 7 7 1.3-1.4-7-7L13 8.5z"
                    />
                  </g>
                </svg>
              );
            case 'url':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16">
                  <g fill="none" fillRule="evenodd">
                    <path d="M-7 4L13.8-8l12 20.8L5 24.8z" />
                    <path
                      fill="#A6A6A6"
                      fillRule="nonzero"
                      d="M2.4 12.4a3 3 0 0 1 1-4.2l3.6-2-1-1.6-3.4 2a5 5 0 0 0-2 6.8 5 5 0 0 0 7 1.8l3.4-2-1-1.6-3.4 2a3 3 0 0 1-4.2-1.2zm4-1l7-4-1-2-7 4 1 2zm4.8-9.8l-3.4 2 1 1.6 3.4-2a3 3 0 0 1 4.2 1 3 3 0 0 1-1 4.4l-3.6 2 1 1.6 3.4-2a5 5 0 0 0 2-6.8 5 5 0 0 0-7-1.8z"
                    />
                  </g>
                </svg>
              );
            case 'hours':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
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
            default:
              return null;
          }
        })()}
      </span>
    );
  }
}
