export const items = {
    ["cart-thill"]: {
        name: 'Cart Thill',
        iconURL: '/src/assets/icons/Cart_Thill_Icon.webp',
        description: 'A heavy argument in any dispute.',
    },
    spade: {
        name: 'Spade',
        iconURL: '/src/assets/icons/Shovel_Icon.webp',
        description: 'If you sharpen the edges, you can quickly fill a freshly dug grave.',
    },
    dagger: {
        name: 'Dagger',
        iconURL: '/src/assets/icons/Dagger_Icon.webp',
        description: 'A small but reliable elper for any swordsman.',
    },
    ["fiery-retribution-shield"]: {
        name: "Fiery Retribution Shield",
        iconURL: '/src/assets/icons/shields/Fiery_Retribution_Shield_Icon.webp',
        description: 'According to legend, the flames will not touch those who are pure of heart.',
        use: "Activating this reduces the physical damage of your enemy’s next strike by 50. When blocking, deals 100 fire damage to all nearby enemies.",
        type: 'shield',
        rarity: 'legendary',
        combatMastery: 'Shields',
        armour: 150,
        elemental: "N/A",
        durability: "-",
        itemEffect: "Scares the Night Guest away.",
        crafting: {
            ['Not craftable']: null
        },
        obtained: ['Scarlet Hunt rewards', 'Ancient Sepulchre chest']
    },
    ["ice-sword"]: {
        name: 'Ice Sword',
        iconURL: '/src/assets/icons/weapon/Frost_Sword_Icon.webp',
        description: 'The cold of this weapon\'s blade will freeze the fire within your enemies.',
        use: ["Activating this reduces the physical damage of your enemy's next strike by 50.", "When blocking, deals 100 fire damage to all nearby enemies."],
        type: 'weapon',
        weaponType: 'One-handed',
        rarity: 'unique',
        combatMastery: 'Bastard Sword',
        sharpen: false,
        damage: 60,
        elemental: {
            element: 'ice',
            value: 20
        },
        attackSpeed: 1.1,
        range: 1.6,
        dps: 88,
        durability: "-",
        itemEffect: "Chance to freeze opponent."
    },
    ["bonnet-cap"]: {
        name: 'Bonnet Cap',
        iconURL: '/src/assets/icons/armour/cloth-set/Simple_Hat_Icon.webp',
        description: 'Traditional headwear of the mobs.',
        type: 'armour',
        piece: 'helm',
        rarity: 'normal',
        set: 'Cloth Set',
        tier: 1,
        armour: 10,
        runSpeed: 'N/A',
        elemental: {
            element: 'N/A',
            value: 0
        },
        durability: 91,
        itemEffect: 'No effect.',
        fullSetEffect: 'No full set effect.',
        crafting: {
            ['flax-fiber']: 2,
            ['cloth']: 1
        },
        obtained: ['Scarlet Hunt rewards', 'Ancient Sepulchre chest']
    }
};