var corners = {
    algArray: [["(y') (R' U L') U2 (R U' R') U2 (R L)", "(y) l' U R' (D2) R U' R' (D2) R2 (x')", "(R U R' U') R' F R2 U' R' U' R U R' F'", "(R U R' F') (R U R' U') R' F R2 U' R'"]
               , ["(R' U L') U2 (R U' L) (R' U L') U2 (R U' L)", "(F R U' R' U' R U R' F') (R U R' U') (R' F R F')", "(x') (R U' R' D) (R U R' D') (R U R' D) (R U' R' D') (x)"]]
    , nameArray: ["Adjacent", "Diagonal"]
    , algPlacement: [{
        container: "corners"
        , cases: [1, 2]
	}]
    , puzzleType: 3
    , mask: maskCOLL
    , imgpath: "/i/3/2pll/corners/"
    , imgtype: ".svg"
}
$(function () {
    makeAlgs("corners", corners);
});