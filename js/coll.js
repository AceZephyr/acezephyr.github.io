var data = {
	algArray: [["R U R' U R U2 R'"], ["F' R U2' R' U2 R' F2 R U R U' R' F'", "(y2) R U R' U L' U R U' L U2 R'"], ["R U' L' U R' U' L"], ["L' (R U R' U') L (U2 R U2 R')", "(y2) R2' D' R U2 R' D R2 U R' U R"], ["(y') R U R' U R U' R D R' U' R D' R2'"], ["(y2) R U R' U R2 D R' U2 R D' R2'"], ["R' U' R U' R' U2 R"], ["R U' R' U2 R U' R' U2 R' D' R U R' D R"], ["(y2) R2 D R' U2 R D' R2 U' R U' R'"], ["(y2) L' U R U' L U R'"], ["(y2) R' U' R U' R2' D' R U2 R' D R2"], ["(y2) R2 D R' U R D' R' U R' U' R U' R'"], ["R U2 R2 U' R2 U' R2 U2 R"], ["R (U D') (R U R') D R2 U' R' U' R2 U2 R", "(y) R U2 R' U' F' R U2 R' U' R U' R' F R U' R'"], ["r U' r' U' r U r' U' (x') R2 U' R' U R' (x)"], ["R' U' F' R U R' U' R' F R2 U2 R' U2 R"], ["R U R' U' R' F R2 U R' U' (R U R' U') F'"], ["(y) F (U R U' R') U R U' R2' F' R (U R U' R')"], ["R U R' U R U2 R2' U' R U' R' U2 R"], ["(y2) R2' D' (R U R') D R U R U' R' U' R"], ["R2 D R' U2 R D' R' U2 R'"], ["(y2) R2' D' R U2 R' D R U2 R"], ["(y2) R' (F R U' R' U' R U R' F' R U R' U' R' F R F') R"], ["R' F2 R U2 R U2 R' F2 R U2 R'"], ["(y) R U2 R' U' R U' R2 U2 R U R' U R"], ["(y') R U' R2' D' (r U2 r') D R2 U R'"], ["(y') R' F (R U R' U') R' F' R2 U' R' U2 R"], ["(y') F (R U R' U') R U' R' U' R U R' F'"], ["(r U R' U') (r' F R F')"], ["(y' x') (R U R' D) (R U' R' D') (x)"], ["R' U' R U' (R' U R U') (R' U R U') R' U2 R", "(y) R U2 R' U' (R U R' U') (R U R' U') R U' R'"], ["(y) R' U' R U R' F' R U R' U' R' F R2"], ["F' (r U R' U') r' F R"], ["(y') R U2 R D R' U2 R D' R2"], ["(y') (F R' F' r) (U R U' r')", "(y2 x') (R U' R' D) (R U R' D') (x)"], ["(y2) R' U2 R' D' R U2 R' D R2"], ["R U2 R' U' (R U R' U') R U' R'"], ["F (R U R' U') (R U R' U') (R U R' U') F'"], ["(y) F R U' R' U R U2 R' U' R U R' U' F'"], ["(y') R' F' R U2 R U2' R' F U' R U' R'", "(y') R U R' U R U L' U R' U' L"]]
	, nameArray: ["Sune X", "Sune D", "Sune L", "Sune R", "Sune F", "Sune B", "Anti-Sune X", "Anti-Sune D", "Anti-Sune L", "Anti-Sune R", "Anti-Sune F", "Anti-Sune B", "Pi X", "Pi D", "Pi L", "Pi R", "Pi F", "Pi B", "U X", "U D", "U L", "U R", "U F", "U B", "T X", "T D", "T L", "T R", "T F", "T B", "L X", "L D", "L L", "L R", "L F", "L B", "H X", "H D", "H L/R", "H F/B"]
	, algPlacement: [{
		container: "s"
		, cases: [1, 2, 3, 4, 5, 6]
	}, {
		container: "as"
		, cases: [7, 8, 9, 10, 11, 12]
	}, {
		container: "h"
		, cases: [37, 38, 39, 40]
	}, {
		container: "pi"
		, cases: [13, 14, 15, 16, 17, 18]
	}, {
		container: "u"
		, cases: [19, 20, 21, 22, 23, 24]
	}, {
		container: "t"
		, cases: [25, 26, 27, 28, 29, 30]
	}, {
		container: "l"
		, cases: [31, 32, 33, 34, 35, 36]
	}]
	, puzzleType: 3
	, mask: maskCOLL
	, imgpath: "/i/3/coll/"
	, imgtype: ".svg"
}
$(function () {
	makeAlgs("algs", data);
});