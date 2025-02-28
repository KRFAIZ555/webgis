var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tsppemilik_1 = new ol.format.GeoJSON();
var features_tsppemilik_1 = format_tsppemilik_1.readFeatures(json_tsppemilik_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsppemilik_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tsppemilik_1.addFeatures(features_tsppemilik_1);
var lyr_tsppemilik_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tsppemilik_1, 
                style: style_tsppemilik_1,
                popuplayertitle: 'tsp — pemilik',
                interactive: true,
                title: '<img src="styles/legend/tsppemilik_1.png" /> tsp — pemilik'
            });
var format_tsphakmilik_2 = new ol.format.GeoJSON();
var features_tsphakmilik_2 = format_tsphakmilik_2.readFeatures(json_tsphakmilik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tsphakmilik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tsphakmilik_2.addFeatures(features_tsphakmilik_2);
var lyr_tsphakmilik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tsphakmilik_2, 
                style: style_tsphakmilik_2,
                popuplayertitle: 'tsp — hakmilik',
                interactive: true,
                title: '<img src="styles/legend/tsphakmilik_2.png" /> tsp — hakmilik'
            });
var format_MergelotPA_3 = new ol.format.GeoJSON();
var features_MergelotPA_3 = format_MergelotPA_3.readFeatures(json_MergelotPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergelotPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergelotPA_3.addFeatures(features_MergelotPA_3);
var lyr_MergelotPA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MergelotPA_3, 
                style: style_MergelotPA_3,
                popuplayertitle: 'Merge lot PA',
                interactive: true,
                title: '<img src="styles/legend/MergelotPA_3.png" /> Merge lot PA'
            });
var format_MergePAtandasempadan_4 = new ol.format.GeoJSON();
var features_MergePAtandasempadan_4 = format_MergePAtandasempadan_4.readFeatures(json_MergePAtandasempadan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergePAtandasempadan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergePAtandasempadan_4.addFeatures(features_MergePAtandasempadan_4);
var lyr_MergePAtandasempadan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MergePAtandasempadan_4, 
                style: style_MergePAtandasempadan_4,
                popuplayertitle: 'Merge PA tanda sempadan',
                interactive: true,
                title: '<img src="styles/legend/MergePAtandasempadan_4.png" /> Merge PA tanda sempadan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_tsppemilik_1.setVisible(true);lyr_tsphakmilik_2.setVisible(true);lyr_MergelotPA_3.setVisible(true);lyr_MergePAtandasempadan_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_tsppemilik_1,lyr_tsphakmilik_2,lyr_MergelotPA_3,lyr_MergePAtandasempadan_4];
lyr_tsppemilik_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'X': 'X', 'Y': 'Y', });
lyr_tsphakmilik_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'X': 'X', 'Y': 'Y', });
lyr_MergelotPA_3.set('fieldAliases', {'fid': 'fid', 'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'tsp — hakmilik_DAERAH': 'tsp — hakmilik_DAERAH', 'tsp — hakmilik_NO_PA': 'tsp — hakmilik_NO_PA', 'tsp — pemilik_PEMILIK': 'tsp — pemilik_PEMILIK', 'layer': 'layer', 'path': 'path', });
lyr_MergePAtandasempadan_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'X': 'X', 'Y': 'Y', 'path': 'path', });
lyr_tsppemilik_1.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'X': '', 'Y': '', });
lyr_tsphakmilik_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'X': '', 'Y': '', });
lyr_MergelotPA_3.set('fieldImages', {'fid': '', 'NO_LOT': '', 'AREA': '', 'tsp — hakmilik_DAERAH': '', 'tsp — hakmilik_NO_PA': '', 'tsp — pemilik_PEMILIK': '', 'layer': '', 'path': '', });
lyr_MergePAtandasempadan_4.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'X': '', 'Y': '', 'path': '', });
lyr_tsppemilik_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_tsphakmilik_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MergelotPA_3.set('fieldLabels', {'fid': 'hidden field', 'NO_LOT': 'header label - visible with data', 'AREA': 'header label - visible with data', 'tsp — hakmilik_DAERAH': 'no label', 'tsp — hakmilik_NO_PA': 'no label', 'tsp — pemilik_PEMILIK': 'no label', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_MergePAtandasempadan_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'X': 'no label', 'Y': 'no label', 'path': 'no label', });
lyr_MergePAtandasempadan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});