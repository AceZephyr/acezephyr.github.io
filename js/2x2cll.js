var data = {
    algArray: [["R U R' U R U2 R'"]
            , ["(y2) R U R' U (R' F R F') R U2 R'", "(y') R' F R2 F' R U2 R' U' R2", "(y') R' F R2 F' U' R' U' R2 U R'"]
            , ["R U' R' F R' F' R"]
            , ["(F R' F' R) (U2 R U2' R')"]
            , ["(y2) R U' R U' R' U R' U' (y) R U' R'"]
            , ["(L' U2 L U2) (R U' R' F)"]
            , ["R' U' R U' R' U2 R", " (y) R U2 R' U' R U' R'"]
            , ["(y2) (R' U R U') (R2' F R F') (R U R' U') R"]
            , ["(y2) (R' F R F') (R U R')"]
            , ["(y2) (F' R U R') (U2 R' F2 R)"]
            , ["(y2) (R U2 R' U2) (R' F R F')"]
            , ["(y2) L' U2 L F' R' F2 R U' R' F R F'"]
            , ["F (R U R' U') (R U R' U') F'"]
            , ["(y') R' U' (R' F R F') R U' R' U2 R"]
            , ["(y2) (R' F R F') R U' R' U' R U' R'"]
            , ["(y') R U' R U' R' U R' F R2 F'"]
            , ["R U2 R' U' R U R' U2' (R' F R F')"]
            , ["(y) (F R' F' R) U2 R U' R' U R U2' R'"]
            , ["(y') (R U') (R U') (R U') (R' U) (R' U) R'"]
            , ["(y) F (R U R' U') F'", "(y') F (U R U' R') F'"]
            , ["R2 U R' U' R2 U' (y) L' U2 L", "(y2) R' U (R' F R F') R U2 R' U R"]
            , ["(y2) R U' (R2' F R F') (R U R' U') (R U R')"]
            , ["(y z') U2 R' U' R2 U' R' U' R U' R' (z2)"]
            , ["(y2 x) R U' R U' R' U R' F' R (x2)", "(y) F R' F' R U' R U' R' U2 R U' R'"]
            , ["(y) (R U') (R U') (R U) (R' U) (R' U) R'"]
            , ["(y) F U' R U2 R' U' F2 R U R'"]
            , ["(y) R' U R U2 R2' F R F' R"]
            , ["(y2) L F' (z') R' U R' U' R U' R (x)", "(y2) R' U2 R' x U2 R U2' R' U2 R2 (x')", "(y') F R F' R U R' U R' U' R U' R'", "(y2) R U R' U2 R U R' U R' F R F'", "(y') F R U R' U' R U' R' U' R U R' F'"]
            , ["(R U R' U') (R' F R F')"]
            , ["(y2) R' F' R (U R U' R') F"]
            , ["(y) R U2 R' U' (R U R' U') (R U R' U') R U' R'"]
            , ["(y') R U2' R2' F R F' R U2' R'"]
            , ["(y') (F R U' R') U' (R U R' F')"]
            , ["(y2) R' F' (R U R' U') R' F R2 U' R' U2 R", " (y') R' U' R U2 R' F R' F' R U' R"]
            , ["(y') (F R' F' R) (U R U' R')"]
            , ["(x') R' U2 R' U' R U2 R' F R2 (x)"]
            , ["R2 U2 R U2 R2"]
            , ["(x') U2 R U2' R2' F2 R U2' (x)"]
            , ["(y) F R2 U' R2' U' R2 U R2' F'"]
            , ["R U' R' F U2' R2' F R U' R"]]
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