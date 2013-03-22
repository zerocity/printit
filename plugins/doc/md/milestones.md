# Milestones

## Project Idea  

    The aim of this project is to create an open source tabletop space simulation game.
    The granularity of the game is up to the players, in the end there should be the
    possibility to play a very complex or a very simple game, just as the players wish.
    Possibilities range from 10 fighter for each player, 10 minute combat time battles
    to week long battles that decide over the control of 

    To reduce the complexity of predefinitions of ship types / values a "Ship value generator"
    is added. This Generator is an web application who calculates the ship properties for you
    according to the equip modules, weapons etc. This modules influence the shape of the 
    3D model who will be generated with openscad. With this information is know possible to 
    print an 3D Model with an 3D Printer like MakerBot. 

## Pre Milestones

### General
- Define Ship Types/Properties
- Define the size of smallest ship size 
- Define the size of game map (depending on the ship size)
- rough game play idea. TARGET : half A4 page

## First Milestone
        
### Milestone Target 

Build an Web interface which generates the ship properties according to the equipped weapons, modules etc see Game Unit Properties)
This values will be visualized in this "generator" with eventually an 3D model of the selected ship.         

    1. Ship Value Generator Web interface (Blender)
        1.0 Interface that shows all ship options. more about what needs to be shown below: 
        1.1 Ship generator interface
            Choose a Ship class (Depending on Ship Size (max size 2))
                Fighter 
                Bomber
                Interceptor
        1.2 Weapons generator (size 1 - 2, 3+ weapons)
        1.3 Module generator (size 1 - 2)
        1.4 Obstacle Generator (size 1 - 2)
        1.5 the end result will be a complete ship.
            it will be able to do anything thats allowed by the rules after the three steps above. 
            
        
### Basic Ship requirements 
- keep it simple 
- Ships should have all the values that EVERY ship will need later on. nothing special.
- Complexity on this stage should basically be nonexistent

### Early Basic Gameplay (Simple Mode)
- Game Size : 5 -10 Fighters 
- Fighters are customizable (in early stage minimalistic customization options)  
- try to get a first feeling for balancing.

## Second Milestone

    [ ] Openscad code 
    [ ] have crews to enhance the spaceships
    [ ] have planets with orbits and gravity (size 3+)
    [ ] but not habitable planets for now!
    
## Third Milestone

    [ ] implement frigates (size 2-5)
    [ ] implement bigger weapons (size 2-5)
    [ ] implement bigger modules (size 2-5)
    
## Fourth Milestone

    [ ] implement cruisers (size 4-8)
    [ ] implement weapons (size 4-8)
    [ ] implement modules (size 4-8)
    [ ] torpedoes, rockets, fighter bays will get available at or after this milestone
   
## Fifth Milestone

    [ ] implement battleships (size 7-10)
    [ ] implement weapons (size 7-10)
    [ ] implement modules (size 7-10)
    
## FUTURE

