am4core.useTheme(am4themes_animated);var chart=am4core.create("chartdiv",am4charts.ChordDiagram);chart.data=[{from:"A",to:"D",value:10},{from:"B",to:"D",value:8},{from:"B",to:"E",value:4},{from:"B",to:"C",value:2},{from:"C",to:"E",value:14},{from:"E",to:"D",value:8},{from:"C",to:"A",value:4},{from:"G",to:"A",value:7},{from:"D",to:"B",value:1}],chart.dataFields.fromName="from",chart.dataFields.toName="to",chart.dataFields.value="value";var nodeTemplate=chart.nodes.template;nodeTemplate.readerTitle="Click to show/hide or drag to rearrange",nodeTemplate.showSystemTooltip=!0;var nodeLink=chart.links.template,bullet=nodeLink.bullets.push(new am4charts.CircleBullet);function animateBullet(e){var a=3e3*Math.random()+2e3;e.animate([{property:"locationX",from:0,to:1}],a).events.on("animationended",function(e){animateBullet(e.target.object)})}bullet.fillOpacity=1,bullet.circle.radius=5,bullet.locationX=.5,chart.events.on("ready",function(){for(var e=0;e<chart.links.length;e++){animateBullet(chart.links.getIndex(e).bullets.getIndex(0))}});