import React, { PropTypes as T } from 'react';
import classnames from 'classnames';
import Map, { Marker } from 'google-maps-react';
import styles from './styles.module.css';

export class MapComponent extends React.Component {
  _renderChildren(){
    const { children } = this.props;
  }

  _renderMarkers(){
    if (!this.props.place){
      return null;
    }
    return this.props.places.map(place =>{
      return <Marker
        key={place.id}
        name={place.id}
        place={place}
        onClick={this.props.onMarkerClick.bind(this)}
        position={place.geometry.location}
        />
    })
  }

  render() {
    const {children} = this.props;

    return (
      <Map map={this.props.map}
        google={this.props.google}
        className={styles.map}
        zoom={this.props.zoom}
        onRecenter={this.props.onMove}
        onDragend={this.props.onMove}
        onClick={this.props.onClick}
        visible={!children || React.Children.count(children) == 0}
        >
        {this._renderChildren()}
      </Map>
    )
  }
}

MapComponent.propTypes = {
  onMarkerClick: T.func
}
const identity = (...a) => a;
MapComponent.defaultProps = {
  onMarkerClick: identity
}

export default MapComponent
