var commandMap = new Map();
commandMap.set("+", function (a, b, f) {
    if (f) return a + b;
    return a - b;
});
commandMap.set("-", function (a, b, f) {
    return (f ? a - b : a + b);
    if (f) return a - b;
    return a + b;
});
commandMap.set("*", function (a, b, f) {
    if (f) return a * b;
    return a / b;
});
commandMap.set("/", function (a, b, f) {
    if (f) return a / b;
    return a * b;
});
commandMap.set("=", function (a, b, f) {
    return b;
});
var counterMap = new Map();
var objList = [];
var currIndex = 0;

function onFile() {
    var files = document.getElementById('botw-fileIn').files;
    if (files.length !== 1) return;
    objList = [];
    currIndex = 0;
    var navigator = new LineNavigator(files[0]);
    var startIndex = 0;
    navigator.readSomeLines(0, function readLine(err, index, lines, isEoF, progress) {
        if (err) throw err;
        for (var i = 0; i < lines.length; i++) {
            var lineIndex = index + i;
            var line = lines[i];

            var comment = "";
            if (line.indexOf(":") !== -1) {
                comment = line.substring(line.indexOf(":") + 1, line.length);
                line = line.substring(0, line.indexOf(":"));
            }
            var cmdArr = [];
            if (line.indexOf(";") !== -1) {
                var a = line.substring(line.indexOf(";") + 1, line.length).split(",");
                line = line.substring(0, line.indexOf(";"));
                for (var j = 0; j < a.length; j++) {
                    commandMap.forEach(function (func, key, map) {
                        if (a[j].indexOf(key) !== -1) {
                            var variable = a[j].substring(0, a[j].indexOf(key));
                            var value = parseInt(a[j].substring(a[j].indexOf(key) + 1, a[j].length), 10);
                            cmdArr[j] = {
                                variable: variable,
                                funct: func,
                                value: value
                            };
                            return;
                        }
                    });
                }
            }
            var query = "";
            if (line.startsWith("-") && line.length == 4) {
                query = "id=Seed" + korokMap.get(line.substr(1, 3).toUpperCase());
            } else if (line.startsWith("*") && line.charAt(1) != "*") {
                var a = line.substr(1, line.length - 1).split("/");
                query = "lat=" + a[0] + "&lng=" + a[1];
            } else if (line.startsWith("?")) {
                query = line.substr(1, line.length - 1);
            } else {
                query = "id=" + line;
            }

            objList[lineIndex] = {
                comment: comment,
                cmds: cmdArr,
                query: query
            };
            if (lineIndex == 0) {
                display({
                    comment: comment,
                    cmds: cmdArr,
                    query: query
                });
                for (var j = 0; j < cmdArr.length; j++) {
                    executeCommand(cmdArr[j], true);
                }
            }
        }
        if (isEoF) return;
        navigator.readSomeLines(index + lines.length, readLine);
    });
    console.log(objList);
}

function forwards() {
    if (currIndex < objList.length - 1) {
        currIndex++;
        exec(currIndex, true);
        display();
    }
}

function backwards() {
    if (currIndex > 0) {
        exec(currIndex, false);
        currIndex--;
        display();
    }
}

function display(x = objList[currIndex]) {
    $("#botw-comment").html(x.comment);
    $("iframe").attr("src", "https://www.zeldadungeon.net/breath-of-the-wild-interactive-map/?" + x.query);
}

function exec(position, forwards) {
    var len = objList[position].cmds.length;
    for (var i = 0; i < len; i++) {
        executeCommand(objList[position].cmds[forwards ? i : (len - i) - 1], forwards);
    }
}

function executeCommand(command, forwards) {
    if (!counterMap.has(command.variable)) {
        addVariable(command.variable);
    }
    var val = command.funct.apply(this, [
        parseInt(counterMap.get(command.variable)),
        command.value,
        forwards
    ]);
    setVariable(command.variable, val);
}

function addVariable(name) {
    counterMap.set(name, 0);
    $("#botw-counters").append("<p class='botw-counter' id='botw-counter-" + name + "'></p>");
}

function setVariable(name, value) {
    $("#botw-counters #botw-counter-" + name).html(name + ": " + value + "");
    counterMap.set(name, value);
}
