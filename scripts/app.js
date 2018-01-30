var viewer;
var activeBaseImagery;
var imageryArc;
var imageryBing;
var imageryOSM;
var terrainDefault;
var liveLat;
var liveLong;
var dataCollection = {};
var layerColours = {
    Agricultural_Land_Classification: Cesium.Color.fromRandom(), //by grade
    Ancient_Woodland: Cesium.Color.fromBytes(161, 243, 158, 150),
    Areas_of_Outstanding_Natural_Beauty: Cesium.Color.fromRandom(), // by field
    Battlefields: Cesium.Color.fromBytes(139, 69, 19, 150),
    Country_Parks: Cesium.Color.fromBytes(253, 193, 52, 150),
    Flood_Zone_2: Cesium.Color.fromBytes(0, 255, 255, 150),
    Flood_Zone_3: Cesium.Color.fromBytes(173, 216, 230, 150),
    Listed_Buildings: Cesium.Color.ORANGE,
    Local_Nature_Reserves: Cesium.Color.fromBytes(27, 97, 5, 150),
   // National_Character_Areas: Cesium.Color.fromRandom(), // random colour
    Registered_Parks_and_Gardens: Cesium.Color.fromBytes(45, 161, 41, 150),
    Scheduled_Monuments: Cesium.Color.fromBytes(102, 51, 153, 150),
    Sites_of_Special_Scientific_Interest: Cesium.Color.fromBytes(255, 105, 180, 150),
    Special_Areas_of_Conservation: Cesium.Color.fromBytes(0, 67, 144, 150),
};


(function () {
    //'use strict';

    viewer = new Cesium.Viewer('cesiumContainer', {
        selectionIndicator: true,
        sceneModePicker: true,
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
    //viewer.terrainProvider = terrainDefault;


    // Navigation Controls
    var cesiumNavigation = viewer.cesiumNavigation;
    var options = {
        defaultResetView: Cesium.Rectangle.fromDegrees(71, 3, 90, 14),
        enableCompass: true,
        enableZoomControls: true,
        enableDistanceLegend: true,
        enableCompassOuterRing: true,
    };
    viewer.extend(Cesium.viewerCesiumNavigationMixin, options);

     // Camera Start Position
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-1.804, 51.585 , 10000),
        maximumHeight: 10000.0,
        duration: 1.0,
    });

    // feature click event
    handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction(function (click) {
        var pickedObject = viewer.scene.pick(click.position);
        if (Cesium.defined(pickedObject) && (pickedObject != undefined)) {
            console.log(pickedObject.id.properties);

            $('#div-details').empty();
            $.each(pickedObject.id.properties._propertyNames, function (i, p) {
                $('#div-details').append('<p class="lead"><strong>' + pickedObject.id.properties._propertyNames[i] + '</strong>: ' + pickedObject.id.properties[pickedObject.id.properties._propertyNames[i]] + '</p>');
            })
            openDetails();
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    

}());

function identifyLayerName(e) {
    var layername;
    // getting the label text only (not the checkbox) to get layer name
    if (e.target.type == "checkbox") {
        layername = e.target.parentElement.textContent.replace(/ /g, "_")
    }
    else {
        layername = e.target.textContent.replace(/ /g, "_")
    }
    return layername
}

// on click polygon layer
$('.layer-labels').click(function (e) {
    var layername = identifyLayerName(e)
    var colour = layerColours[layername];

    // add layer if checkbox just got ticked
    if ($(event.target).is(":checked")) {
        Cesium.GeoJsonDataSource.load('data/' + layername + '.geojson', {
            stroke: Cesium.Color.WHITE,
            fill: colour,
            strokeWidth: 3,
            clampToGround: true
        }).then(function (source) {
            dataCollection[layername] = source
            viewer.dataSources.add(dataCollection[layername]);

        })
    }

    // remove layer if tickbox just got unticked
    else {
        viewer.dataSources.remove(dataCollection[layername], true);
    }

});


// on click polygon layer - random color features
$('.layer-labels-random').click(function (e) {
    var layername = identifyLayerName(e)

    // add layer if checkbox just got ticked
    if ($(event.target).is(":checked")) {
        Cesium.GeoJsonDataSource.load('data/' + layername + '.geojson', {
            stroke: Cesium.Color.WHITE,
            fill:  Cesium.Color.WHITE,
            strokeWidth: 3,
            clampToGround: true
        }).then(function (source) {

            console.log(source.properties);

            //source.entities.values[0].polygon.fill = Cesium.Color.WHITE;
            //source.entities.values[1].polygon.fill = Cesium.Color.BLUE;
            //source.entities.values[2].polygon.fill = Cesium.Color.GREEN;
            //source.entities.values[3].polygon.fill = Cesium.Color.RED;
            //source.entities.values[4].polygon.fill = Cesium.Color.ORANGE;



            dataCollection[layername] = source
            viewer.dataSources.add(dataCollection[layername]);
        })
    }

    // remove layer if tickbox just got unticked
    else {
       viewer.dataSources.remove(dataCollection[layername], true);
    }

        

});

//on click point layer
$('.layer-labels-points').click(function (e) {
    var layername = identifyLayerName(e)
    var colour = layerColours[layername];

    // add layer if checkbox just got ticked
    if ($(event.target).is(":checked")) {
        Cesium.GeoJsonDataSource.load('data/' + layername + '.geojson', {
            markerColor : colour,
            strokeWidth: 3,
            markerSymbol: '',
            markerSize: 24,
        }).then(function (source) {
            dataCollection[layername] = source
            viewer.dataSources.add(dataCollection[layername]);
        })
    }
    // remove layer if tickbox just got unticked
    else {
        viewer.dataSources.remove(dataCollection[layername], true);
    }
});

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
