"use strict";

/*
 * Shiptypes:
 * hq
 * common
 * elite
 * charge
 * heavy
 * 
 */

module.exports = {
    ships: [
        {name: 'hamdar', slug: 'hamdar', published: true, desc: 'hamdar is a small well rounded fighter class ship capable of handling almost anything averagely.', class: 'fighter', type: 'common'},
        {name: 'tiamat', slug: 'tiamat', published: true, desc: 'the tiamat is a fast but vulnerable ship capable of hitting and retreating.', class: 'fighter', type: 'charge'},
        {name: 'polymesus', slug: 'ploymesus', published: true, desc: 'polymesus is a small fighter class bomber.', size: 1, class: 'fighter', type: 'heavy'},
        {name: 'enratos', slug: 'enratos', published: true, desc: 'the enratos is an elite fighter, capable of bombing big targets or attacking enemy fighters with the onboard cannons.', size: 2, class: 'fighter', type: 'elite' },
        {name: 'calypso', slug: 'calypso', published: true, desc: 'the calypso is a hq flagship, usually guarded by a fleet of enratos. it is the biggest fighter as of yet.', size: 2, class: 'fighter', type: 'hq' }
    ],
    engines: [
        {name: 'Assault Engine 1', slug: 'assault_engine_1', desc: 'this engine really is engine 1 with a bit more speed.', maxSpeed: 2, accel: 1, consume: 2, class: 'fighter'},
        {name: 'Standard Engine 1', slug: 'standard_engine_1', desc: 'this engine really is engine 1. it also is pretty standard.', maxSpeed: 1, accel: 1, consume: 1, class: 'fighter'},
    ],
    shields: [
        {name: 'Shield 1', slug: 'shield_1', desc: 'this shield really is shield 1.', shield: 1, regen: 1, consume: 1, class: 'fighter'},
        {name: 'Shield 2', slug: 'shield_2', desc: 'this shield is a bit better than shield 1.', shield: 2, regen: 1, consume: 1, class: 'fighter'},
    ],
    hulls: [
        {name: 'Hull 1', slug: 'hull_1', desc: 'this hull really is hull 1.', hull: 1, repair: 1, consume: 1, class: 'fighter'},
        {name: 'Hull 2', slug: 'hull_2', desc: 'this hull really is hull 1 with a few bolts of metal and a new paintjob.', hull: 2, repair: 1, consume: 1, class: 'fighter'}
    ],
    weapons: [
        {name: 'Weapon 1', slug: 'weapon_1', desc: 'this weapon really is weapon 1. nothing special', damage: 1, range: 10, reload: 5, consume: 1, class: 'fighter'},
        {name: 'Weapon 2', slug: 'weapon_2', desc: 'this weapon really is weapon 1 with a bit bigger ammunition. still nothing special.', damage: 2, range: 12, reload: 5, consume: 2, class: 'fighter'},
        {name: 'Weapon 3', slug: 'weapon_3', desc: 'this weapon really is weapon 1 with a bit bigger cannon. still nothing special but has a better range.', damage: 2, range: 15, reload: 5, consume: 2, class: 'fighter'}
    ]
};
