ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([176772.158158, 390525.859825, 177887.667842, 391106.811175]);
var wms_layers = [];


    var projection_LuchtfotoActueelOrtho8cmRGB_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_LuchtfotoActueelOrtho8cmRGB_0 = projection_LuchtfotoActueelOrtho8cmRGB_0.getExtent();
    var size_LuchtfotoActueelOrtho8cmRGB_0 = ol.extent.getWidth(projectionExtent_LuchtfotoActueelOrtho8cmRGB_0) / 256;
    var resolutions_LuchtfotoActueelOrtho8cmRGB_0 = new Array(14);
    var matrixIds_LuchtfotoActueelOrtho8cmRGB_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_LuchtfotoActueelOrtho8cmRGB_0[z] = size_LuchtfotoActueelOrtho8cmRGB_0 / Math.pow(2, z);
        matrixIds_LuchtfotoActueelOrtho8cmRGB_0[z] = z;
    }
    var lyr_LuchtfotoActueelOrtho8cmRGB_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?request=GetCapabilities&service=WMTS",
                                attributions: ' ',
                                "layer": "Actueel_orthoHR",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_LuchtfotoActueelOrtho8cmRGB_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_LuchtfotoActueelOrtho8cmRGB_0),
                resolutions: resolutions_LuchtfotoActueelOrtho8cmRGB_0,
                matrixIds: matrixIds_LuchtfotoActueelOrtho8cmRGB_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Luchtfoto Actueel Ortho 8cm RGB',
                            opacity: 0.5,
                            
                            
                          });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Perceel_2 = new ol.format.GeoJSON();
var features_Perceel_2 = format_Perceel_2.readFeatures(json_Perceel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Perceel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perceel_2.addFeatures(features_Perceel_2);
var lyr_Perceel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perceel_2, 
                style: style_Perceel_2,
                popuplayertitle: 'Perceel',
                interactive: true,
                title: '<img src="styles/legend/Perceel_2.png" /> Perceel'
            });
var format_Pand_3 = new ol.format.GeoJSON();
var features_Pand_3 = format_Pand_3.readFeatures(json_Pand_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Pand_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pand_3.addFeatures(features_Pand_3);
var lyr_Pand_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pand_3, 
                style: style_Pand_3,
                popuplayertitle: 'Pand',
                interactive: true,
                title: '<img src="styles/legend/Pand_3.png" /> Pand'
            });
var format_Revisieriool_4 = new ol.format.GeoJSON();
var features_Revisieriool_4 = format_Revisieriool_4.readFeatures(json_Revisieriool_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Revisieriool_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Revisieriool_4.addFeatures(features_Revisieriool_4);
var lyr_Revisieriool_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Revisieriool_4, 
                style: style_Revisieriool_4,
                popuplayertitle: 'Revisie riool',
                interactive: true,
                title: '<img src="styles/legend/Revisieriool_4.png" /> Revisie riool'
            });
var format_Kanthoevegps_5 = new ol.format.GeoJSON();
var features_Kanthoevegps_5 = format_Kanthoevegps_5.readFeatures(json_Kanthoevegps_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Kanthoevegps_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanthoevegps_5.addFeatures(features_Kanthoevegps_5);
var lyr_Kanthoevegps_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kanthoevegps_5, 
                style: style_Kanthoevegps_5,
                popuplayertitle: 'Kanthoeve-gps',
                interactive: true,
                title: '<img src="styles/legend/Kanthoevegps_5.png" /> Kanthoeve-gps'
            });

lyr_LuchtfotoActueelOrtho8cmRGB_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Perceel_2.setVisible(true);lyr_Pand_3.setVisible(true);lyr_Revisieriool_4.setVisible(true);lyr_Kanthoevegps_5.setVisible(true);
var layersList = [lyr_LuchtfotoActueelOrtho8cmRGB_0,lyr_OpenStreetMap_1,lyr_Perceel_2,lyr_Pand_3,lyr_Revisieriool_4,lyr_Kanthoevegps_5];
lyr_Perceel_2.set('fieldAliases', {'fuuid': 'fuuid', 'identifica': 'identifica', 'identifi_1': 'identifi_1', 'beginGeldi': 'beginGeldi', 'tijdstipRe': 'tijdstipRe', 'volgnummer': 'volgnummer', 'statusHist': 'statusHist', 'statusHi_1': 'statusHi_1', 'kadastrale': 'kadastrale', 'kadastra_1': 'kadastra_1', 'sectie': 'sectie', 'AKRKadastr': 'AKRKadastr', 'AKRKadas_1': 'AKRKadas_1', 'kadastra_2': 'kadastra_2', 'soortGroot': 'soortGroot', 'soortGro_1': 'soortGro_1', 'perceelnum': 'perceelnum', 'perceeln_1': 'perceeln_1', 'perceeln_2': 'perceeln_2', 'perceeln_3': 'perceeln_3', 'perceeln_4': 'perceeln_4', 'perceeln_5': 'perceeln_5', });
lyr_Pand_3.set('fieldAliases', {'identifica': 'identifica', 'rdf_seeals': 'rdf_seeals', 'bouwjaar': 'bouwjaar', 'status': 'status', 'gebruiksdo': 'gebruiksdo', 'oppervlakt': 'oppervlakt', 'oppervla_1': 'oppervla_1', 'aantal_ver': 'aantal_ver', 'fuuid': 'fuuid', });
lyr_Revisieriool_4.set('fieldAliases', {'van_knpnr': 'van_knpnr', 'naar_knpnr': 'naar_knpnr', 'leidingnr': 'leidingnr', 'datum': 'datum', 'tijd': 'tijd', 'strengtype': 'strengtype', 'stelseltyp': 'stelseltyp', 'functie': 'functie', 'systeem': 'systeem', 'jva': 'jva', 'jvr': 'jvr', 'profiel': 'profiel', 'lengte': 'lengte', 'breedte': 'breedte', 'hoogte': 'hoogte', 'bdmbreedte': 'bdmbreedte', 'materiaal': 'materiaal', 'omhulsel': 'omhulsel', 'lining': 'lining', 'drukklass': 'drukklass', 'sdr_waarde': 'sdr_waarde', 'voegverb': 'voegverb', 'voegmatr': 'voegmatr', 'fundatie': 'fundatie', 'grondslag': 'grondslag', 'wanddikte': 'wanddikte', 'van_bob': 'van_bob', 'naar_bob': 'naar_bob', 'inwin_vbob': 'inwin_vbob', 'inwin_nbob': 'inwin_nbob', 'peil_instl': 'peil_instl', 'verh_type': 'verh_type', 'bovengrnd': 'bovengrnd', 'bor_guid': 'bor_guid', 'ingeo_guid': 'ingeo_guid', 'wion_thema': 'wion_thema', 'begindatum': 'begindatum', 'einddatum': 'einddatum', 'objgroep': 'objgroep', 'bem_gebied': 'bem_gebied', 'straatcode': 'straatcode', 'plaats': 'plaats', 'straatnaam': 'straatnaam', 'eigenaar': 'eigenaar', 'beheerder': 'beheerder', 'leverancie': 'leverancie', 'status': 'status', 'tekening': 'tekening', 'opmerking': 'opmerking', 'vervkosten': 'vervkosten', 'vervjaar': 'vervjaar', 'vervmtrgl': 'vervmtrgl', 'beoordeeld': 'beoordeeld', 'tact_mtrgl': 'tact_mtrgl', 'tact_urg': 'tact_urg', 'mtr_naam': 'mtr_naam', 'mtr_code': 'mtr_code', 'mtr_jaar': 'mtr_jaar', 'mtr_mtrgl': 'mtr_mtrgl', 'ond_naam': 'ond_naam', 'ond_code': 'ond_code', 'ond_jaar': 'ond_jaar', 'ond_mtrgl': 'ond_mtrgl', 'score': 'score', 'defectpunt': 'defectpunt', 'actiejaar': 'actiejaar', 'actietype': 'actietype', 'actiesoort': 'actiesoort', 'actiekost': 'actiekost', 'ruwh_bodem': 'ruwh_bodem', 'ruwh_boven': 'ruwh_boven', 'debiet': 'debiet', 'geslvehell': 'geslvehell', 'geslvevlak': 'geslvevlak', 'geslveuitg': 'geslveuitg', 'openvehell': 'openvehell', 'openvevlak': 'openvevlak', 'openveuitg': 'openveuitg', 'dakHell': 'dakHell', 'dakvlak': 'dakvlak', 'dakuitg': 'dakuitg', 'onverhhell': 'onverhhell', 'onverhvlak': 'onverhvlak', 'onverhuitg': 'onverhuitg', 'inspdatum': 'inspdatum', 'kenmerk_0': 'kenmerk_0', 'kenmerk_1': 'kenmerk_1', 'kenmerk_2': 'kenmerk_2', 'kenmerk_3': 'kenmerk_3', 'kenmerk_4': 'kenmerk_4', 'kenmerk_5': 'kenmerk_5', 'kenmerk_6': 'kenmerk_6', 'kenmerk_7': 'kenmerk_7', 'kenmerk_8': 'kenmerk_8', 'kenmerk_9': 'kenmerk_9', });
lyr_Kanthoevegps_5.set('fieldAliases', {'Object': 'Object', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_Perceel_2.set('fieldImages', {'fuuid': 'TextEdit', 'identifica': 'TextEdit', 'identifi_1': 'TextEdit', 'beginGeldi': 'TextEdit', 'tijdstipRe': 'TextEdit', 'volgnummer': 'TextEdit', 'statusHist': 'TextEdit', 'statusHi_1': 'TextEdit', 'kadastrale': 'TextEdit', 'kadastra_1': 'TextEdit', 'sectie': 'TextEdit', 'AKRKadastr': 'TextEdit', 'AKRKadas_1': 'TextEdit', 'kadastra_2': 'TextEdit', 'soortGroot': 'TextEdit', 'soortGro_1': 'TextEdit', 'perceelnum': 'TextEdit', 'perceeln_1': 'TextEdit', 'perceeln_2': 'TextEdit', 'perceeln_3': 'TextEdit', 'perceeln_4': 'TextEdit', 'perceeln_5': 'TextEdit', });
lyr_Pand_3.set('fieldImages', {'identifica': 'TextEdit', 'rdf_seeals': 'TextEdit', 'bouwjaar': 'TextEdit', 'status': 'TextEdit', 'gebruiksdo': 'TextEdit', 'oppervlakt': 'TextEdit', 'oppervla_1': 'TextEdit', 'aantal_ver': 'TextEdit', 'fuuid': 'TextEdit', });
lyr_Revisieriool_4.set('fieldImages', {'van_knpnr': 'TextEdit', 'naar_knpnr': 'TextEdit', 'leidingnr': 'TextEdit', 'datum': 'Range', 'tijd': 'TextEdit', 'strengtype': 'TextEdit', 'stelseltyp': 'TextEdit', 'functie': 'TextEdit', 'systeem': 'TextEdit', 'jva': 'TextEdit', 'jvr': 'TextEdit', 'profiel': 'TextEdit', 'lengte': 'TextEdit', 'breedte': 'Range', 'hoogte': 'Range', 'bdmbreedte': 'Range', 'materiaal': 'TextEdit', 'omhulsel': 'TextEdit', 'lining': 'TextEdit', 'drukklass': 'TextEdit', 'sdr_waarde': 'TextEdit', 'voegverb': 'TextEdit', 'voegmatr': 'TextEdit', 'fundatie': 'TextEdit', 'grondslag': 'TextEdit', 'wanddikte': 'Range', 'van_bob': 'TextEdit', 'naar_bob': 'TextEdit', 'inwin_vbob': 'TextEdit', 'inwin_nbob': 'TextEdit', 'peil_instl': 'TextEdit', 'verh_type': 'TextEdit', 'bovengrnd': 'TextEdit', 'bor_guid': 'TextEdit', 'ingeo_guid': 'TextEdit', 'wion_thema': 'TextEdit', 'begindatum': 'Range', 'einddatum': 'Range', 'objgroep': 'TextEdit', 'bem_gebied': 'TextEdit', 'straatcode': 'TextEdit', 'plaats': 'TextEdit', 'straatnaam': 'TextEdit', 'eigenaar': 'TextEdit', 'beheerder': 'TextEdit', 'leverancie': 'TextEdit', 'status': 'TextEdit', 'tekening': 'TextEdit', 'opmerking': 'TextEdit', 'vervkosten': 'TextEdit', 'vervjaar': 'TextEdit', 'vervmtrgl': 'TextEdit', 'beoordeeld': 'TextEdit', 'tact_mtrgl': 'Range', 'tact_urg': 'TextEdit', 'mtr_naam': 'TextEdit', 'mtr_code': 'TextEdit', 'mtr_jaar': 'TextEdit', 'mtr_mtrgl': 'TextEdit', 'ond_naam': 'TextEdit', 'ond_code': 'TextEdit', 'ond_jaar': 'TextEdit', 'ond_mtrgl': 'TextEdit', 'score': 'Range', 'defectpunt': 'Range', 'actiejaar': 'TextEdit', 'actietype': 'TextEdit', 'actiesoort': 'TextEdit', 'actiekost': 'TextEdit', 'ruwh_bodem': 'Range', 'ruwh_boven': 'Range', 'debiet': 'TextEdit', 'geslvehell': 'TextEdit', 'geslvevlak': 'TextEdit', 'geslveuitg': 'TextEdit', 'openvehell': 'TextEdit', 'openvevlak': 'TextEdit', 'openveuitg': 'TextEdit', 'dakHell': 'TextEdit', 'dakvlak': 'TextEdit', 'dakuitg': 'TextEdit', 'onverhhell': 'TextEdit', 'onverhvlak': 'TextEdit', 'onverhuitg': 'TextEdit', 'inspdatum': 'Range', 'kenmerk_0': 'TextEdit', 'kenmerk_1': 'TextEdit', 'kenmerk_2': 'TextEdit', 'kenmerk_3': 'TextEdit', 'kenmerk_4': 'TextEdit', 'kenmerk_5': 'TextEdit', 'kenmerk_6': 'TextEdit', 'kenmerk_7': 'TextEdit', 'kenmerk_8': 'TextEdit', 'kenmerk_9': 'TextEdit', });
lyr_Kanthoevegps_5.set('fieldImages', {'Object': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_Perceel_2.set('fieldLabels', {'fuuid': 'hidden field', 'identifica': 'hidden field', 'identifi_1': 'hidden field', 'beginGeldi': 'hidden field', 'tijdstipRe': 'hidden field', 'volgnummer': 'hidden field', 'statusHist': 'hidden field', 'statusHi_1': 'hidden field', 'kadastrale': 'hidden field', 'kadastra_1': 'hidden field', 'sectie': 'hidden field', 'AKRKadastr': 'hidden field', 'AKRKadas_1': 'hidden field', 'kadastra_2': 'hidden field', 'soortGroot': 'hidden field', 'soortGro_1': 'hidden field', 'perceelnum': 'hidden field', 'perceeln_1': 'hidden field', 'perceeln_2': 'hidden field', 'perceeln_3': 'hidden field', 'perceeln_4': 'hidden field', 'perceeln_5': 'hidden field', });
lyr_Pand_3.set('fieldLabels', {'identifica': 'hidden field', 'rdf_seeals': 'hidden field', 'bouwjaar': 'hidden field', 'status': 'hidden field', 'gebruiksdo': 'hidden field', 'oppervlakt': 'hidden field', 'oppervla_1': 'hidden field', 'aantal_ver': 'hidden field', 'fuuid': 'hidden field', });
lyr_Revisieriool_4.set('fieldLabels', {'van_knpnr': 'hidden field', 'naar_knpnr': 'hidden field', 'leidingnr': 'hidden field', 'datum': 'hidden field', 'tijd': 'hidden field', 'strengtype': 'hidden field', 'stelseltyp': 'hidden field', 'functie': 'hidden field', 'systeem': 'hidden field', 'jva': 'hidden field', 'jvr': 'hidden field', 'profiel': 'hidden field', 'lengte': 'hidden field', 'breedte': 'hidden field', 'hoogte': 'hidden field', 'bdmbreedte': 'hidden field', 'materiaal': 'hidden field', 'omhulsel': 'hidden field', 'lining': 'hidden field', 'drukklass': 'hidden field', 'sdr_waarde': 'hidden field', 'voegverb': 'hidden field', 'voegmatr': 'hidden field', 'fundatie': 'hidden field', 'grondslag': 'hidden field', 'wanddikte': 'hidden field', 'van_bob': 'hidden field', 'naar_bob': 'hidden field', 'inwin_vbob': 'hidden field', 'inwin_nbob': 'hidden field', 'peil_instl': 'hidden field', 'verh_type': 'hidden field', 'bovengrnd': 'hidden field', 'bor_guid': 'hidden field', 'ingeo_guid': 'hidden field', 'wion_thema': 'hidden field', 'begindatum': 'hidden field', 'einddatum': 'hidden field', 'objgroep': 'hidden field', 'bem_gebied': 'hidden field', 'straatcode': 'hidden field', 'plaats': 'hidden field', 'straatnaam': 'hidden field', 'eigenaar': 'hidden field', 'beheerder': 'hidden field', 'leverancie': 'hidden field', 'status': 'hidden field', 'tekening': 'hidden field', 'opmerking': 'hidden field', 'vervkosten': 'hidden field', 'vervjaar': 'hidden field', 'vervmtrgl': 'hidden field', 'beoordeeld': 'hidden field', 'tact_mtrgl': 'hidden field', 'tact_urg': 'hidden field', 'mtr_naam': 'hidden field', 'mtr_code': 'hidden field', 'mtr_jaar': 'hidden field', 'mtr_mtrgl': 'hidden field', 'ond_naam': 'hidden field', 'ond_code': 'hidden field', 'ond_jaar': 'hidden field', 'ond_mtrgl': 'hidden field', 'score': 'hidden field', 'defectpunt': 'hidden field', 'actiejaar': 'hidden field', 'actietype': 'hidden field', 'actiesoort': 'hidden field', 'actiekost': 'hidden field', 'ruwh_bodem': 'hidden field', 'ruwh_boven': 'hidden field', 'debiet': 'hidden field', 'geslvehell': 'hidden field', 'geslvevlak': 'hidden field', 'geslveuitg': 'hidden field', 'openvehell': 'hidden field', 'openvevlak': 'hidden field', 'openveuitg': 'hidden field', 'dakHell': 'hidden field', 'dakvlak': 'hidden field', 'dakuitg': 'hidden field', 'onverhhell': 'hidden field', 'onverhvlak': 'hidden field', 'onverhuitg': 'hidden field', 'inspdatum': 'hidden field', 'kenmerk_0': 'hidden field', 'kenmerk_1': 'hidden field', 'kenmerk_2': 'hidden field', 'kenmerk_3': 'hidden field', 'kenmerk_4': 'hidden field', 'kenmerk_5': 'hidden field', 'kenmerk_6': 'hidden field', 'kenmerk_7': 'hidden field', 'kenmerk_8': 'hidden field', 'kenmerk_9': 'hidden field', });
lyr_Kanthoevegps_5.set('fieldLabels', {'Object': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', });
lyr_Kanthoevegps_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});