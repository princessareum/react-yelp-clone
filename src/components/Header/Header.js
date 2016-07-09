import React from 'react';
import {Link} from 'react-router';

import styles from './styles.modules.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          Fullstack.io
        </section>
      </div>
    )
  }
}

export default Header;
