# acezephyr.us
it's a website with cube stuff on it. it's not finished.

#BotW Route Mapping Tool

acezephyr.us/s/botw/map.html


upload a file where it says Choose File.

the file consists of instructions, each on a new line.


each instruction looks like this:

\<query\>;\<counter commands\>:\<comment\>

##Query

Only the query is necessary. If there is no counter command exclude the semicolon. If there is no comment exclude the colon.

The query can be any of the following:


\[ZeldaDungeon ID\] No prefix means the element on the map with that ID on ZeldaDungeon is selected.

-\[Korok SSN\] A '-' before a Korok SSN will point to that Korok.

*\[Latitude\]/\[Longitude\] A '*' before a ZeldaDungeon map latitude and longitude separated by a '/' will point the map directly at those coordinates.

?\[raw query\] A URL query directly fed into the ZeldaDungeon map.


##Counter Commands

A counter is a numerical variable that you can do math on on each step. For now, it only supports integers.

A counter doesn't exist until its first instruction.

You can separate counter commands with a comma ","

Counter commands support assignment (c=42), addition (c+42), subtraction (c-42), multiplication (c*42), and division (c/42) for now.

Hitting Backwards will undo the command on that step.


##Comments

These will display on that step. They don't do anything else.

There is an example file at botw-map-test.txt