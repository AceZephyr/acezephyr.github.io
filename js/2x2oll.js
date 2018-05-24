var data = {
    algArray: [["R U R' U R U2 R'"]
            , ["R' U' R U' R' U2 R"]
            , ["R2 U2 R U2 R2"]
            , ["F (R U R' U') (R U R' U') F'", "(U') R' F R2 U' R2' F R*"]
            , ["F (R U R' U') F'"]
            , ["F R U' R' U' R U R' F'"]
            , ["(R U R' U') (R' F R F')"]]
    , nameArray: ["Sune", "Anti-Sune", "H", "Pi", "U", "L", "T"]
    , algPlacement: [{
        container: "oll"
        , cases: [1, 2, 3, 4, 5, 6, 7]
	}]
    , puzzleType: 2
    , mask: mask2OLL
    , imgpath: "/i/2/oll/"
    , imgtype: ".svg"
};
$(function () {
    makeAlgs("algs", data);
});