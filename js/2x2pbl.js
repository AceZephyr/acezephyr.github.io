var data = {
	algArray: [["R2 U' B2 U2 R2 U' R2", "(y2) R2 U' R2 U2 (y) R2 U' R2"], ["R U' R F2 R' U R'"], ["(y) R2 U' R2' U R2 U' R2' U R2"], ["R2 F2 R2"], ["(R U R' U') R' F R2 U' R' U' (R U R' F')"], ["(F R U' R') U' (R U R' F') (R U R' U') (R' F R F')"]]
	, nameArray: ["Adj-Adj", "Adj-Diag", "Diag-Adj", "Diag-Diag", "Adjacent", "Diagonal"]
	, algPlacement: [{
		container: "pbl"
		, cases: [1, 2, 3, 4, 5, 6]
	}]
	, puzzleType: 2
	, mask: maskFULL(2)
	, imgpath: "/i/2/pbl/"
	, imgtype: ".svg"
};
$(function () {
	makeAlgs("algs", data);
});