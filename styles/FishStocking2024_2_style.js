var size = 0;
var placement = 'point';

var style_FishStocking2024_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NumStock");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 1807.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,255,212,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1807.000000 && value <= 5600.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(254,230,165,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5600.000000 && value <= 11500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(254,196,108,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11500.000000 && value <= 20000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(254,153,41,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20000.000000 && value <= 40000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(229,114,23,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40000.000000 && value <= 110000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(196,81,11,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 110000.000000 && value <= 1613075.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(67,67,67,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(153,52,4,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
