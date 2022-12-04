var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tracts_notInPovert_1 = new ol.format.GeoJSON();
var features_tracts_notInPovert_1 = format_tracts_notInPovert_1.readFeatures(json_tracts_notInPovert_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracts_notInPovert_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracts_notInPovert_1.addFeatures(features_tracts_notInPovert_1);
var lyr_tracts_notInPovert_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracts_notInPovert_1, 
                style: style_tracts_notInPovert_1,
                interactive: true,
                title: '<img src="styles/legend/tracts_notInPovert_1.png" /> tracts_notInPovert'
            });
var format_Tracts_in_poverty_2 = new ol.format.GeoJSON();
var features_Tracts_in_poverty_2 = format_Tracts_in_poverty_2.readFeatures(json_Tracts_in_poverty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tracts_in_poverty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tracts_in_poverty_2.addFeatures(features_Tracts_in_poverty_2);
var lyr_Tracts_in_poverty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tracts_in_poverty_2, 
                style: style_Tracts_in_poverty_2,
                interactive: true,
    title: 'Tracts_in_poverty<br />\
    <img src="styles/legend/Tracts_in_poverty_2_0.png" /> 20.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_1.png" /> 20.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_2.png" /> 21<br />\
    <img src="styles/legend/Tracts_in_poverty_2_3.png" /> 22.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_4.png" /> 22.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_5.png" /> 25<br />\
    <img src="styles/legend/Tracts_in_poverty_2_6.png" /> 25.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_7.png" /> 26.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_8.png" /> 26.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_9.png" /> 27.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_10.png" /> 27.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_11.png" /> 28<br />\
    <img src="styles/legend/Tracts_in_poverty_2_12.png" /> 28.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_13.png" /> 29.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_14.png" /> 29.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_15.png" /> 30.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_16.png" /> 31.2<br />\
    <img src="styles/legend/Tracts_in_poverty_2_17.png" /> 31.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_18.png" /> 31.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_19.png" /> 32<br />\
    <img src="styles/legend/Tracts_in_poverty_2_20.png" /> 32.2<br />\
    <img src="styles/legend/Tracts_in_poverty_2_21.png" /> 32.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_22.png" /> 32.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_23.png" /> 33.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_24.png" /> 33.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_25.png" /> 33.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_26.png" /> 35.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_27.png" /> 35.6<br />\
    <img src="styles/legend/Tracts_in_poverty_2_28.png" /> 35.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_29.png" /> 37.4<br />\
    <img src="styles/legend/Tracts_in_poverty_2_30.png" /> 38.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_31.png" /> 39.4<br />\
    <img src="styles/legend/Tracts_in_poverty_2_32.png" /> 40.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_33.png" /> 40.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_34.png" /> 41.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_35.png" /> 41.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_36.png" /> 42<br />\
    <img src="styles/legend/Tracts_in_poverty_2_37.png" /> 42.6<br />\
    <img src="styles/legend/Tracts_in_poverty_2_38.png" /> 42.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_39.png" /> 43<br />\
    <img src="styles/legend/Tracts_in_poverty_2_40.png" /> 43.2<br />\
    <img src="styles/legend/Tracts_in_poverty_2_41.png" /> 43.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_42.png" /> 44.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_43.png" /> 45.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_44.png" /> 46<br />\
    <img src="styles/legend/Tracts_in_poverty_2_45.png" /> 46.2<br />\
    <img src="styles/legend/Tracts_in_poverty_2_46.png" /> 48.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_47.png" /> 48.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_48.png" /> 48.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_49.png" /> 49.2<br />\
    <img src="styles/legend/Tracts_in_poverty_2_50.png" /> 49.4<br />\
    <img src="styles/legend/Tracts_in_poverty_2_51.png" /> 50.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_52.png" /> 50.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_53.png" /> 50.8<br />\
    <img src="styles/legend/Tracts_in_poverty_2_54.png" /> 51.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_55.png" /> 51.7<br />\
    <img src="styles/legend/Tracts_in_poverty_2_56.png" /> 52.1<br />\
    <img src="styles/legend/Tracts_in_poverty_2_57.png" /> 55<br />\
    <img src="styles/legend/Tracts_in_poverty_2_58.png" /> 55.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_59.png" /> 59.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_60.png" /> 59.6<br />\
    <img src="styles/legend/Tracts_in_poverty_2_61.png" /> 59.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_62.png" /> 60.4<br />\
    <img src="styles/legend/Tracts_in_poverty_2_63.png" /> 60.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_64.png" /> 65.5<br />\
    <img src="styles/legend/Tracts_in_poverty_2_65.png" /> 67.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_66.png" /> 67.9<br />\
    <img src="styles/legend/Tracts_in_poverty_2_67.png" /> 69.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_68.png" /> 79.3<br />\
    <img src="styles/legend/Tracts_in_poverty_2_69.png" /> 81.4<br />\
    <img src="styles/legend/Tracts_in_poverty_2_70.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_tracts_notInPovert_1.setVisible(true);lyr_Tracts_in_poverty_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tracts_notInPovert_1,lyr_Tracts_in_poverty_2];
lyr_tracts_notInPovert_1.set('fieldAliases', {'statefp20': 'statefp20', 'countyfp20': 'countyfp20', 'tractce20': 'tractce20', 'geoid20': 'geoid20', 'name20': 'name20', 'namelsad20': 'namelsad20', 'mtfcc20': 'mtfcc20', 'funcstat20': 'funcstat20', 'aland20': 'aland20', 'awater20': 'awater20', 'intptlat20': 'intptlat20', 'intptlon20': 'intptlon20', 'objectid': 'objectid', });
lyr_Tracts_in_poverty_2.set('fieldAliases', {'statefp20': 'statefp20', 'countyfp20': 'countyfp20', 'tractce20': 'tractce20', 'geoid20': 'geoid20', 'name20': 'name20', 'namelsad20': 'namelsad20', 'mtfcc20': 'mtfcc20', 'funcstat20': 'funcstat20', 'aland20': 'aland20', 'awater20': 'awater20', 'intptlat20': 'intptlat20', 'intptlon20': 'intptlon20', 'objectid': 'objectid', 'tract_income_Tract_Code': 'tract_income_Tract_Code', 'tract_income_Total': 'tract_income_Total', 'tract_income_Less than $10,000': 'tract_income_Less than $10,000', 'tract_income_$10,000 to $14,999': 'tract_income_$10,000 to $14,999', 'tract_income_$15,000 to $24,999': 'tract_income_$15,000 to $24,999', 'tract_income_percent_poverty': 'tract_income_percent_poverty', });
lyr_tracts_notInPovert_1.set('fieldImages', {'statefp20': 'TextEdit', 'countyfp20': 'TextEdit', 'tractce20': 'TextEdit', 'geoid20': 'TextEdit', 'name20': 'TextEdit', 'namelsad20': 'TextEdit', 'mtfcc20': 'TextEdit', 'funcstat20': 'TextEdit', 'aland20': 'TextEdit', 'awater20': 'TextEdit', 'intptlat20': 'TextEdit', 'intptlon20': 'TextEdit', 'objectid': 'TextEdit', });
lyr_Tracts_in_poverty_2.set('fieldImages', {'statefp20': 'TextEdit', 'countyfp20': 'TextEdit', 'tractce20': 'TextEdit', 'geoid20': 'TextEdit', 'name20': 'TextEdit', 'namelsad20': 'TextEdit', 'mtfcc20': 'TextEdit', 'funcstat20': 'TextEdit', 'aland20': 'TextEdit', 'awater20': 'TextEdit', 'intptlat20': 'TextEdit', 'intptlon20': 'TextEdit', 'objectid': 'TextEdit', 'tract_income_Tract_Code': 'TextEdit', 'tract_income_Total': 'TextEdit', 'tract_income_Less than $10,000': 'TextEdit', 'tract_income_$10,000 to $14,999': 'TextEdit', 'tract_income_$15,000 to $24,999': 'TextEdit', 'tract_income_percent_poverty': 'TextEdit', });
lyr_tracts_notInPovert_1.set('fieldLabels', {'statefp20': 'no label', 'countyfp20': 'no label', 'tractce20': 'no label', 'geoid20': 'no label', 'name20': 'no label', 'namelsad20': 'no label', 'mtfcc20': 'no label', 'funcstat20': 'no label', 'aland20': 'no label', 'awater20': 'no label', 'intptlat20': 'no label', 'intptlon20': 'no label', 'objectid': 'no label', });
lyr_Tracts_in_poverty_2.set('fieldLabels', {'statefp20': 'no label', 'countyfp20': 'no label', 'tractce20': 'no label', 'geoid20': 'no label', 'name20': 'no label', 'namelsad20': 'no label', 'mtfcc20': 'no label', 'funcstat20': 'no label', 'aland20': 'no label', 'awater20': 'no label', 'intptlat20': 'no label', 'intptlon20': 'no label', 'objectid': 'no label', 'tract_income_Tract_Code': 'no label', 'tract_income_Total': 'no label', 'tract_income_Less than $10,000': 'no label', 'tract_income_$10,000 to $14,999': 'no label', 'tract_income_$15,000 to $24,999': 'no label', 'tract_income_percent_poverty': 'no label', });
lyr_Tracts_in_poverty_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});