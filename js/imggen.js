var algs = ["R U R' U R U2 R' U2", "R' U' R U' R' U2 R U2", "R U2 R2 U' R2 U' R2 U2 R U2", "R U R' U R U2 R2 U' R U' R' U2 R", "U R U2 R' U' R U' R2 U2 R U R' U R U'", "R' U' R U' R' U R U' R' U R U' R' U2 R U2", "R U2 R' U' R U R' U' R U' R'"];
var d = " F R U' R' U' R U R' F' R U R' U' R' F R F'";
var r = "R U R' U' R' F R2 U' R' U' R U R' F'";
var l = "U2 " + r + " U2";
var f = "U' " + r + " U";
var b = "U " + r + " U'";

function getImg(alg) {
	return "<img src='http://cube.crider.co.uk/visualcube.php?fmt=svg&size=150&pzl=2&bg=t&view=plan&stage=coll&case=" + alg.replace(/ /g, "").replace(/'/g, "%27") + "'>";
}
$(function () {
	var list = $("<ul></ul>")
	for (var i = 0; i < algs.length; i++) {
		list.append($("<li></li>").html(getImg(algs[i]) + algs[i]));
		list.append($("<li></li>").html(getImg(algs[i] + d)));
		list.append($("<li></li>").html(getImg(algs[i] + l)));
		list.append($("<li></li>").html(getImg(algs[i] + r)));
		list.append($("<li></li>").html(getImg(algs[i] + f)));
		list.append($("<li></li>").html(getImg(algs[i] + b)));
	}
	$("div#genpos").html(list);
});