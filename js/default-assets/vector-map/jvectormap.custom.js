jQuery("#world-map-markers").vectorMap({map:"world_mill_en",backgroundColor:"#fff",borderColor:"#818181",borderOpacity:.25,borderWidth:1,color:"#f4f3f0",regionStyle:{initial:{fill:"#727cf5"}},markerStyle:{initial:{r:9,fill:"#fff","fill-opacity":1,stroke:"#000","stroke-width":5,"stroke-opacity":.4}},enableZoom:!0,hoverColor:"#0a89c1",markers:[{latLng:[21,78],name:"I Love My World"}],hoverOpacity:null,normalizeFunction:"linear",scaleColors:["#b6d6ff","#005ace"],selectedColor:"#c9dfaf",selectedRegions:[],showTooltip:!0,onRegionClick:function(o,e,r){var l='You clicked "'+r+'" which has the code: '+e.toUpperCase();alert(l)}});