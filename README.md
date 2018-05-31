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

Example file:

Follow the Sheikah Slate;k=0,s=0:Exit the Cave
-p10;k+1:Axe, lizard under rock, dive into rings for korok
Great Plateau Tower:Boko Shield, Tower
The Isolated Plateau:Fall Damage Cancel, talk to the man
Oman Au Shrine;s+1:Run to Oman Au Shrine
-p01;k+1:DLC Ruby, Hyrule Herbs, get korok under teepee
-p02;k+1:Shieldjump to platform, fire and ice arrow chests, magnesis rock into hole
Shrine of Resurrection:Warp to Shrine of Resurrection
Keh Namut Shrine;s+1:Cold Run to Keh Namut
Owa Daim Shrine;s+1:Cold Run to Owa Daim, get extra sledgehammer before entering
Ja Baij Shrine;s+1:Boulder rocket and tree rocket to shrine
Destroy Ganon:Launch from Ja Baij to Temple of Time
-p11;k+1:Climb up ToT to korok
-p18;k+1:Glide south, bomb the wooden barricade open, get stamina shroom, beehive, and bomb arrows<br>go to the hut, korok on top
?lat=0.8488&lng=0.6904:Loot house, get doublet, axe, and stamina shrooms<br>light campfire, make stamina shroom x3 meals, get pot lid, wait until morning
-L08;k+1:jump off plateau, glide to here, cryojumps to get korok
Oman Au Shrine:Ragdoll Reset, Warp to Oman Au

This file is at botw-map-test.txt in the project.