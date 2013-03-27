"use strict";

exports.do = function (app) {    
    var models = app.plugins.shipgen.models,
        Synopsis = models.meta.synopsis,
        Class = models.class,
        Type = models.type,
        Sensor = models.mods.sensor,
        Weapon = models.mods.weapon,
        Hull = models.mods.hull,
        Shield = models.mods.shield,
        Engine = models.mods.engine,
        Crew = models.mods.crew;

    Synopsis.belongsTo(Ship, {as: 'synopsis', foreignKey: 'shipId'});
    Type.belongsTo(Ship, {as: 'type', foreignKey: 'shipId'});

    Ship.hasMany(Slot, {as: 'slots', foreignKey: 'shipId'});
    Ship.hasMany(Crew, {as: 'crew', foreignKey: 'shipId'});
    
    //slots may house any of the mods,
    //which one an individual slot can will be determined by Slot.modType
    Slot.hasMany(Weapon, {as: 'weapons', foreignKey: 'shipId'});
    Slot.hasMany(Hull, {as: 'hulls', foreignKey: 'shipId'});
    Slot.hasMany(Shield, {as: 'shields', foreignKey: 'shipId'});
    Slot.hasMany(Engine, {as: 'engines', foreignKey: 'shipId'});
    
    
    //adding class relations to basically everything.
    Class.belongsTo(Ship, {as: 'class', foreignKey: 'shipId'});
    Class.belongsTo(Crew, {as: 'class', foreignKey: 'crewId'});
    Class.belongsTo(Slot, {as: 'class', foreignKey: 'slotId'});
    
    Class.belongsTo(Weapon, {as: 'class', foreignKey: 'weaponId'});
    Class.belongsTo(Hull, {as: 'class', foreignKey: 'hullId'});
    Class.belongsTo(Shield, {as: 'class', foreignKey: 'shieldId'});
    Class.belongsTo(Engine, {as: 'class', foreignKey: 'engineId'});

    //adding synopsis relations to basically everything
    Synopsis.belongsTo(Ship, {as: 'synopsis', foreignKey: 'shipId'});
    Synopsis.belongsTo(Crew, {as: 'synopsis', foreignKey: 'crewId'});
    Synopsis.belongsTo(Slot, {as: 'synopsis', foreignKey: 'slotId'});
    
    Synopsis.belongsTo(Weapon, {as: 'synopsis', foreignKey: 'weaponId'});
    Synopsis.belongsTo(Hull, {as: 'synopsis', foreignKey: 'hullId'});
    Synopsis.belongsTo(Shield, {as: 'synopsis', foreignKey: 'shieldId'});
    Synopsis.belongsTo(Engine, {as: 'synopsis', foreignKey: 'engineId'});

    //adding type relations to basically everything
    Type.belongsTo(Ship, {as: 'type', foreignKey: 'shipId'});
    Type.belongsTo(Crew, {as: 'type', foreignKey: 'crewId'});
    Type.belongsTo(Slot, {as: 'type', foreignKey: 'slotId'});
    
    Type.belongsTo(Weapon, {as: 'type', foreignKey: 'weaponId'});
    Type.belongsTo(Hull, {as: 'type', foreignKey: 'hullId'});
    Type.belongsTo(Shield, {as: 'type', foreignKey: 'shieldId'});
    Type.belongsTo(Engine, {as: 'type', foreignKey: 'engineId'});
}
