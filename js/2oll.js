var edges = {
	algArray: [["F R U R' U' F'"], ["f R U R' U' f'", "(y2) F U R U' R' F'"], ["F R U R' U' F' f R U R' U' f'"]]
	, nameArray: ["Line", "Wedge", "Dot"]
	, algPlacement: [{
		container: "edges"
		, cases: [1, 2, 3]
	}]
	, puzzleType: 3
	, mask: maskOELL
	, imgpath: "/i/3/2oll/edges/"
	, imgtype: ".svg"
}
var corners = {
	algArray: [["R U R' U R U2 R'"], ["R U2 R' U' R U' R'", "(y') R' U' R U' R' U2 R"], ["R U2 R' U' (R U R' U') R U' R'", "(y) R' U' R U' R' U R U' R' U2 R", "F (R U R' U') (R U R' U') (R U R' U') F'"], ["R U2 R2 U' R2 U' R2 U2 R"], ["r U R' U' r' F R F'"], ["F' r U R' U' r' F R"], ["R2 D R' U2 R D' R' U2 R'", "(y) R U R' U' (R U' R' U2) (R U' R' U2) R U R'"]]
	, nameArray: ["Sune", "Anti-Sune", "Double Sune", "Pi", "Chameleon", "Bowtie", "Headlights"]
	, algPlacement: [{
		container: "corners"
		, cases: [1, 2, 3, 4, 5, 6, 7]
	}]
	, puzzleType: 3
	, mask: maskOLL
	, imgpath: "/i/3/2oll/corners/"
	, imgtype: ".svg"
}
$(function () {
	makeAlgs("edges", edges);
	makeAlgs("corners", corners);
});