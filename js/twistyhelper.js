function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var mask2OLL = "wwwwoossggssyyyyrrssbbss";
var maskCross = "swswwwswssossosssssgssgssssssssysssssrssrsssssbssbssss";
var maskF2L = "wwwwwwwwwoooooosssggggggsssssssyssssrrrrrrsssbbbbbbsss";
var maskF2LOneSlot = "wwwwwwwwwooloolssslgglggsssssssysssslrllrlssslbllblsss";
var maskOELL = "wwwwwwwwwoooooosssggggggssssysyyysysrrrrrrsssbbbbbbsss";
var maskOLL = "wwwwwwwwwoooooosssggggggsssyyyyyyyyyrrrrrrsssbbbbbbsss";
var maskCOLL = "wwwwwwwwwooooooosogggggggsgyyyyyyyyyrrrrrrrsrbbbbbbbsb";
var madeWindowYet = false;
var display;
var rawDisplay;
var fullscreen = false;

function maskFULL(size) {
    var str = "";
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < size * size; j++) {
            str += (["w", "o", "g", "y", "r", "b"][i]);
        }
    }
    return str;
}

function rotate(string, colors) {
    var arr = string.split("");
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < colors.length; j++) {
            if (arr[i] == ["w", "o", "g", "y", "r", "b"][j]) {
                arr[i] = colors[j];
                break;
            }
        }
    }
    return arr.join("");
}

function init(data) {
    if (!madeWindowYet) {
        $("#container").append("<div id='algwindow'><div id='windowdisplay'></div></div>");
        rawDisplay = TTk.AlgorithmPuzzle(data.puzzleType).size({
            width: 200
            , height: 200
        }).fc(rotate(data.mask, getCookie("colors"))).showAlg(true).hoverButtons(false).hoverAlg(false);
        display = rawDisplay('#windowdisplay');
        madeWindowYet = true;
    }
}

function makeAlgs(divID, data) {
    init(data);
    var scheme = getCookie("colors") == null || getCookie("colors") == "" ? "wogyrb" : getCookie("colors");
    var mask = rotate(data.mask, scheme.split(""));
    var algPlacement = data.algPlacement;
    var algArray = data.algArray;
    var imgpath = data.imgpath;
    var imgtype = data.imgtype;
    var nameArray = data.nameArray;
    var div = $("div#" + divID);
    for (var i = 0; i < algPlacement.length; i++) {
        var table = $("<table></table>").addClass("algs").attr("id", algPlacement[i].container);
        //loop through cases in each group
        for (var j = 0; j < algPlacement[i].cases.length; j++) {
            var caseid = algPlacement[i].cases[j];
            var row = $("<tr></tr>");
            var col0 = $("<td class='casename'></td>");
            var name = $("<p></p>").html(caseid + ") " + nameArray[caseid - 1]).addClass("bold");
            var col1 = $("<td></td>");
            var img = $("<img>").attr("src", imgpath + caseid + imgtype);
            var col2 = $("<td></td>").addClass("algCol");
            var ul = $("<ul></ul>");
            for (var k = 0; k < algArray[caseid - 1].length; k++) {
                var alg = algArray[caseid - 1][k].trim();
                var li = $("<li></li>");
                var p = $("<p></p>").text(alg).addClass("alg").attr("id", algPlacement[i].container + "_" + caseid + "_" + k).click(function () {
                    changeCubeAnimation($(this).text().replace(/\(|\)|\*|\[.\]./g, ""), mask, data.puzzleType);
                });
                li.append(p);
                ul.append(li);
            }
            col0.append(name);
            row.append(col0);
            col1.append(img);
            row.append(col1);
            col2.append(ul);
            row.append(col2);
            table.append(row);
        }
        div.append(table);
    }
}

function changeCubeAnimation(newAlg, mask, puzzleType) {
    $("#windowdisplay").html("");
    display = TTk.AlgorithmPuzzle(puzzleType).case(newAlg).size({
        width: 200
        , height: 200
    }).fc(mask).showAlg(true).hoverButtons(false).hoverAlg(false)('#windowdisplay');
}
$(function () {
    $("#container").addClass("algwindowExists");
});