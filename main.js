import 'ol/ol.css';
import GeoJSON from 'ol/format/geojson';
import Map from 'ol/map';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import View from 'ol/view';

import sync from 'ol-hashed';

import DragDrop from 'ol/interaction/draganddrop';
import Modify from 'ol/interaction/modify';
import Draw from 'ol/interaction/draw';
import Snap from 'ol/interaction/snap';

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

map.addInteraction(new Modify({
    source: source
}))

map.addInteraction(new Draw({
    type: 'Polygon',
    source: source
}))

map.addInteraction(new Snap({
    source: source
}))

//the map stayed where we left it in a reload.
sync(map);