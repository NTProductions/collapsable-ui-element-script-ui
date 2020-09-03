var window = new Window("palette", "Collapsable UI Element", undefined);
window.orientation = "column";
var groupOne = window.add("group", undefined, "groupOne");
groupOne.orientation = "column";
var button = groupOne.add("button", undefined, "Collapse!");
var textOne = groupOne.add("statictext", undefined, "Some sample text 1");
var textTwo = groupOne.add("statictext", undefined, "Some sample text 2");

var collapsed = false;

button.onClick = function() {
        if(collapsed) {
            groupOne.size = [102, 73];
            window.size = [132, 103];
            collapsed = false;
            } else {
            groupOne.size = [102, 25];  
            window.size = [132, 50];
            collapsed = true;
                }
    }

window.center();
window.show();

$.writeln(window.size);
//$.writeln(groupOne.size);