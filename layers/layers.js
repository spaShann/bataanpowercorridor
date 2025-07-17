var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_abucaybataan_1 = new ol.format.GeoJSON();
var features_abucaybataan_1 = format_abucaybataan_1.readFeatures(json_abucaybataan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abucaybataan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abucaybataan_1.addFeatures(features_abucaybataan_1);
var lyr_abucaybataan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_abucaybataan_1, 
                style: style_abucaybataan_1,
                popuplayertitle: 'abucay-bataan',
                interactive: false,
                title: '<img src="styles/legend/abucaybataan_1.png" /> abucay-bataan'
            });
var format_transtowers_row_2 = new ol.format.GeoJSON();
var features_transtowers_row_2 = format_transtowers_row_2.readFeatures(json_transtowers_row_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transtowers_row_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transtowers_row_2.addFeatures(features_transtowers_row_2);
var lyr_transtowers_row_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transtowers_row_2, 
                style: style_transtowers_row_2,
                popuplayertitle: 'transtowers_row',
                interactive: false,
                title: '<img src="styles/legend/transtowers_row_2.png" /> transtowers_row'
            });
var format_bataan_transmissiontowers_3 = new ol.format.GeoJSON();
var features_bataan_transmissiontowers_3 = format_bataan_transmissiontowers_3.readFeatures(json_bataan_transmissiontowers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataan_transmissiontowers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataan_transmissiontowers_3.addFeatures(features_bataan_transmissiontowers_3);
var lyr_bataan_transmissiontowers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataan_transmissiontowers_3, 
                style: style_bataan_transmissiontowers_3,
                popuplayertitle: 'bataan_transmission-towers',
                interactive: true,
                title: '<img src="styles/legend/bataan_transmissiontowers_3.png" /> bataan_transmission-towers'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_abucaybataan_1.setVisible(true);lyr_transtowers_row_2.setVisible(true);lyr_bataan_transmissiontowers_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_abucaybataan_1,lyr_transtowers_row_2,lyr_bataan_transmissiontowers_3];
lyr_abucaybataan_1.set('fieldAliases', {'id': 'id', 'Barangay': 'Barangay', });
lyr_transtowers_row_2.set('fieldAliases', {'ID': 'ID', });
lyr_bataan_transmissiontowers_3.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_abucaybataan_1.set('fieldImages', {'id': 'TextEdit', 'Barangay': 'TextEdit', });
lyr_transtowers_row_2.set('fieldImages', {'ID': 'TextEdit', });
lyr_bataan_transmissiontowers_3.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_abucaybataan_1.set('fieldLabels', {'id': 'inline label - always visible', 'Barangay': 'no label', });
lyr_transtowers_row_2.set('fieldLabels', {'ID': 'no label', });
lyr_bataan_transmissiontowers_3.set('fieldLabels', {'id': 'inline label - always visible', 'Type': 'no label', });
lyr_bataan_transmissiontowers_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});