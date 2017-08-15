import 'ol/ol.css';
import GeoJSON from 'ol/format/geojson';
import Map from 'ol/map';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';

import sync from 'ol-hashed';

import DragDrop from 'ol/interaction/draganddrop';

const source = new VectorSource();

const map = new Map({
    target: 'map-container',
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});

const layer = new VectorLayer({
    source: source
});
map.addLayer(layer);

map.addInteraction(new DragDrop({
    source: source,
    formatConstructors: [GeoJSON]
}))

//the map stayed where we left it in a reload.
sync(map);