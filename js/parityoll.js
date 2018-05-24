var mainContainer = "algs";
var algArray = [["R U R' U R U2 R'"], ["R' U' R U' R' U2 R", "(y) R U2 R' U' R U' R'"], ["F (R U R' U') F'", "(y2) F (U R U' R') F'"], ["(R U R' U') (R' F R F')"], ["F R U' R' U' R U R' F'", "(y) F' R U R' U' R' F R"], ["F (R U R' U') (R U R' U') F'"], ["R2 U2 R U2 R2"]];
var nameArray = ["Sune", "Anti-<br>Sune", "U", "T", "L", "Pi", "H"];
var algPlacement = [{
	container: "notpure",
	cases: [1, 2]
	}, {
	container: "pure",
	cases: [1, 2, 3, 4, 5, 6, 7]
	}];
var puzzleType = 4;
var mask = maskFULL(4);
var imgpath = "/i/4/parity/oll/";
var imgtype = ".svg";