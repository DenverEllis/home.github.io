# Table of Contents

1.  [To Do List](#orgef8b99b)
    1.  [Make Character Sheets](#org8249896)
    2.  [Figure out functions states stuff](#orgb3d8553)
    3.  [Story](#org500df98)
    4.  [Map](#org4fe0b4a)
        1.  [Sections:](#org1cf0d69)
    5.  [Web Stuff](#orgb2768e5)
        1.  [Java Script Stuff](#org1b3b1ab)
        2.  [Styling](#org373ccae)
        3.  [Index Page](#orgf89d5f1)
        4.  [FTP Things](#orgcdef1a2)
        5.  [Cards](#org979b37d)
2.  [Stats and Stuff](#org7635e44)
    1.  [Health](#org960da56)
    2.  [Stamina](#org3a817d5)
    3.  [Cards](#org324c6e4)
        1.  [Chance](#orgfa4eb09)
        2.  [Resource](#orgd3784ed)
3.  [Diversifyers](#org9a49f19)
    1.  [Confirmed](#org3cd0b90)
    2.  [Considering](#org0601ab5)
4.  [Site Map:](#org290a1fc)
5.  [Implementation notes](#org63f0be9)
    1.  [Variables](#orge4f28fa)


<a id="orgef8b99b"></a>

# To Do List


<a id="org8249896"></a>

## DONE Make Character Sheets


<a id="orgb3d8553"></a>

## DONE Figure out functions states stuff


<a id="org500df98"></a>

## TODO Story

Players ship wreck, separated to different sections of the map. They meet in
the middle at a light house or temple in the middle of the map. Survival is
the goal as they try to escape&#x2026;.


<a id="org4fe0b4a"></a>

## TODO Map


<a id="org1cf0d69"></a>

### Sections:

-   Forest
-   Lagoon
-   Swamp
-   Desert


<a id="orgb2768e5"></a>

## TODO Web Stuff


<a id="org1b3b1ab"></a>

### TODO Java Script Stuff

-   [ ] Card functions
-   [ ] Die functions
-   [ ] Health and stamina functions
-   [ ] Game page functionality


<a id="org373ccae"></a>

### TODO Styling

-   [ ] Game page styling
-   [ ]Index page styling
-   [ ] FTP styling


<a id="orgf89d5f1"></a>

### TODO Index Page


<a id="orgcdef1a2"></a>

### TODO FTP Things


<a id="org979b37d"></a>

### TODO Cards

-   [ ] Design
-   [ ] Style
-   [ ] Animate
-   [ ] Program


<a id="org7635e44"></a>

# Stats and Stuff


<a id="org960da56"></a>

## Health

-   Start 20/20
-   Healing with resources like food
-   When empty stuck until party member can assist
    -   Party member assist grants like +2/20
        -   Mercy 3 turns
-   Health is lost by events and residual effects.
    -   Events and effects by spaces and trouble cards.


<a id="org3a817d5"></a>

## Stamina

-   Start 40/40
-   Decreases with each turns
    -   When empty, lose a turn.
        -   Small amount of stamina is restored on a lost turn
    -   can be replenished by skipping a turn to rest
        -   This allows a full restore, but running out and losing a turn does not.
    -   Can be replenished with food or other items


<a id="org324c6e4"></a>

## Cards


<a id="orgfa4eb09"></a>

### Chance

1.  Good

    -   Find fountain of youth
        -   Full stamina restore
    -   Find Holy Grail
        -   Full health restore
    -   Find corpse
        -   +1 resource
    -   Find box
        -   +2 resource
    -   Find knife: w
        -   pull knife from weapon pool
    -   Find gun: w
        -   pull gun from weapon pool
    -   Find spoon: w
        -   pull spoon from weapon pool
    -   Find magic elixer
        -   +(1/2) total health
        -   +(1/2) total stamina
    -   Find Excalibur: w
        -   Pull Excalibur from weapon pool.
    -   Find abandoned campsite
        -   enables the ability to cook 1 food item of choosing

2.  Bad

    -   Swarm of bees
        -   minus 1 hp
    -   Bear attack
        -   No weapon equipped
            -   minus 4 hp
        -   Weapon equipped
            -   minus 2 hp
            -   plus 1 meat
    -   Tiger attack
        -   No weapon equipped
            -   minus 4 hp
        -   Weapon equipped
            -   minus 2 hp
            -   plus 1 meat
    -   Stub toe
        -   minus 1 health
    -   Poison Ivy
        -   effect over time
        -   initial damage of minus 1 hp
        -   minus 1 hp per turn
            -   Max of three turns after initial
        -   Can not be healed
    -   Snake Bite
        -   effect over time
        -   initial damage of minus 2 hp
        -   minus 2 hp per turn
            -   max of three turns after initial
        -   Can be healed with medicine, but does not negate the initial damage
    -   Quick sand
        -   Lose a turn
    -   Stepped on a sea urchin
        -   over time effect
        -   initial damage of minus 2 hp
        -   minus 2 hp per turn
            -   max of 3 turns after initial
        -   Can be healed with medicine, but does not negate the initial damage
    -   Wasp sting
        -   minus 2hp
    -   Common cold
        -   effect over time
        -   minus 1hp per turn
            -   max of 2 turns
        -   Can be healed with medicine.
    -   Coconut falls on your head
        -   minus 2hp
        -   lose a turn
    -   Fall in a pit
        -   lose a turn


<a id="orgd3784ed"></a>

### Resource

-   Coconut
    -   +(1/4) total stamina
-   Banana
    -   +(1/2) total stamina
-   Fish

1.  Weapon Pool (triggered by chance card)

    -   Find knife
    -   Find gun
    -   Find spoon


<a id="org9a49f19"></a>

# Diversifyers


<a id="org3cd0b90"></a>

## Confirmed

-   Puzzle design challenge: Make your game around, or inspired by a real world
    toy you have played with in your lifetime. (For more information, see here)
-   Use the Source, Luke: Use one or more open source tools, game engines or
    libraries in your game (and thank them in in the Technology Notes section
    on the submission page).
-   Mixed Media - Make a physical game that utilises computer code.
-   Under the Hood - Make some or all of the code visible in your game.
-   In a webpage - Your gameplay is hidden in a seemingly normal web page.
-   Happy Anniversary - Your game should incorporate 2018's theme
    (Transmission) as well as 2019's theme.


<a id="org0601ab5"></a>

## Considering

-   Forgive and Fortify: Create a game that explores how forgiveness
    strengthens those who practice it. (Forgiveness kits in English, Spanish,
    Chinese and Arabic)
-   Language-Independence: Create a game that can be understood regardless of
    which language the player speaks
-   Celestial - An option to adjust game speed is included
-   Assetless - Create all visuals programmatically or in the scene editor, and
    avoid any importing of image files, sprite sheets, 3D models etc.
-   The Guide I was looking for - Your game has a supplementary guide, using a
    different medium than the game itself, that players must refer to to beat the game.


<a id="org290a1fc"></a>

# Site Map:

-   index.html
    -   Download Page
        -   Downloadable Files:
            -   The game map (preferably as a pdf)
            -   Character 3D Models (probably as an STL) (x4)
            -   Non-3d characters (probs as a pdf) (x4)
    -   Game Page
        -   Contains:
            -   Instructions through an alert


<a id="org63f0be9"></a>

# Implementation notes

-   Function dictating over time effects
-   Individual card function that calls effect functions
-   subtract/add health function
-   subtract/add stamina function
-   Lose turn state change function
-   start of a turn, check conditions and display message accordingly
-   Buttons call a dice roll function (and a card draw or maybe auto)
-   Card effects show a JS alert of the effects


<a id="orge4f28fa"></a>

## Variables

-   Lose a turn
-   Incapacitation
-   Health
-   Stamina
