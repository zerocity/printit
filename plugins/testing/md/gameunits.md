# Game Unit Properties

MAP: property (values) [milestone]

[XXX] = sometime in the future

## Spaceship: [1]

    Class (Fighter, Frigate, Cruiser, Battleship) [1, 3, 4, 5]
        Size (1-2, 2-5, 4-8, 8-10) [1, 3, 4, 5]
        Crew Capacity (max = size) [1]

    Sensors 
        Range of sight (used to identify enemy ships) [1]
        ECM (Electronic Countermeasures) [XXX]
        ECCM (Electronic Counter Countermeasures) [XXX]

    Defense
        Armor (front, left, right, back, top, bottom) [1]
        Shield (weapons need to penetrate the shields before they can hit the armor) [1]
        Shield recharge (the shields will regenerate by this value each turn) [1]
    
    Offense [1]
        Strength (damage bonus for and from weapons) [1]
            
    Engine [1]
        MaxSpeed in cm (this only is the max speed, acceleration is used for navigational purposes) [1]
        Acceleration in cm (this will be used to accel and break) [1]
        TurnSpeed in degrees [1]
    
    Weapon slots
        Class (assault, heavy, artilery ) [1] more later ("flamers", "schablonen")
            Size (max = shipClassMaxSize + 1) [1]
        Direction (front, left, right, back, top, bottom) [1]

    Module slots
        Class (Fighter, Frigate, Cruiser, Battleship) [1]
            Size (max = shipClassMaxSize + 1) [1]
        Type 
    Resource Cost (cost in resources to build this ship)


## CREW PROPERTIES
    
    Crew:
        Hit chance (% bonus)    
        Offense
        Initiative (reload speed, highest initiative acts first, maybe randomize)
        Morale (regroup tests)
        Type (HQ, Standard, Elite, Support, Assault)
        Resource Cost (cost in resources to train this crew)
        Equipment
        
    Weapon:
        Class (Fighter, Frigate, Cruiser, Battleship) [1, 3, 4, 5]
        Type (standard, elite, assault, support) [this is responsible for the FORM factor of the weapon slot]
        Size (minimum size of slot, also determines minimum size of ship)
        
        Hit chance (% bonus) 
        Damage (If shields get penetrated, compare this to the targets armor)
        Shield penetration (reduces shields by its value until they get recharged)
        Range (in cm)
        Reload (Number of shots per round)
        Resource Cost (cost in resources to build this weapon)
        Specials (pathfinding rockets, turrets etc)
        
    Modules:
        Class [Fighter, Frigate, Cruiser, Battleship]
        Type [ standard, elite, assault, support ]
        Size (minimum size of slot, also determines minimum size of ship)
        Effect [Additional Shields, Additional Crew, basically a possibility to raise anything]
        Resource Cost (cost in resources to build this module)

## Game Map

Should be in a separate Files

    Planet:
        Class
        Size 
        Population
        Buildings
        Resources  
      
Planets have gravitation and can be orbited,
Atmosphere capable ships can enter the atmosphere to flee from those that cant

## GAME TURNS

    Turns:
        Movement 1 (accelerate / decelerate with accel speed, turn with turnspeed)
        Ranged Attacks
        Ram / Boarding / Close Combat
        Movement 2 (accelerate / decelerate with accel speed, turn with turnspeed)
      
A player can only accelerate or decelerate or turn each ship once per turn. Modules may change this.
Ships will continue moving with their current speed if they don't decelerate.

## Examples for Weapons 

    Lasercannon:
        Hit chance +0%
        Damage 9 + size
        Shield Penetration 6 + size
        Range 40 cm + (size * 2)
        Reload 2 rounds
        Type Heavy
        Size 1
        Resource Cost (cost in resources to build this weapon)
            Damage (If shields get penetrated, compare this to the targets armor)
            Shield penetration (reduces shields by its value until they get recharged)
            Range (in cm)
            Reload (Number of shots per round)
            Type (Heavy, Assault, Support, Artillery)
            Size (minimum size of slot, also determines minimum size of ship)
            Resource Cost (cost in resources to build this weapon)
            Specials (pathfinding rockets, turrets etc)
    
    Modules:
        Type [ standard, elite, assault, support ]
        Size (minimum size of slot, also determines minimum size of ship)
        Class [Battleship, Cruiser, Frigate]
        Effect [Additional Shields, Additional Crew, basically a possibility to raise anything]
        Resource Cost (cost in resources to build this module)

