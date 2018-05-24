var data = {
	algArray: [["R U2 R2' F R F' U2 R' F R F'", "(y) R U' R2' D' r U' r' D R2 U R'"]
				, ["F R U R' U' F' f R U R' U' f'", "(y') R U' R2' D' r U r' D R2 U R'"]
			   , ["f (R U R' U') f' U' F (R U R' U') F' ", "(y') (M' U) (r' U2 r U) (R' U R2 r')", "(y) r' R2 U R' U r U2 r' U M'"]
				, ["f (R U R' U') f' U F (R U R' U') F' ", "R' U2 (x) R' U R U' (y) R' U' R' U R' F (z')"]
			   , ["r' U2 R U R' U r"], ["r U2 R' U' R U' r'"], ["r U R' U R U2 r'"], ["r' U' R U' R' U2 r"], ["(R U R' U') R' F R2 U R' U' F'", "R' U' R (y) r U' r' U r U r'"], ["R U R' U R' F R F' R U2 R'", "R U R' (y') r' U r U' r' U' r", "R U R' (y) R' F R U' R' F' R"], ["(y2) r' (R2 U R' U R U2 R') U M'", "r U R' U (R' F R F') R U2 r'"], ["M' (R' U' R U' R' U2 R) U' M"], ["r U' r' U' r U r' (y') R' U R", "F U R U' R2' F' R U R U' R'"], ["R' F R U R' F' R (y') R U' R'", "(y2) r' U r U r' U' r (y) R U' R'"], ["r' U' M' U' R U r' U r"], ["r U r' (R U R' U') r U' r'"], ["R U R' U (R' F R F') U2 (R' F R F')", "(y2) F R' F' R2 r' U R U' R' U' M'", "f (R U R' U') (y') r' (R U R' U') R' F R F'"], ["r U R' U R U2 r2' U' R U' R' U2 r", "(y) R U2 R2' F R F' U2 M' U R U' r'"], ["M U R U R' U' M' R' F R F'", "(y) R' U' F U r U2 r' R U R' F' R", "R' U2 F R U R' U' F2 U2 F R", "r' U2 R U R' U r2 U2' R' U' R U' r'"], ["r U R' U' M2' U R U' R' U' M'"], [], [], [], [], [], [], [], ["r U R' U' r' R U R U' R'"], ["r2' D' r U r' D r2 U' r' U' r", "M U (R U R' U') (R' F R F') M'", "(y) (R U R' U') (R U' R' F') U' (F R U R')"], ["r' D' r U' r' D r2 U' r' U r U r'", "(y') r2 D r' U' r D' r2' U r U r'", "(y') F R' F R2 U' R' U' R U R' F2", "(y) f R U R2 U' R' U R2 U' R' f'"], ["R' U' F (U R U' R') F' R"], ["R U B' (U' R' U R) B R'"], ["(R U R' U') (R' F R F')"], ["R U R' U' (x) D' R' U R U' D (x')", "R U R' U' (y') r' U' R U M'"], ["(R U2) (R2' F R F') (R U2 R')"], ["R U R' U R U' R' U' (R' F R F')"], ["(F R U' R') U' (R U R' F')"], ["R' U' R U' R' U R U l U' R' U (x)", "(y2) L' U' L U' L' U L U L F' L' F"], ["L F' (L' U' L U) F U' L'"], ["R' F (R U R' U') F' U R"], ["(R U R' U R U2 R') F (R U R' U') F'"], ["(R' U' R U' R' U2 R) F (R U R' U') F'", "(M U) (F R U R' U' F') M'"], ["R' U' F' U F R", "(y) R' U' (F R' F' R) U R"], ["f (R U R' U') f'", "(y2) F (U R U' R') F'"], ["F (R U R' U') F'"], ["R' U' (R' F R F') U R"], ["F' (L' U' L U) (L' U' L U) F", "R' U' (R' F R F') (R' F R F') U R"], ["F (R U R' U') (R U R' U') F'"], ["r U' r2' U r2 U r2' U' r"], ["r' U r2 U' r2' U' r2 U r'"], ["f (R U R' U') (R U R' U') f'", "(y2) F (U R U' R') (U R U' R') F'", "(y) (R' U2 R U R') (F R' F' R) U R"], ["R U R' U R d' R U' R' F'"], ["r U2 R' U' R U R' U' R U' r'"], ["r' U' R U' R' U R U' R' U2 r"], ["R' F R U R U' R2' F' R2 U' R' U R U R'", "(y) R U2' R2' U' R U' R' U2 F R F'", "(y) r U2' R2' F R F' U2 r' F R F'"], ["r U r' (U R U' R') (U R U' R') r U' r'", "r' U' r (U' R' U R) (U' R' U R) r' U r", "F R U R' U' R F' r U R' U' r'"], ["R U R' U' M' U R U' r'"]]
	, nameArray: ["Dot", "Zamboni", "Anti-Mouse", "Mouse", "Lefty Square", "Righty Square", "Wide Sune", "Wide Anti-Sune", "Kite", "Anti-Kite", "Downstairs", "Upstairs", "Gun", "Anti-Gun", "Squeege, Anti-Etter", "Anti-Squeege, Etter", "Slash, Diagonal", "Crown", "Bunny", "X", "", "", "", "", "", "", "", "Angelfish, Arrowhead", "Awkward Chameleon", "Anti-Awkward Chameleon", "Couch", "Anti-Couch", "Key", "City", "Flying Fish", "M", "Fish", "W", "S", "Z", "Awkward Fish", "Awkward Anti-Fish", "Anti-P", "P", "T", "C", "Akkersdijk", "Anti-Akkersdijk", "Squeezy", "Anti-Squeezy", "Fat Akkersdijk", "Half-Highway", "Wide Double Sune", "Wide Double Back Sune", "Highway", "Sidestreet", "H"]
	, algPlacement: [{
		container: "p"
		, cases: [44, 43, 31, 32]
	}, {
		container: "t"
		, cases: [45, 33]
	}, {
		container: "l"
		, cases: [47, 48, 53, 54, 49, 50]
	}, {
		container: "line"
		, cases: [51, 52, 56, 55]
	}, {
		container: "square"
		, cases: [5, 6]
	}, {
		container: "lightning"
		, cases: [7, 8, 11, 12]
	}, {
		container: "s"
		, cases: [39, 40]
	}, {
		container: "c"
		, cases: [46, 34]
	}, {
		container: "fish"
		, cases: [9, 10, 35, 37]
	}, {
		container: "gun"
		, cases: [13, 14, 15, 16]
	}, {
		container: "corners"
		, cases: [28, 57, 20]
	}, {
		container: "w"
		, cases: [36, 38]
	}, {
		container: "awkward"
		, cases: [29, 30, 41, 42]
	}, {
		container: "dot"
		, cases: [1, 2, 3, 4, 17, 18, 19]
}]
	, puzzleType: 3
	, mask: maskOLL
	, imgpath: "/i/3/oll/"
	, imgtype: ".svg"
}
$(function () {
	makeAlgs("algs", data);
});