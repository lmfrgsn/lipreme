import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, match, linkUrl, size, history }) => (
  <div
    className={`menu-item ${size ? size : ''}`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='sub-title'>Shop Now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
