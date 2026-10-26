ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([177101.144838, 390805.079525, 177607.377589, 391068.722776]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Revisieriool_1 = new ol.format.GeoJSON();
var features_Revisieriool_1 = format_Revisieriool_1.readFeatures(json_Revisieriool_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Revisieriool_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Revisieriool_1.addFeatures(features_Revisieriool_1);
var lyr_Revisieriool_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Revisieriool_1, 
                style: style_Revisieriool_1,
                popuplayertitle: 'Revisie riool',
                interactive: true,
    title: 'Revisie riool<br />\
    <img src="styles/legend/Revisieriool_1_0.png" /> gemengd riool<br />\
    <img src="styles/legend/Revisieriool_1_1.png" /> hemelwater<br />\
    <img src="styles/legend/Revisieriool_1_2.png" /> vuilwaterriool<br />\
    <img src="styles/legend/Revisieriool_1_3.png" /> <br />' });
var format_Revisiemantelbuizen_2 = new ol.format.GeoJSON();
var features_Revisiemantelbuizen_2 = format_Revisiemantelbuizen_2.readFeatures(json_Revisiemantelbuizen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Revisiemantelbuizen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Revisiemantelbuizen_2.addFeatures(features_Revisiemantelbuizen_2);
var lyr_Revisiemantelbuizen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Revisiemantelbuizen_2, 
                style: style_Revisiemantelbuizen_2,
                popuplayertitle: 'Revisie mantelbuizen',
                interactive: true,
                title: '<img src="styles/legend/Revisiemantelbuizen_2.png" /> Revisie mantelbuizen'
            });
var format_kanthoeve20261021_3 = new ol.format.GeoJSON();
var features_kanthoeve20261021_3 = format_kanthoeve20261021_3.readFeatures(json_kanthoeve20261021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_kanthoeve20261021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kanthoeve20261021_3.addFeatures(features_kanthoeve20261021_3);
var lyr_kanthoeve20261021_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kanthoeve20261021_3, 
                style: style_kanthoeve20261021_3,
                popuplayertitle: 'kanthoeve-20261021',
                interactive: false,
                title: '<img src="styles/legend/kanthoeve20261021_3.png" /> kanthoeve-20261021'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Revisieriool_1.setVisible(true);lyr_Revisiemantelbuizen_2.setVisible(true);lyr_kanthoeve20261021_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Revisieriool_1,lyr_Revisiemantelbuizen_2,lyr_kanthoeve20261021_3];
lyr_Revisieriool_1.set('fieldAliases', {'van_knpnr': 'van_knpnr', 'naar_knpnr': 'naar_knpnr', 'leidingnr': 'leidingnr', 'datum': 'datum', 'tijd': 'tijd', 'strengtype': 'strengtype', 'stelseltyp': 'stelseltyp', 'functie': 'functie', 'systeem': 'systeem', 'jva': 'jva', 'jvr': 'jvr', 'profiel': 'profiel', 'lengte': 'lengte', 'breedte': 'breedte', 'hoogte': 'hoogte', 'bdmbreedte': 'bdmbreedte', 'materiaal': 'materiaal', 'omhulsel': 'omhulsel', 'lining': 'lining', 'drukklass': 'drukklass', 'sdr_waarde': 'sdr_waarde', 'voegverb': 'voegverb', 'voegmatr': 'voegmatr', 'fundatie': 'fundatie', 'grondslag': 'grondslag', 'wanddikte': 'wanddikte', 'van_bob': 'van_bob', 'naar_bob': 'naar_bob', 'inwin_vbob': 'inwin_vbob', 'inwin_nbob': 'inwin_nbob', 'peil_instl': 'peil_instl', 'verh_type': 'verh_type', 'bovengrnd': 'bovengrnd', 'bor_guid': 'bor_guid', 'ingeo_guid': 'ingeo_guid', 'wion_thema': 'wion_thema', 'begindatum': 'begindatum', 'einddatum': 'einddatum', 'objgroep': 'objgroep', 'bem_gebied': 'bem_gebied', 'straatcode': 'straatcode', 'plaats': 'plaats', 'straatnaam': 'straatnaam', 'eigenaar': 'eigenaar', 'beheerder': 'beheerder', 'leverancie': 'leverancie', 'status': 'status', 'tekening': 'tekening', 'opmerking': 'opmerking', 'vervkosten': 'vervkosten', 'vervjaar': 'vervjaar', 'vervmtrgl': 'vervmtrgl', 'beoordeeld': 'beoordeeld', 'tact_mtrgl': 'tact_mtrgl', 'tact_urg': 'tact_urg', 'mtr_naam': 'mtr_naam', 'mtr_code': 'mtr_code', 'mtr_jaar': 'mtr_jaar', 'mtr_mtrgl': 'mtr_mtrgl', 'ond_naam': 'ond_naam', 'ond_code': 'ond_code', 'ond_jaar': 'ond_jaar', 'ond_mtrgl': 'ond_mtrgl', 'score': 'score', 'defectpunt': 'defectpunt', 'actiejaar': 'actiejaar', 'actietype': 'actietype', 'actiesoort': 'actiesoort', 'actiekost': 'actiekost', 'ruwh_bodem': 'ruwh_bodem', 'ruwh_boven': 'ruwh_boven', 'debiet': 'debiet', 'geslvehell': 'geslvehell', 'geslvevlak': 'geslvevlak', 'geslveuitg': 'geslveuitg', 'openvehell': 'openvehell', 'openvevlak': 'openvevlak', 'openveuitg': 'openveuitg', 'dakHell': 'dakHell', 'dakvlak': 'dakvlak', 'dakuitg': 'dakuitg', 'onverhhell': 'onverhhell', 'onverhvlak': 'onverhvlak', 'onverhuitg': 'onverhuitg', 'inspdatum': 'inspdatum', 'kenmerk_0': 'kenmerk_0', 'kenmerk_1': 'kenmerk_1', 'kenmerk_2': 'kenmerk_2', 'kenmerk_3': 'kenmerk_3', 'kenmerk_4': 'kenmerk_4', 'kenmerk_5': 'kenmerk_5', 'kenmerk_6': 'kenmerk_6', 'kenmerk_7': 'kenmerk_7', 'kenmerk_8': 'kenmerk_8', 'kenmerk_9': 'kenmerk_9', });
lyr_Revisiemantelbuizen_2.set('fieldAliases', {'id': 'id', 'type': 'type', 'lengte': 'lengte', 'stelsel': 'stelsel', });
lyr_kanthoeve20261021_3.set('fieldAliases', {'Object': 'Object', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_Revisieriool_1.set('fieldImages', {'van_knpnr': 'TextEdit', 'naar_knpnr': 'TextEdit', 'leidingnr': 'TextEdit', 'datum': 'Range', 'tijd': 'TextEdit', 'strengtype': 'TextEdit', 'stelseltyp': 'TextEdit', 'functie': 'TextEdit', 'systeem': 'TextEdit', 'jva': 'TextEdit', 'jvr': 'TextEdit', 'profiel': 'TextEdit', 'lengte': 'TextEdit', 'breedte': 'Range', 'hoogte': 'Range', 'bdmbreedte': 'Range', 'materiaal': 'TextEdit', 'omhulsel': 'TextEdit', 'lining': 'TextEdit', 'drukklass': 'TextEdit', 'sdr_waarde': 'TextEdit', 'voegverb': 'TextEdit', 'voegmatr': 'TextEdit', 'fundatie': 'TextEdit', 'grondslag': 'TextEdit', 'wanddikte': 'Range', 'van_bob': 'TextEdit', 'naar_bob': 'TextEdit', 'inwin_vbob': 'TextEdit', 'inwin_nbob': 'TextEdit', 'peil_instl': 'TextEdit', 'verh_type': 'TextEdit', 'bovengrnd': 'TextEdit', 'bor_guid': 'TextEdit', 'ingeo_guid': 'TextEdit', 'wion_thema': 'TextEdit', 'begindatum': 'Range', 'einddatum': 'Range', 'objgroep': 'TextEdit', 'bem_gebied': 'TextEdit', 'straatcode': 'TextEdit', 'plaats': 'TextEdit', 'straatnaam': 'TextEdit', 'eigenaar': 'TextEdit', 'beheerder': 'TextEdit', 'leverancie': 'TextEdit', 'status': 'TextEdit', 'tekening': 'TextEdit', 'opmerking': 'TextEdit', 'vervkosten': 'TextEdit', 'vervjaar': 'TextEdit', 'vervmtrgl': 'TextEdit', 'beoordeeld': 'TextEdit', 'tact_mtrgl': 'Range', 'tact_urg': 'TextEdit', 'mtr_naam': 'TextEdit', 'mtr_code': 'TextEdit', 'mtr_jaar': 'TextEdit', 'mtr_mtrgl': 'TextEdit', 'ond_naam': 'TextEdit', 'ond_code': 'TextEdit', 'ond_jaar': 'TextEdit', 'ond_mtrgl': 'TextEdit', 'score': 'Range', 'defectpunt': 'Range', 'actiejaar': 'TextEdit', 'actietype': 'TextEdit', 'actiesoort': 'TextEdit', 'actiekost': 'TextEdit', 'ruwh_bodem': 'Range', 'ruwh_boven': 'Range', 'debiet': 'TextEdit', 'geslvehell': 'TextEdit', 'geslvevlak': 'TextEdit', 'geslveuitg': 'TextEdit', 'openvehell': 'TextEdit', 'openvevlak': 'TextEdit', 'openveuitg': 'TextEdit', 'dakHell': 'TextEdit', 'dakvlak': 'TextEdit', 'dakuitg': 'TextEdit', 'onverhhell': 'TextEdit', 'onverhvlak': 'TextEdit', 'onverhuitg': 'TextEdit', 'inspdatum': 'Range', 'kenmerk_0': 'TextEdit', 'kenmerk_1': 'TextEdit', 'kenmerk_2': 'TextEdit', 'kenmerk_3': 'TextEdit', 'kenmerk_4': 'TextEdit', 'kenmerk_5': 'TextEdit', 'kenmerk_6': 'TextEdit', 'kenmerk_7': 'TextEdit', 'kenmerk_8': 'TextEdit', 'kenmerk_9': 'TextEdit', });
lyr_Revisiemantelbuizen_2.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', 'lengte': 'TextEdit', 'stelsel': 'TextEdit', });
lyr_kanthoeve20261021_3.set('fieldImages', {'Object': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', });
lyr_Revisieriool_1.set('fieldLabels', {'van_knpnr': 'hidden field', 'naar_knpnr': 'hidden field', 'leidingnr': 'hidden field', 'datum': 'hidden field', 'tijd': 'hidden field', 'strengtype': 'inline label - visible with data', 'stelseltyp': 'hidden field', 'functie': 'inline label - visible with data', 'systeem': 'hidden field', 'jva': 'inline label - visible with data', 'jvr': 'hidden field', 'profiel': 'hidden field', 'lengte': 'inline label - visible with data', 'breedte': 'inline label - visible with data', 'hoogte': 'hidden field', 'bdmbreedte': 'hidden field', 'materiaal': 'hidden field', 'omhulsel': 'hidden field', 'lining': 'hidden field', 'drukklass': 'hidden field', 'sdr_waarde': 'hidden field', 'voegverb': 'hidden field', 'voegmatr': 'hidden field', 'fundatie': 'hidden field', 'grondslag': 'hidden field', 'wanddikte': 'hidden field', 'van_bob': 'hidden field', 'naar_bob': 'hidden field', 'inwin_vbob': 'hidden field', 'inwin_nbob': 'hidden field', 'peil_instl': 'hidden field', 'verh_type': 'hidden field', 'bovengrnd': 'hidden field', 'bor_guid': 'hidden field', 'ingeo_guid': 'hidden field', 'wion_thema': 'hidden field', 'begindatum': 'hidden field', 'einddatum': 'hidden field', 'objgroep': 'hidden field', 'bem_gebied': 'hidden field', 'straatcode': 'hidden field', 'plaats': 'hidden field', 'straatnaam': 'hidden field', 'eigenaar': 'hidden field', 'beheerder': 'hidden field', 'leverancie': 'hidden field', 'status': 'hidden field', 'tekening': 'hidden field', 'opmerking': 'hidden field', 'vervkosten': 'hidden field', 'vervjaar': 'hidden field', 'vervmtrgl': 'hidden field', 'beoordeeld': 'hidden field', 'tact_mtrgl': 'hidden field', 'tact_urg': 'hidden field', 'mtr_naam': 'hidden field', 'mtr_code': 'hidden field', 'mtr_jaar': 'hidden field', 'mtr_mtrgl': 'hidden field', 'ond_naam': 'hidden field', 'ond_code': 'hidden field', 'ond_jaar': 'hidden field', 'ond_mtrgl': 'hidden field', 'score': 'hidden field', 'defectpunt': 'hidden field', 'actiejaar': 'hidden field', 'actietype': 'hidden field', 'actiesoort': 'hidden field', 'actiekost': 'hidden field', 'ruwh_bodem': 'hidden field', 'ruwh_boven': 'hidden field', 'debiet': 'hidden field', 'geslvehell': 'hidden field', 'geslvevlak': 'hidden field', 'geslveuitg': 'hidden field', 'openvehell': 'hidden field', 'openvevlak': 'hidden field', 'openveuitg': 'hidden field', 'dakHell': 'hidden field', 'dakvlak': 'hidden field', 'dakuitg': 'hidden field', 'onverhhell': 'hidden field', 'onverhvlak': 'hidden field', 'onverhuitg': 'hidden field', 'inspdatum': 'hidden field', 'kenmerk_0': 'hidden field', 'kenmerk_1': 'hidden field', 'kenmerk_2': 'hidden field', 'kenmerk_3': 'hidden field', 'kenmerk_4': 'hidden field', 'kenmerk_5': 'hidden field', 'kenmerk_6': 'hidden field', 'kenmerk_7': 'hidden field', 'kenmerk_8': 'hidden field', 'kenmerk_9': 'hidden field', });
lyr_Revisiemantelbuizen_2.set('fieldLabels', {'id': 'hidden field', 'type': 'inline label - visible with data', 'lengte': 'inline label - visible with data', 'stelsel': 'no label', });
lyr_kanthoeve20261021_3.set('fieldLabels', {'Object': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_kanthoeve20261021_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});