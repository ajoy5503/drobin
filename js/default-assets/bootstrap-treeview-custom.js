$(function(){var e=[{text:"Parent 1",href:"#parent1",tags:["4"],nodes:[{text:"Child 1",href:"#child1",tags:["2"],nodes:[{text:"Grandchild 1",href:"#grandchild1",tags:["0"]},{text:"Grandchild 2",href:"#grandchild2",tags:["0"]}]},{text:"Child 2",href:"#child2",tags:["0"]}]},{text:"Parent 2",href:"#parent2",tags:["0"]},{text:"Parent 3",href:"#parent3",tags:["0"]},{text:"Parent 4",href:"#parent4",tags:["0"]},{text:"Parent 5",href:"#parent5",tags:["0"]}];$("#treeview1").treeview({selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"ti-plus",collapseIcon:"ti-minus",nodeIcon:"fa fa-folder",data:e}),$("#treeview2").treeview({levels:1,selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"ti-plus",collapseIcon:"ti-minus",nodeIcon:"fa fa-folder",data:e}),$("#treeview3").treeview({levels:99,selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"ti-plus",collapseIcon:"ti-minus",nodeIcon:"fa fa-folder",data:e}),$("#treeview4").treeview({color:"#428bca",selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"ti-plus",collapseIcon:"ti-minus",nodeIcon:"fa fa-folder",data:e}),$("#treeview5").treeview({expandIcon:"ti-angle-right",onhoverColor:"rgba(0, 0, 0, 0.05)",selectedBackColor:"#03a9f3",collapseIcon:"ti-angle-down",nodeIcon:"fa fa-bookmark",data:e}),$("#treeview6").treeview({selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"fa fa-circle",collapseIcon:"fa fa-check-circle-o",nodeIcon:"ti-user",showTags:!0,data:e}),$("#treeview7").treeview({color:"#428bca",showBorder:!1,data:e}),$("#treeview8").treeview({expandIcon:"fa fa-circle",collapseIcon:"fa fa-check-circle-o",nodeIcon:"ti-user",color:"yellow",backColor:"purple",onhoverColor:"orange",borderColor:"red",showBorder:!1,showTags:!0,highlightSelected:!0,selectedColor:"yellow",selectedBackColor:"darkorange",data:e}),$("#treeview9").treeview({expandIcon:"fa fa-circle",collapseIcon:"fa fa-check-circle-o",nodeIcon:"glyphicon glyphicon-user",color:"yellow",backColor:"purple",onhoverColor:"orange",borderColor:"red",showBorder:!1,showTags:!0,highlightSelected:!0,selectedColor:"yellow",selectedBackColor:"darkorange",data:[{text:"Parent 1",tags:["2"],nodes:[{text:"Child 1",tags:["3"],nodes:[{text:"Grandchild 1",tags:["6"]},{text:"Grandchild 2",tags:["3"]}]},{text:"Child 2",tags:["3"]}]},{text:"Parent 2",tags:["7"]},{text:"Parent 3",icon:"glyphicon glyphicon-earphone",href:"#demo",tags:["11"]},{text:"Parent 4",icon:"glyphicon glyphicon-cloud-download",href:"/demo.html",tags:["19"],selected:!0},{text:"Parent 5",icon:"glyphicon glyphicon-certificate",color:"pink",backColor:"red",href:"http://www.tesco.com",tags:["available","0"]}]}),$("#treeview10").treeview({color:"#428bca",enableLinks:!0,data:e});var t=$("#treeview-searchable").treeview({selectedBackColor:"#03a9f3",onhoverColor:"rgba(0, 0, 0, 0.05)",expandIcon:"ti-plus",collapseIcon:"ti-minus",nodeIcon:"fa fa-folder",data:e}),n=function(e){var n=$("#input-search").val(),c={ignoreCase:$("#chk-ignore-case").is(":checked"),exactMatch:$("#chk-exact-match").is(":checked"),revealResults:$("#chk-reveal-results").is(":checked")},o=t.treeview("search",[n,c]),l="<p>"+o.length+" matches found</p>";$.each(o,function(e,t){l+="<p>- "+t.text+"</p>"}),$("#search-output").html(l)};$("#btn-search").on("click",n),$("#input-search").on("keyup",n),$("#btn-clear-search").on("click",function(e){t.treeview("clearSearch"),$("#input-search").val(""),$("#search-output").html("")});var c=function(){return $("#treeview-selectable").treeview({data:e,multiSelect:$("#chk-select-multi").is(":checked"),onNodeSelected:function(e,t){$("#selectable-output").prepend("<p>"+t.text+" was selected</p>")},onNodeUnselected:function(e,t){$("#selectable-output").prepend("<p>"+t.text+" was unselected</p>")}})},o=c(),l=function(){return o.treeview("search",[$("#input-select-node").val(),{ignoreCase:!1,exactMatch:!1}])},a=l();$("#chk-select-multi:checkbox").on("change",function(){console.log("multi-select change"),o=c(),a=l()}),$("#input-select-node").on("keyup",function(e){a=l(),$(".select-node").prop("disabled",!(a.length>=1))}),$("#btn-select-node.select-node").on("click",function(e){o.treeview("selectNode",[a,{silent:$("#chk-select-silent").is(":checked")}])}),$("#btn-unselect-node.select-node").on("click",function(e){o.treeview("unselectNode",[a,{silent:$("#chk-select-silent").is(":checked")}])}),$("#btn-toggle-selected.select-node").on("click",function(e){o.treeview("toggleNodeSelected",[a,{silent:$("#chk-select-silent").is(":checked")}])});var i=$("#treeview-expandible").treeview({data:e,onNodeCollapsed:function(e,t){$("#expandible-output").prepend("<p>"+t.text+" was collapsed</p>")},onNodeExpanded:function(e,t){$("#expandible-output").prepend("<p>"+t.text+" was expanded</p>")}}),d=function(){return i.treeview("search",[$("#input-expand-node").val(),{ignoreCase:!1,exactMatch:!1}])},r=d();$("#input-expand-node").on("keyup",function(e){r=d(),$(".expand-node").prop("disabled",!(r.length>=1))}),$("#btn-expand-node.expand-node").on("click",function(e){var t=$("#select-expand-node-levels").val();i.treeview("expandNode",[r,{levels:t,silent:$("#chk-expand-silent").is(":checked")}])}),$("#btn-collapse-node.expand-node").on("click",function(e){i.treeview("collapseNode",[r,{silent:$("#chk-expand-silent").is(":checked")}])}),$("#btn-toggle-expanded.expand-node").on("click",function(e){i.treeview("toggleNodeExpanded",[r,{silent:$("#chk-expand-silent").is(":checked")}])}),$("#btn-expand-all").on("click",function(e){var t=$("#select-expand-all-levels").val();i.treeview("expandAll",{levels:t,silent:$("#chk-expand-silent").is(":checked")})}),$("#btn-collapse-all").on("click",function(e){i.treeview("collapseAll",{silent:$("#chk-expand-silent").is(":checked")})});var s=$("#treeview-checkable").treeview({data:e,showIcon:!1,showCheckbox:!0,onNodeChecked:function(e,t){$("#checkable-output").prepend("<p>"+t.text+" was checked</p>")},onNodeUnchecked:function(e,t){$("#checkable-output").prepend("<p>"+t.text+" was unchecked</p>")}}),h=function(){return s.treeview("search",[$("#input-check-node").val(),{ignoreCase:!1,exactMatch:!1}])},p=h();$("#input-check-node").on("keyup",function(e){p=h(),$(".check-node").prop("disabled",!(p.length>=1))}),$("#btn-check-node.check-node").on("click",function(e){s.treeview("checkNode",[p,{silent:$("#chk-check-silent").is(":checked")}])}),$("#btn-uncheck-node.check-node").on("click",function(e){s.treeview("uncheckNode",[p,{silent:$("#chk-check-silent").is(":checked")}])}),$("#btn-toggle-checked.check-node").on("click",function(e){s.treeview("toggleNodeChecked",[p,{silent:$("#chk-check-silent").is(":checked")}])}),$("#btn-check-all").on("click",function(e){s.treeview("checkAll",{silent:$("#chk-check-silent").is(":checked")})}),$("#btn-uncheck-all").on("click",function(e){s.treeview("uncheckAll",{silent:$("#chk-check-silent").is(":checked")})});var k=$("#treeview-disabled").treeview({data:e,onNodeDisabled:function(e,t){$("#disabled-output").prepend("<p>"+t.text+" was disabled</p>")},onNodeEnabled:function(e,t){$("#disabled-output").prepend("<p>"+t.text+" was enabled</p>")},onNodeCollapsed:function(e,t){$("#disabled-output").prepend("<p>"+t.text+" was collapsed</p>")},onNodeUnchecked:function(e,t){$("#disabled-output").prepend("<p>"+t.text+" was unchecked</p>")},onNodeUnselected:function(e,t){$("#disabled-output").prepend("<p>"+t.text+" was unselected</p>")}}),u=function(){return k.treeview("search",[$("#input-disable-node").val(),{ignoreCase:!1,exactMatch:!1}])},f=u();$("#input-disable-node").on("keyup",function(e){f=u(),$(".disable-node").prop("disabled",!(f.length>=1))}),$("#btn-disable-node.disable-node").on("click",function(e){k.treeview("disableNode",[f,{silent:$("#chk-disable-silent").is(":checked")}])}),$("#btn-enable-node.disable-node").on("click",function(e){k.treeview("enableNode",[f,{silent:$("#chk-disable-silent").is(":checked")}])}),$("#btn-toggle-disabled.disable-node").on("click",function(e){k.treeview("toggleNodeDisabled",[f,{silent:$("#chk-disable-silent").is(":checked")}])}),$("#btn-disable-all").on("click",function(e){k.treeview("disableAll",{silent:$("#chk-disable-silent").is(":checked")})}),$("#btn-enable-all").on("click",function(e){k.treeview("enableAll",{silent:$("#chk-disable-silent").is(":checked")})});$("#treeview12").treeview({data:'[{"text": "Parent 1","nodes": [{"text": "Child 1","nodes": [{"text": "Grandchild 1"},{"text": "Grandchild 2"}]},{"text": "Child 2"}]},{"text": "Parent 2"},{"text": "Parent 3"},{"text": "Parent 4"},{"text": "Parent 5"}]'})});