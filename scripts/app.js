var viewer;
var activeBaseImagery;
var imageryArc;
var imageryBing;
var imageryOSM;
var terrainDefault;
var liveLat;
var liveLong;
var toolActive = false;

(function () {
    //'use strict';

    viewer = new Cesium.Viewer('cesiumContainer', {
        scene3DOnly: true,
        selectionIndicator: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        homeButton: false,
        timeline: false,
        infoBox: false,
        animation: false,
        fullScreen: false,
        vrButton: true,
    });

    // Imagery Layers
    imageryArc = new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    });

    imageryBing = new Cesium.BingMapsImageryProvider({
        url: 'https://dev.virtualearth.net',
        key: 'T8NLJq6rgc1XkdWQsEf0~mVixdChY8IRbYBWtQb7Fqg~Ammqb8HN48vr4TfbRL0DVMwqVgTIK0XQDLeYWcNNTGsJh9x6juWibTiQcnS6EUpP',
        mapStyle: Cesium.BingMapsStyle.AERIAL
    });

    imageryOSM = Cesium.createOpenStreetMapImageryProvider({
        url: 'https://a.tile.openstreetmap.org/'
    });

    viewer.imageryLayers.addImageryProvider(imageryBing);
    activeBaseImagery = imageryBing;
    // Terrain Layers

    terrainDefault = new Cesium.CesiumTerrainProvider({
        url: '//assets.agi.com/stk-terrain/world',
        requestVertexNormals: true,
        requestWaterMask: false
    });

    viewer.terrainProvider = terrainDefault;


    // Navigation Controls
    var cesiumNavigation = viewer.cesiumNavigation;
    var options = {
        defaultResetView: Cesium.Rectangle.fromDegrees(71, 3, 90, 14),
        enableCompass: true,
        enableZoomControls: true,
        enableDistanceLegend: true,
        enableCompassOuterRing: true
    };
    viewer.extend(Cesium.viewerCesiumNavigationMixin, options);

    // Camera Start Position
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(166.155, -21.740, 3000.0),
        maximumHeight: 10000.0,
        duration: 1.0,
        orientation: {
            heading: Cesium.Math.toRadians(175.0),
            pitch: Cesium.Math.toRadians(-35.0),
            roll: 0.0
        }
    });
}());



$('#imagery-bing').click(function () {
    viewer.imageryLayers.removeAll();
    viewer.imageryLayers.addImageryProvider(imageryBing);
    viewer.imageryLayers.addImageryProvider(imageryCustom);
    activeBaseImagery = imageryBing;
});

$('#imagery-arc').click(function () {
    viewer.imageryLayers.removeAll();
    viewer.imageryLayers.addImageryProvider(imageryArc);
    viewer.imageryLayers.addImageryProvider(imageryCustom);
    activeBaseImagery = imageryArc;
});

$('#imagery-osm').click(function () {
    viewer.imageryLayers.removeAll();
    viewer.imageryLayers.addImageryProvider(imageryOSM);
    viewer.imageryLayers.addImageryProvider(imageryCustom);
    activeBaseImagery = imageryOSM;

});

//side menu interactions
$(".side-button").click(function () {
    if ($(this).hasClass("active")) {
        $(".sidebar").removeClass("open-side");
        $(this).removeClass("active");
    }
    else {
        $(".sidebar").addClass("open-side");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    }
});

$("#home-button").click(function (event) {
    $("#home").addClass("sidebar-pane-display");
    $("#home").siblings().removeClass("sidebar-pane-display");
});

$("#data-button").click(function () {
    $("#data-layers").addClass("sidebar-pane-display");
    $("#data-layers").siblings().removeClass("sidebar-pane-display");

});

$("#info-button").click(function () {
    $("#info").addClass("sidebar-pane-display");
    $("#info").siblings().removeClass("sidebar-pane-display");

});

$("#imagery-button").click(function () {
    $("#imagery").addClass("sidebar-pane-display");
    $("#imagery").siblings().removeClass("sidebar-pane-display");

});

$("#logout-button").click(function (event) {
    window.location.href = "login.aspx?ReturnUrl=%2f";
});


// Used to open the menu and set appropriate properties when a layer is clicked on map
function openDetails() {
    $("#info").addClass("sidebar-pane-display");
    $("#info").siblings().removeClass("sidebar-pane-display");
    $("#info-button").addClass("active");
    $("#info-button").siblings().removeClass("active");
    $(".sidebar").addClass("open-side");
}

viewer.scene.canvas.addEventListener('mousemove', function (e) {
        var mousePosition = new Cesium.Cartesian2(e.clientX, e.clientY);
        var ellipsoid = viewer.scene.globe.ellipsoid;
        var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);
        if (cartesian) {
            var cartographic = ellipsoid.cartesianToCartographic(cartesian);
            var long = Cesium.Math.toDegrees(cartographic.longitude).toFixed(10);
            var lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(10);
        document.getElementById("coords").innerHTML = "Longtitude: " + long + "\nLatitude: <span class='coord-align'> " + lat + "</span>";
        liveLong = parseFloat(long);
        liveLat = parseFloat(lat);
    } else {
        document.getElementById("coords").innerHTML = "Longtitude: <br/> Latitude: ";
    }
}, false);
