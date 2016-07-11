export function getDetails(google, map, placeId) {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.PlacesService(map);
    const request = {placeId}

    service.getDetails(request, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return reject(status);
      } else {
        resolve(place);
      }
    })
  })
}
