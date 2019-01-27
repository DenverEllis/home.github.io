//-------------------------------------------------------------------------//
//Classes
//-------------------------------------------------------------------------//



/** Character Object Class
 * @param name: sets the name of the character
 * @param hp: default hp is 20
 * @param sp: default sp is 40
 * @param loseTurn: default false, if true character loses turn and then var is
 *                  set back to false
 * @param disabled: default false, is true iff character's hp is zero and team
 *                  member is needed to return false. While true, character
 *                  loses turn.
 */
class Character {
    constructor(name) {
        this.name = name;
        hp = 20;
        sp = 40;
        loseTurn = false;
        disabled = false;
        weapon = false;
    }

    //getters, retrun value of the property
    get name() {
        return this._name;
    }

    get hp() {
        return this._hp;
    }

    get sp() {
        return this._sp;
    }

    get loseTurn() {
        return this._loseTurn;
    }

    get disabled() {
        return this._disabled;
    }

    //setters, change and return value of property
    set hp(cHP) {
        tHP = this._hp;
        this._hp = tHP + cHP;
        if (this._hp > 20) {
            this._hp = 20;
        }
        return this._hp;
    }

    set sp(cSP) {
        tSP = this._sp;
        this._sp = tSP + cSP;
        if (this._sp > 40) {
            this._sp = 40;
        }
        return this._sp; //should always be int
    }

    set loseTurn(value) {
        return this._loseTurn = value; //should always be bool
    }

    set disabled(value) {
        return this._disabled = value //should always be bool
    }
}

/** Chance Card Object Class
 * @param cHP: Integer, Change Health, the number to be passed into the health function
 * @param cSP: Integer,Change Stamina, the number to be passed into the stamina function
 * @param loseTurn: Boolean, gets passed into the state change function.
 * @param effect: String, gets passed into the effectot function.
 * @param turnCount: detemines the length of the effect, gets passed into the effectot function
 * @param resource: determines resource pool to take from, if any. Must be either "event", "resource", or "none"
 * @param resourceAmount: Amount to pull from resource pool. Only nonzero if pulling from "resource"
 */
class ChanceCard {
    constructor(name, cHP, cSP, loseTurn, effect, turnCount, resource, resourceAmount) {
        this.name = name;
        this.cHP = cHP;
        this.cSP = cSP;
        this.loseTurn = loseTurn;
        this.turnCount = turnCount;
        this.effect = effect;
        this.resource = resource;
    }
}

class Resource {
    constructor(name, cHP, cSP) {
        this.name = name;
        this.cHP = cHP;
        this.cSP = cSP;
    }
}


//-------------------------------------------------------------------------//
//Objects
//-------------------------------------------------------------------------//
// Players
ryan = new Character("Ryan");
cecily = new Character("Cecily");
denver = new Character("Denver");
sunny = new Character("Sunny");

/*
class ChanceCard {
    constructor(name, cHP, cSP, loseTurn, effect, turnCount, resource) */
//Chance Cards
findFountainOfYouth = new ChanceCard("Found Fountain Of Youth", 0, 40, false, "none", 0, "none", 0);
findHolyGrail = new ChanceCard("Found Holy Grail", 20, 0, false, "none", 0, "none", 0);
findCorpse = new ChanceCard("Found a Corpse", 0, 0, false, "none", 0, "resource", 1);
findBox = new ChanceCard("Found a Box", 0, 0, false, "none", 0, "resource", 2);
findKnife = new ChanceCard("Found a Knife", 0, 0, false, "none", 0, "event", 0);
findGun = new ChanceCard("Found a Gun", 0, 0, false, "none", 0, "event", 0);
findSpoon = new ChanceCard("Found a Spoon", 0, 0, false, "none", 0, "event", 0);
findMagicElixer = new ChanceCard("Found a Magic Elixer", 10, 20, false, "none", 0, "none", 0);
findExcalibur = new ChanceCard("Found Excaliber!", 0, 0, false, "none", 0, "event", 0);
findCampSite = new ChanceCard("Found Abandoned Campsite", 0, 0, false, "cook", 0, "none", 0);
beeSwarm = new ChanceCard("Bee Swarm", -1, 0, false, "none", 0, "none", 0);
bearAttackWeapon = new ChanceCard("Bear Attack", -2, 0, false, "none", 0, "event", 0);
bearAttack = new ChanceCard("Bear Attack", -4, 0, false, "none", 0, "none", 0);
TigerAttackWeapon = new ChanceCard("Tiger Attack", -2, 0, false, "none", 0, "event", 0);
TigerAttack = new ChanceCard("Tiger Attack", -4, 0, false, "none", 0, "none", 0);
stubToe


//-------------------------------------------------------------------------//
//Functions and Methods
//-------------------------------------------------------------------------//



//-------------------------------------------------------------------------//
//Turn and Main Event Methods
//-------------------------------------------------------------------------//
