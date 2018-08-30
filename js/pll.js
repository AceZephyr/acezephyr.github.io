var data = {
    algArray: [["l' U R' D2 R U' R' D2 R2 (x')"]
            , ["(x) R2' D2 R U R' D2 R U' R (x')"]
            , ["(y x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)"]
            , ["R' U' F' (R U R' U' R' F R2 U' R' U' R U R') U R"]
            , ["R2 u (R' U R' U' R) u' R2 (y') R' U R", "R2 U R' U R' U' R U' R2 (U' D) R' U R D'", "D' R2 U R' U R' U' R U' R2 (U' D) R' U R"]
            , ["R' U' R (y) R2 u (R' U R U' R) u' R2", "R' U' R (U D') R2 U R' U R U' R U' R2 D", "D R' U' R (U D') R2 U R' U R U' R U' R2"]
            , ["R2 u' (R U' R U R') u R2 (y) R U' R'", "(y2) R2' F2 R U2 R U2' R' F (R U R' U') R' F R2", "R2 U' R U' R U R' U R2 (U D') R U' R' D", "D R2 U' R U' R U R' U R2 (U D') R U' R'"]
            , ["R U R' (y') R2 u' (R U' R' U R') u R2", "R U R' (U' D) R2 U' R U' R' U R' U R2 D'", "D' R U R' (U' D) R2 U' R U' R' U R' U R2"]
            , ["M2' U M2' U2 M2' U M2'", "M2' U' M2' U2' M2' U' M2'"]
            , ["(R' U L') U2 (R U' R') U2 R L", "(y) l' (R' F R F') R U2 r' U r U2 (x')"]
            , ["R U R' F' R U R' U' R' F R2 U' R'"]
            , ["(z) (U R' D R2 U' R D') (U R' D R2 U' R D') (z')", "R U R' U (R U R' F' R U R' U' R' F R2 U' R') U2 R U' R'"]
            , ["(z) (U' R D' R2' U R' D) (U' R D' R2' U R' D) (z')", "(z) (D' R U' R2 D R' U) (D' R U' R2 D R' U) (z')"]
            , ["R U' R' U' R U R D R' U' R D' R' U2 R'", "R U R' F' R U2 R' U2 R' F R U R U2 R'"]
            , ["R' U2 R U2 R' F R U R' U' R' F' R2", "R' U2 R' D' R U' R' D R U R U' R' U' R"]
            , ["R U R' U' R' F R2 U' R' U' R U R' F'"]
            , ["(y2) M2' U M U2 M' U M2'", "M2' U M' U2 M U M2'", "R2 U' R' U' R U R U R U' R", "(y2) R U' R U R U R U' R' U' R2"]
            , ["(y2) M2' U' M U2' M' U' M2'", "M2' U' M' U2' M U' M2'", "R' U R' U' R' U' R' U R U R2", "(y2) R2 U R U R' U' R' U' R' U R'"]
            , ["R' U R' d' R' F' R2 U' R' U R' F R F"]
            , ["(F R U' R' U' R U R' F') (R U R' U') (R' F R F')"]
            , ["M2' U M2' U M' U2 M2' U2 M'", "(y) M2' U' M2' U' M' U2' M2' U2' M'"]],
    nameArray: ["Aa", "Ab", "E", "F", "Ga", "Gb", "Gc", "Gd", "H", "Ja", "Jb", "Na", "Nb", "Ra", "Rb", "T", "Ua", "Ub", "V", "Y", "Z"],
    algPlacement: [{
        container: "edges",
        cases: [17, 18, 9, 21]
	}, {
        container: "adjacent",
        cases: [1, 2, 4, 5, 6, 7, 8, 10, 11, 14, 15, 16]
	}, {
        container: "diagonal",
        cases: [3, 12, 13, 19, 20]
	}],
    puzzleType: 3,
    mask: maskFULL(3),
    imgpath: "/i/3/pll/",
    imgtype: ".png"
}
