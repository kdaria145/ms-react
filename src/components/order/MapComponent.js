import React, {useRef} from "react";
import {YMaps, Map} from "react-yandex-maps";
import PropTypes from "prop-types";

const mapState = {
    center: [55.753994, 37.622093],
    zoom: 100
};

const MapComponent = ({setAddress}) => {
    const ymaps = useRef(null);
    const placemarkRef = useRef(null);
    const mapRef = useRef(null);

    const createPlacemark = coords => new ymaps.current.Placemark(coords, {draggable: true});

    const getAddress = coords => {
        ymaps.current.geocode(coords)
            .then(res => {
                const firstGeoObject = res.geoObjects.get(0);

                const newAddress = firstGeoObject.getCountry() && firstGeoObject.getLocalities() && firstGeoObject.getThoroughfare() && firstGeoObject.getPremiseNumber() ? {
                    country: firstGeoObject.getCountry(),
                    city: firstGeoObject.getLocalities(),
                    street: firstGeoObject.getThoroughfare(),
                    house: firstGeoObject.getPremiseNumber()
                } : "";
                const newAddressLine = firstGeoObject.getAddressLine();

                setAddress(newAddress);

                placemarkRef.current.properties.set({
                    iconCaption: newAddressLine
                });
            });
    };

    const onMapLoad = ympasInstance => {
        ympasInstance.geolocation.get({
            provider: "yandex",
            mapStateAutoApply: true
        }).then(result => {
            mapRef.current.geoObjects.add(result.geoObjects);
        });
        ymaps.current = ympasInstance;
    }

    const onMapClick = (e) => {
        const coords = e.get("coords");

        if (placemarkRef.current) {
            placemarkRef.current.geometry.setCoordinates(coords);
        } else {
            placemarkRef.current = createPlacemark(coords);
            mapRef.current.geoObjects.add(placemarkRef.current);
            placemarkRef.current.events.add("dragend", () => {
                getAddress(placemarkRef.current.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    };

    return (
        <YMaps query={{apikey: "42a090c0-2a78-4790-b1c1-55316ca180cc"}}>
            <Map
                modules={["Placemark", "geocode", "geoObject.addon.balloon", "geolocation"]}
                instanceRef={mapRef}
                onLoad={onMapLoad}
                onClick={onMapClick}
                state={mapState}
            />
        </YMaps>

    );
}

MapComponent.propTypes = {
    setAddress: PropTypes.func.isRequired
};

export default MapComponent;