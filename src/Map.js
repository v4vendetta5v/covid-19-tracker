
import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
         {/* loop through data and mark them on countries */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;