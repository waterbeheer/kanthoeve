ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28992").setExtent([177179.996486, 390848.978493, 177491.751772, 391011.338943]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pand_1 = new ol.format.GeoJSON();
var features_Pand_1 = format_Pand_1.readFeatures(json_Pand_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Pand_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pand_1.addFeatures(features_Pand_1);
var lyr_Pand_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pand_1, 
                style: style_Pand_1,
                popuplayertitle: 'Pand',
                interactive: true,
                title: '<img src="styles/legend/Pand_1.png" /> Pand'
            });
var format_importperceelenpand2entities_2 = new ol.format.GeoJSON();
var features_importperceelenpand2entities_2 = format_importperceelenpand2entities_2.readFeatures(json_importperceelenpand2entities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_importperceelenpand2entities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_importperceelenpand2entities_2.addFeatures(features_importperceelenpand2entities_2);
var lyr_importperceelenpand2entities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_importperceelenpand2entities_2, 
                style: style_importperceelenpand2entities_2,
                popuplayertitle: 'import perceel en pand2 — entities',
                interactive: true,
                title: 'import perceel en pand2 — entities'
            });
var format_Revisieriool_3 = new ol.format.GeoJSON();
var features_Revisieriool_3 = format_Revisieriool_3.readFeatures(json_Revisieriool_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Revisieriool_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Revisieriool_3.addFeatures(features_Revisieriool_3);
var lyr_Revisieriool_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Revisieriool_3, 
                style: style_Revisieriool_3,
                popuplayertitle: 'Revisie riool',
                interactive: true,
                title: '<img src="styles/legend/Revisieriool_3.png" /> Revisie riool'
            });
var format_Kanthoevegps_4 = new ol.format.GeoJSON();
var features_Kanthoevegps_4 = format_Kanthoevegps_4.readFeatures(json_Kanthoevegps_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28992'});
var jsonSource_Kanthoevegps_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kanthoevegps_4.addFeatures(features_Kanthoevegps_4);
var lyr_Kanthoevegps_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kanthoevegps_4, 
                style: style_Kanthoevegps_4,
                popuplayertitle: 'Kanthoeve-gps',
                interactive: true,
                title: '<img src="styles/legend/Kanthoevegps_4.png" /> Kanthoeve-gps'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pand_1.setVisible(true);lyr_importperceelenpand2entities_2.setVisible(true);lyr_Revisieriool_3.setVisible(true);lyr_Kanthoevegps_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pand_1,lyr_importperceelenpand2entities_2,lyr_Revisieriool_3,lyr_Kanthoevegps_4];
lyr_Pand_1.set('fieldAliases', {'identifica': 'identifica', 'rdf_seeals': 'rdf_seeals', 'bouwjaar': 'bouwjaar', 'status': 'status', 'gebruiksdo': 'gebruiksdo', 'oppervlakt': 'oppervlakt', 'oppervla_1': 'oppervla_1', 'aantal_ver': 'aantal_ver', 'fuuid': 'fuuid', });
lyr_importperceelenpand2entities_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Revisieriool_3.set('fieldAliases', {'van_knpnr': 'van_knpnr', 'naar_knpnr': 'naar_knpnr', 'leidingnr': 'leidingnr', 'datum': 'datum', 'tijd': 'tijd', 'strengtype': 'strengtype', 'stelseltyp': 'stelseltyp', 'functie': 'functie', 'systeem': 'systeem', 'jva': 'jva', 'jvr': 'jvr', 'profiel': 'profiel', 'lengte': 'lengte', 'breedte': 'breedte', 'hoogte': 'hoogte', 'bdmbreedte': 'bdmbreedte', 'materiaal': 'materiaal', 'omhulsel': 'omhulsel', 'lining': 'lining', 'drukklass': 'drukklass', 'sdr_waarde': 'sdr_waarde', 'voegverb': 'voegverb', 'voegmatr': 'voegmatr', 'fundatie': 'fundatie', 'grondslag': 'grondslag', 'wanddikte': 'wanddikte', 'van_bob': 'van_bob', 'naar_bob': 'naar_bob', 'inwin_vbob': 'inwin_vbob', 'inwin_nbob': 'inwin_nbob', 'peil_instl': 'peil_instl', 'verh_type': 'verh_type', 'bovengrnd': 'bovengrnd', 'bor_guid': 'bor_guid', 'ingeo_guid': 'ingeo_guid', 'wion_thema': 'wion_thema', 'begindatum': 'begindatum', 'einddatum': 'einddatum', 'objgroep': 'objgroep', 'bem_gebied': 'bem_gebied', 'straatcode': 'straatcode', 'plaats': 'plaats', 'straatnaam': 'straatnaam', 'eigenaar': 'eigenaar', 'beheerder': 'beheerder', 'leverancie': 'leverancie', 'status': 'status', 'tekening': 'tekening', 'opmerking': 'opmerking', 'vervkosten': 'vervkosten', 'vervjaar': 'vervjaar', 'vervmtrgl': 'vervmtrgl', 'beoordeeld': 'beoordeeld', 'tact_mtrgl': 'tact_mtrgl', 'tact_urg': 'tact_urg', 'mtr_naam': 'mtr_naam', 'mtr_code': 'mtr_code', 'mtr_jaar': 'mtr_jaar', 'mtr_mtrgl': 'mtr_mtrgl', 'ond_naam': 'ond_naam', 'ond_code': 'ond_code', 'ond_jaar': 'ond_jaar', 'ond_mtrgl': 'ond_mtrgl', 'score': 'score', 'defectpunt': 'defectpunt', 'actiejaar': 'actiejaar', 'actietype': 'actietype', 'actiesoort': 'actiesoort', 'actiekost': 'actiekost', 'ruwh_bodem': 'ruwh_bodem', 'ruwh_boven': 'ruwh_boven', 'debiet': 'debiet', 'geslvehell': 'geslvehell', 'geslvevlak': 'geslvevlak', 'geslveuitg': 'geslveuitg', 'openvehell': 'openvehell', 'openvevlak': 'openvevlak', 'openveuitg': 'openveuitg', 'dakHell': 'dakHell', 'dakvlak': 'dakvlak', 'dakuitg': 'dakuitg', 'onverhhell': 'onverhhell', 'onverhvlak': 'onverhvlak', 'onverhuitg': 'onverhuitg', 'inspdatum': 'inspdatum', 'kenmerk_0': 'kenmerk_0', 'kenmerk_1': 'kenmerk_1', 'kenmerk_2': 'kenmerk_2', 'kenmerk_3': 'kenmerk_3', 'kenmerk_4': 'kenmerk_4', 'kenmerk_5': 'kenmerk_5', 'kenmerk_6': 'kenmerk_6', 'kenmerk_7': 'kenmerk_7', 'kenmerk_8': 'kenmerk_8', 'kenmerk_9': 'kenmerk_9', });
lyr_Kanthoevegps_4.set('fieldAliases', {'Object': 'Object', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_Pand_1.set('fieldImages', {'identifica': 'TextEdit', 'rdf_seeals': 'TextEdit', 'bouwjaar': 'TextEdit', 'status': 'TextEdit', 'gebruiksdo': 'TextEdit', 'oppervlakt': 'TextEdit', 'oppervla_1': 'TextEdit', 'aantal_ver': 'TextEdit', 'fuuid': 'TextEdit', });
lyr_importperceelenpand2entities_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_Revisieriool_3.set('fieldImages', {'van_knpnr': 'TextEdit', 'naar_knpnr': 'TextEdit', 'leidingnr': 'TextEdit', 'datum': 'Range', 'tijd': 'TextEdit', 'strengtype': 'TextEdit', 'stelseltyp': 'TextEdit', 'functie': 'TextEdit', 'systeem': 'TextEdit', 'jva': 'TextEdit', 'jvr': 'TextEdit', 'profiel': 'TextEdit', 'lengte': 'TextEdit', 'breedte': 'Range', 'hoogte': 'Range', 'bdmbreedte': 'Range', 'materiaal': 'TextEdit', 'omhulsel': 'TextEdit', 'lining': 'TextEdit', 'drukklass': 'TextEdit', 'sdr_waarde': 'TextEdit', 'voegverb': 'TextEdit', 'voegmatr': 'TextEdit', 'fundatie': 'TextEdit', 'grondslag': 'TextEdit', 'wanddikte': 'Range', 'van_bob': 'TextEdit', 'naar_bob': 'TextEdit', 'inwin_vbob': 'TextEdit', 'inwin_nbob': 'TextEdit', 'peil_instl': 'TextEdit', 'verh_type': 'TextEdit', 'bovengrnd': 'TextEdit', 'bor_guid': 'TextEdit', 'ingeo_guid': 'TextEdit', 'wion_thema': 'TextEdit', 'begindatum': 'Range', 'einddatum': 'Range', 'objgroep': 'TextEdit', 'bem_gebied': 'TextEdit', 'straatcode': 'TextEdit', 'plaats': 'TextEdit', 'straatnaam': 'TextEdit', 'eigenaar': 'TextEdit', 'beheerder': 'TextEdit', 'leverancie': 'TextEdit', 'status': 'TextEdit', 'tekening': 'TextEdit', 'opmerking': 'TextEdit', 'vervkosten': 'TextEdit', 'vervjaar': 'TextEdit', 'vervmtrgl': 'TextEdit', 'beoordeeld': 'TextEdit', 'tact_mtrgl': 'Range', 'tact_urg': 'TextEdit', 'mtr_naam': 'TextEdit', 'mtr_code': 'TextEdit', 'mtr_jaar': 'TextEdit', 'mtr_mtrgl': 'TextEdit', 'ond_naam': 'TextEdit', 'ond_code': 'TextEdit', 'ond_jaar': 'TextEdit', 'ond_mtrgl': 'TextEdit', 'score': 'Range', 'defectpunt': 'Range', 'actiejaar': 'TextEdit', 'actietype': 'TextEdit', 'actiesoort': 'TextEdit', 'actiekost': 'TextEdit', 'ruwh_bodem': 'Range', 'ruwh_boven': 'Range', 'debiet': 'TextEdit', 'geslvehell': 'TextEdit', 'geslvevlak': 'TextEdit', 'geslveuitg': 'TextEdit', 'openvehell': 'TextEdit', 'openvevlak': 'TextEdit', 'openveuitg': 'TextEdit', 'dakHell': 'TextEdit', 'dakvlak': 'TextEdit', 'dakuitg': 'TextEdit', 'onverhhell': 'TextEdit', 'onverhvlak': 'TextEdit', 'onverhuitg': 'TextEdit', 'inspdatum': 'Range', 'kenmerk_0': 'TextEdit', 'kenmerk_1': 'TextEdit', 'kenmerk_2': 'TextEdit', 'kenmerk_3': 'TextEdit', 'kenmerk_4': 'TextEdit', 'kenmerk_5': 'TextEdit', 'kenmerk_6': 'TextEdit', 'kenmerk_7': 'TextEdit', 'kenmerk_8': 'TextEdit', 'kenmerk_9': 'TextEdit', });
lyr_Kanthoevegps_4.set('fieldImages', {'Object': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', });
lyr_Pand_1.set('fieldLabels', {'identifica': 'hidden field', 'rdf_seeals': 'hidden field', 'bouwjaar': 'hidden field', 'status': 'hidden field', 'gebruiksdo': 'hidden field', 'oppervlakt': 'hidden field', 'oppervla_1': 'hidden field', 'aantal_ver': 'hidden field', 'fuuid': 'hidden field', });
lyr_importperceelenpand2entities_2.set('fieldLabels', {'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'hidden field', });
lyr_Revisieriool_3.set('fieldLabels', {'van_knpnr': 'hidden field', 'naar_knpnr': 'hidden field', 'leidingnr': 'hidden field', 'datum': 'hidden field', 'tijd': 'hidden field', 'strengtype': 'hidden field', 'stelseltyp': 'hidden field', 'functie': 'hidden field', 'systeem': 'hidden field', 'jva': 'hidden field', 'jvr': 'hidden field', 'profiel': 'hidden field', 'lengte': 'hidden field', 'breedte': 'hidden field', 'hoogte': 'hidden field', 'bdmbreedte': 'hidden field', 'materiaal': 'hidden field', 'omhulsel': 'hidden field', 'lining': 'hidden field', 'drukklass': 'hidden field', 'sdr_waarde': 'hidden field', 'voegverb': 'hidden field', 'voegmatr': 'hidden field', 'fundatie': 'hidden field', 'grondslag': 'hidden field', 'wanddikte': 'hidden field', 'van_bob': 'hidden field', 'naar_bob': 'hidden field', 'inwin_vbob': 'hidden field', 'inwin_nbob': 'hidden field', 'peil_instl': 'hidden field', 'verh_type': 'hidden field', 'bovengrnd': 'hidden field', 'bor_guid': 'hidden field', 'ingeo_guid': 'hidden field', 'wion_thema': 'hidden field', 'begindatum': 'hidden field', 'einddatum': 'hidden field', 'objgroep': 'hidden field', 'bem_gebied': 'hidden field', 'straatcode': 'hidden field', 'plaats': 'hidden field', 'straatnaam': 'hidden field', 'eigenaar': 'hidden field', 'beheerder': 'hidden field', 'leverancie': 'hidden field', 'status': 'hidden field', 'tekening': 'hidden field', 'opmerking': 'hidden field', 'vervkosten': 'hidden field', 'vervjaar': 'hidden field', 'vervmtrgl': 'hidden field', 'beoordeeld': 'hidden field', 'tact_mtrgl': 'hidden field', 'tact_urg': 'hidden field', 'mtr_naam': 'hidden field', 'mtr_code': 'hidden field', 'mtr_jaar': 'hidden field', 'mtr_mtrgl': 'hidden field', 'ond_naam': 'hidden field', 'ond_code': 'hidden field', 'ond_jaar': 'hidden field', 'ond_mtrgl': 'hidden field', 'score': 'hidden field', 'defectpunt': 'hidden field', 'actiejaar': 'hidden field', 'actietype': 'hidden field', 'actiesoort': 'hidden field', 'actiekost': 'hidden field', 'ruwh_bodem': 'hidden field', 'ruwh_boven': 'hidden field', 'debiet': 'hidden field', 'geslvehell': 'hidden field', 'geslvevlak': 'hidden field', 'geslveuitg': 'hidden field', 'openvehell': 'hidden field', 'openvevlak': 'hidden field', 'openveuitg': 'hidden field', 'dakHell': 'hidden field', 'dakvlak': 'hidden field', 'dakuitg': 'hidden field', 'onverhhell': 'hidden field', 'onverhvlak': 'hidden field', 'onverhuitg': 'hidden field', 'inspdatum': 'hidden field', 'kenmerk_0': 'hidden field', 'kenmerk_1': 'hidden field', 'kenmerk_2': 'hidden field', 'kenmerk_3': 'hidden field', 'kenmerk_4': 'hidden field', 'kenmerk_5': 'hidden field', 'kenmerk_6': 'hidden field', 'kenmerk_7': 'hidden field', 'kenmerk_8': 'hidden field', 'kenmerk_9': 'hidden field', });
lyr_Kanthoevegps_4.set('fieldLabels', {'Object': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', });
lyr_Kanthoevegps_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});