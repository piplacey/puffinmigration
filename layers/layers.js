ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5938").setExtent([-4201298.689853, -5458941.752805, 7976175.794734, 1331471.528563]);
var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Migrationroute_1 = new ol.format.GeoJSON();
var features_Migrationroute_1 = format_Migrationroute_1.readFeatures(json_Migrationroute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_1.addFeatures(features_Migrationroute_1);
var lyr_Migrationroute_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_1, 
                style: style_Migrationroute_1,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_1.png" /> Migration route'
            });
var format_Location_2 = new ol.format.GeoJSON();
var features_Location_2 = format_Location_2.readFeatures(json_Location_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_2.addFeatures(features_Location_2);
var lyr_Location_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_2, 
                style: style_Location_2,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_2_0.png" /> Normal <br />\
    <img src="styles/legend/Location_2_1.png" /> Post-breeding <br />\
    <img src="styles/legend/Location_2_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_3 = new ol.format.GeoJSON();
var features_Migrationroute_3 = format_Migrationroute_3.readFeatures(json_Migrationroute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_3.addFeatures(features_Migrationroute_3);
var lyr_Migrationroute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_3, 
                style: style_Migrationroute_3,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_3.png" /> Migration route'
            });
var format_Location_4 = new ol.format.GeoJSON();
var features_Location_4 = format_Location_4.readFeatures(json_Location_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_4.addFeatures(features_Location_4);
var lyr_Location_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_4, 
                style: style_Location_4,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_4_0.png" /> Normal<br />\
    <img src="styles/legend/Location_4_1.png" /> Post-breeding<br />\
    <img src="styles/legend/Location_4_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_5 = new ol.format.GeoJSON();
var features_Migrationroute_5 = format_Migrationroute_5.readFeatures(json_Migrationroute_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_5.addFeatures(features_Migrationroute_5);
var lyr_Migrationroute_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_5, 
                style: style_Migrationroute_5,
                popuplayertitle: ' Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_5.png" />  Migration route'
            });
var format_Location_6 = new ol.format.GeoJSON();
var features_Location_6 = format_Location_6.readFeatures(json_Location_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_6.addFeatures(features_Location_6);
var lyr_Location_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_6, 
                style: style_Location_6,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_6_0.png" /> Normal <br />\
    <img src="styles/legend/Location_6_1.png" /> Post-breeding<br />\
    <img src="styles/legend/Location_6_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_7 = new ol.format.GeoJSON();
var features_Migrationroute_7 = format_Migrationroute_7.readFeatures(json_Migrationroute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_7.addFeatures(features_Migrationroute_7);
var lyr_Migrationroute_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_7, 
                style: style_Migrationroute_7,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_7.png" /> Migration route'
            });
var format_Location_8 = new ol.format.GeoJSON();
var features_Location_8 = format_Location_8.readFeatures(json_Location_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_8.addFeatures(features_Location_8);
var lyr_Location_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_8, 
                style: style_Location_8,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_8_0.png" /> Normal <br />\
    <img src="styles/legend/Location_8_1.png" /> Post-breeding <br />\
    <img src="styles/legend/Location_8_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_9 = new ol.format.GeoJSON();
var features_Migrationroute_9 = format_Migrationroute_9.readFeatures(json_Migrationroute_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_9.addFeatures(features_Migrationroute_9);
var lyr_Migrationroute_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_9, 
                style: style_Migrationroute_9,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_9.png" /> Migration route'
            });
var format_Location_10 = new ol.format.GeoJSON();
var features_Location_10 = format_Location_10.readFeatures(json_Location_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_10.addFeatures(features_Location_10);
var lyr_Location_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_10, 
                style: style_Location_10,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_10_0.png" /> Normal <br />\
    <img src="styles/legend/Location_10_1.png" /> Post-breeding<br />\
    <img src="styles/legend/Location_10_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_11 = new ol.format.GeoJSON();
var features_Migrationroute_11 = format_Migrationroute_11.readFeatures(json_Migrationroute_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_11.addFeatures(features_Migrationroute_11);
var lyr_Migrationroute_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_11, 
                style: style_Migrationroute_11,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_11.png" /> Migration route'
            });
var format_Location_12 = new ol.format.GeoJSON();
var features_Location_12 = format_Location_12.readFeatures(json_Location_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_12.addFeatures(features_Location_12);
var lyr_Location_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_12, 
                style: style_Location_12,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_12_0.png" /> Normal<br />\
    <img src="styles/legend/Location_12_1.png" /> Post-breeding <br />\
    <img src="styles/legend/Location_12_2.png" /> Pre-breeding <br />' });
var format_Migrationroute_13 = new ol.format.GeoJSON();
var features_Migrationroute_13 = format_Migrationroute_13.readFeatures(json_Migrationroute_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_13.addFeatures(features_Migrationroute_13);
var lyr_Migrationroute_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_13, 
                style: style_Migrationroute_13,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_13.png" /> Migration route'
            });
var format_Location_14 = new ol.format.GeoJSON();
var features_Location_14 = format_Location_14.readFeatures(json_Location_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_14.addFeatures(features_Location_14);
var lyr_Location_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_14, 
                style: style_Location_14,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_14_0.png" /> Normal<br />\
    <img src="styles/legend/Location_14_1.png" /> Post-breeding <br />\
    <img src="styles/legend/Location_14_2.png" /> Pre-breeding<br />' });
var format_Migrationroute_15 = new ol.format.GeoJSON();
var features_Migrationroute_15 = format_Migrationroute_15.readFeatures(json_Migrationroute_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_15.addFeatures(features_Migrationroute_15);
var lyr_Migrationroute_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_15, 
                style: style_Migrationroute_15,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_15.png" /> Migration route'
            });
var format_Location_16 = new ol.format.GeoJSON();
var features_Location_16 = format_Location_16.readFeatures(json_Location_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_16.addFeatures(features_Location_16);
var lyr_Location_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_16, 
                style: style_Location_16,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_16_0.png" /> Post-breeding<br />' });
var format_Migrationroute_17 = new ol.format.GeoJSON();
var features_Migrationroute_17 = format_Migrationroute_17.readFeatures(json_Migrationroute_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Migrationroute_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Migrationroute_17.addFeatures(features_Migrationroute_17);
var lyr_Migrationroute_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Migrationroute_17, 
                style: style_Migrationroute_17,
                popuplayertitle: 'Migration route',
                interactive: false,
                title: '<img src="styles/legend/Migrationroute_17.png" /> Migration route'
            });
var format_Location_18 = new ol.format.GeoJSON();
var features_Location_18 = format_Location_18.readFeatures(json_Location_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5938'});
var jsonSource_Location_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Location_18.addFeatures(features_Location_18);
var lyr_Location_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Location_18, 
                style: style_Location_18,
                popuplayertitle: 'Location',
                interactive: true,
    title: 'Location<br />\
    <img src="styles/legend/Location_18_0.png" /> Normal<br />\
    <img src="styles/legend/Location_18_1.png" /> Post-breeding <br />\
    <img src="styles/legend/Location_18_2.png" /> Pre-breeding<br />' });
var group_Utertoq = new ol.layer.Group({
                                layers: [lyr_Migrationroute_17,lyr_Location_18,],
                                fold: 'open',
                                title: 'Utertoq'});
var group_Pipaluk = new ol.layer.Group({
                                layers: [lyr_Migrationroute_15,lyr_Location_16,],
                                fold: 'close',
                                title: 'Pipaluk'});
var group_Nivi = new ol.layer.Group({
                                layers: [lyr_Migrationroute_13,lyr_Location_14,],
                                fold: 'close',
                                title: 'Nivi'});
var group_Minik = new ol.layer.Group({
                                layers: [lyr_Migrationroute_11,lyr_Location_12,],
                                fold: 'close',
                                title: 'Minik'});
var group_Kuluk = new ol.layer.Group({
                                layers: [lyr_Migrationroute_9,lyr_Location_10,],
                                fold: 'close',
                                title: 'Kuluk'});
var group_Inuuna = new ol.layer.Group({
                                layers: [lyr_Migrationroute_7,lyr_Location_8,],
                                fold: 'close',
                                title: 'Inuuna'});
var group_Inuk = new ol.layer.Group({
                                layers: [lyr_Migrationroute_5,lyr_Location_6,],
                                fold: 'close',
                                title: 'Inuk'});
var group_Aqqalu = new ol.layer.Group({
                                layers: [lyr_Migrationroute_3,lyr_Location_4,],
                                fold: 'close',
                                title: 'Aqqalu'});
var group_Aputsiaq = new ol.layer.Group({
                                layers: [lyr_Migrationroute_1,lyr_Location_2,],
                                fold: 'close',
                                title: 'Aputsiaq'});

lyr_Basemap_0.setVisible(true);lyr_Migrationroute_1.setVisible(false);lyr_Location_2.setVisible(false);lyr_Migrationroute_3.setVisible(false);lyr_Location_4.setVisible(false);lyr_Migrationroute_5.setVisible(false);lyr_Location_6.setVisible(false);lyr_Migrationroute_7.setVisible(false);lyr_Location_8.setVisible(false);lyr_Migrationroute_9.setVisible(false);lyr_Location_10.setVisible(false);lyr_Migrationroute_11.setVisible(false);lyr_Location_12.setVisible(false);lyr_Migrationroute_13.setVisible(false);lyr_Location_14.setVisible(false);lyr_Migrationroute_15.setVisible(false);lyr_Location_16.setVisible(false);lyr_Migrationroute_17.setVisible(true);lyr_Location_18.setVisible(true);
var layersList = [lyr_Basemap_0,group_Aputsiaq,group_Aqqalu,group_Inuk,group_Inuuna,group_Kuluk,group_Minik,group_Nivi,group_Pipaluk,group_Utertoq];
lyr_Migrationroute_1.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_2.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_3.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_4.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_5.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_6.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_7.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_8.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_9.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_10.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_11.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_12.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_13.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_14.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_15.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_16.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_17.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_Location_18.set('fieldAliases', {'Name': 'Name', 'Sex': 'Sex', 'Date': 'Date', 'location-long': 'location-long', 'location-lat': 'location-lat', 'individual-local-identifier': 'individual-local-identifier', 'Migration type': 'Migration type', });
lyr_Migrationroute_1.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_2.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_3.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_4.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_5.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_6.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_7.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_8.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'CheckBox', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_9.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_10.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_11.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_12.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_13.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_14.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'CheckBox', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_15.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_16.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'CheckBox', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_17.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Location_18.set('fieldImages', {'Name': 'TextEdit', 'Sex': 'TextEdit', 'Date': 'TextEdit', 'location-long': 'TextEdit', 'location-lat': 'TextEdit', 'individual-local-identifier': 'Range', 'Migration type': 'TextEdit', });
lyr_Migrationroute_1.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_3.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_5.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_6.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_7.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_9.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_10.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_11.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_12.set('fieldLabels', {'Name': 'no label', 'Sex': 'no label', 'Date': 'no label', 'location-long': 'no label', 'location-lat': 'no label', 'individual-local-identifier': 'no label', 'Migration type': 'no label', });
lyr_Migrationroute_13.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_14.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_15.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'inline label - always visible', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Migrationroute_17.set('fieldLabels', {'fid': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', });
lyr_Location_18.set('fieldLabels', {'Name': 'inline label - always visible', 'Sex': 'no label', 'Date': 'inline label - always visible', 'location-long': 'hidden field', 'location-lat': 'hidden field', 'individual-local-identifier': 'hidden field', 'Migration type': 'hidden field', });
lyr_Location_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});