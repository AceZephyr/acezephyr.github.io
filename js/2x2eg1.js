var data = {
    algArray: [["(U') F' L U2' F2 R U' (x')", "[L] (U2) R' F R2 F' R2 U2 R", "(z') R' U' R U2 x' U2 R U' (z)"] //s
            , ["(U2) F R2 U' R2' F U' F2 U' R", "(R U R') F2 U F (R U R')", "(U') R' F R2 U' R2 F U' R U' R' U2 R"]
            , ["F' U R U' R' U F (R U R')", "(U2) F U' R U2 R' F2 R' F R"]
            , ["(U2) F R' F' R U R' F' R2 U R'", "(U') R' F R U2 R U' R2 F2 R F'"]
            , ["(U) (R U' R' U) (R U' R' U) F (R U' R')"]
            , ["R' F R2 U' R' U (R U' R' F)"]
            , ["[R] R U' B2 R2' U' F (z')", "(U) R' F R2 U R' F' U' R U' R'", "(U') B U' R2 F2 U' F (z2)"] //as
            , ["(U) R U' R' F' U' F2 R U' R'", "R U' F2 R U2 R U' F"]
            , ["R U' R' F' U' R U R' U' F"]
            , ["(U') R U' R' U2 R' F R2 U2 R' F"]
            , ["(U2) R U' R2 F R U' R' F R F'"]
            , ["(U') R U R' F' U' R U R' U' R U R'"]
            , ["(U2) F2 (R U R' U2') (R U R' U') F"]
            , ["(U') R' F R2 U' R2' F R", "(U') R U' R2' F R2 U' R'"], [], [], [], []]
    , nameArray: ["Sune X", "Sune D", "Sune L", "Sune R", "Sune F", "Sune B", "Anti-Sune X", "Anti-Sune D", "Anti-Sune L", "Anti-Sune R", "Anti-Sune F", "Anti-Sune B", "Pi X", "Pi D", "Pi L", "Pi R", "Pi F", "Pi B", "U X", "U D", "U L", "U R", "U F", "U B", "T X", "T D", "T L", "T R", "T F", "T B", "L X", "L D", "L L", "L R", "L F", "L B", "H X", "H D", "H L/R", "H F/B"]
    , algPlacement: [{
        container: "s"
        , cases: [1, 2, 3, 4, 5, 6]
	}, {
        container: "as"
        , cases: [7, 8, 9, 10, 11, 12]
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
	}, {
        container: "h"
        , cases: [37, 38, 39, 40]
	}]
    , puzzleType: 2
    , mask: maskFULL(2)
    , imgpath: "/i/2/cll/"
    , imgtype: ".svg"
};
$(function () {
    makeAlgs("algs", data);
});