import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export class MapComponent extends React.Component {
  render() {
    return (
      <Map google={this.props.google}
            className={styles.map}
            >
      </Map>
    )
  }
}

export default MapComponent;
