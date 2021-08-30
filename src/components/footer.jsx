import React from 'react';

import * as mainStyles from '../scss/main.module.scss';

function Footer(props) {
  const { siteTitle } = props;

  return <footer className={mainStyles.footer}>{siteTitle}</footer>;
}

export default Footer;
