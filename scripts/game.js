//-------------------------------------------------------------------------//
//Global Vars
//-------------------------------------------------------------------------//
//Inventories
var ryanInven = [];
var cecilyInven = [];
var denverInven = [];
var sunnyInven = [];


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
    constructor(name, hp, sp, loseTurn, disabled, weapon) {
        this._name = name;
        this._hp = hp;
        this._sp = sp;
        this._loseTurn = loseTurn;
        this._disabled = disabled;
        this._weapon = weapon;
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

    get weapon() {
        return this._weapon;
    }

    //setters, change and return value of property
    set name(value) {
        this._name = value
        return this._name; //Should always be a string.
    }
    
    set hp(cHP) {
        var tHP = this._hp;
        this._hp = tHP + cHP;
        if (this._hp > 20) {
            this._hp = 20;
        }
        if (this._hp <= 0) {
            this._hp = 0;
            this._disabled = true;
        }
        return this._hp;
    }

    set sp(cSP) {
        var tSP = this._sp;
        this._sp = tSP + cSP;
        if (this._sp > 40) {
            this._sp = 40;
        }
        if (this._sp < 0) {
            this._sp = 0;
            this._loseTurn = true;
        }
        return this._sp; //should always be int
    }

    set loseTurn(value) {
        this._loseTurn = value;
        return this._loseTurn; //should always be bool
    }

    set disabled(value) {
        this._disabled = value;
        return this._disabled; //should always be bool
    }

    set weapon(value) {
        this._weapon = value;
        return this._weapon; //should always be bool;
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

    appendRyan(name) {
        return ryanInven.push(name);
    }

    appendCecily(name) {
        return cecilyInven.push(name);
    }

    appendDenver(name) {
        return denverInven.push(name);
    }

    appendSunny(name) {
       return sunnyInven.push(name);
    }

    removeRyan(name) {
        var i;
        var index
        for (i=0; i<ryanInven.length; ++i) {
            if (ryanInven[i] == name) {
                index = i;
                break;
            }
        }
        return ryanInven.splice(index, 1);
    }

    removeCecily(name) {
        var i;
        var index;
        for (i=0; i<cecilyInven.length; ++i) {
            if (cecilyInven[i] == name) {
                index = i;
                break;
            }
        }
        return cecilyInven.splice(index, 1);
    }

    removeDenver(name) {
        var i;
        var index;
        for (i=0; i<denverInven.length; ++i) {
            if (denverInven[i] == name) {
                index = i;
                break;
            }
        }
        return denverInven.splice(index, 1);
    }
    
    removeSunny(name) {
        var i;
        var index;
        for (i=0; i<sunnyInven.length; ++i) {
            if (sunnyInven[i] == name) {
                index = i;
                break;
            }
        }
        return sunnyInven.splice(index, 1);
    }
}


//-------------------------------------------------------------------------//
//Objects
//-------------------------------------------------------------------------//
// Players
ryan = new Character("Ryan", 20, 40, false, false, false);
cecily = new Character("Cecily", 20, 40, false, false, false);
denver = new Character("Denver", 20, 40, false, false, false);
sunny = new Character("Sunny", 20, 40, false, false, false);

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
stubToe = new ChanceCard("Stubbed Toe", -1, 0, false, "none", 0, "none", 0);
poisonIvy = new ChanceCard("Poison Ivy", -1, 0, false, "sick", 3, "none", 0);
snakeBite = new ChanceCard("Snake Bite", -2, 0, false, "sick", 3, "none", 0);
quickSand = new ChanceCard("Quick Sand", 0, 0, true, "none", 0, "none", 0);
seaUrchin = new ChanceCard("Stepped on a Sea Urchin", -2, 0 , "sick", 3, "none", 0);
waspSting = new ChanceCard("Wasp Sting", -2, 0, false, "none", 0, "none", 0);
commonCold = new ChanceCard("Common Cold", -1, 0, false, "sick", 2, "none", 0);
cocoTrauma = new ChanceCard("Coconut falls on your head", -2, 0, true, "none", 0, "none", 0);
pitFall = new ChanceCard("Fall In A Pit", -1, 0, true, "none", 0, "none", 0); 


//-------------------------------------------------------------------------//
//Functions and Methods
//-------------------------------------------------------------------------//



//-------------------------------------------------------------------------//
//Turn and Main Event Methods
//-------------------------------------------------------------------------//
