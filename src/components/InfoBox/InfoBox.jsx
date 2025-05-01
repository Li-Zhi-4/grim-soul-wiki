import './InfoBox.css'

/**
 * FUNCTION: DataRows
 * Takes a row of data and creates a data row component.
 * 
 * @param {object} rowData a row of object data (label, value, style, last) -> (type, item.type, long-text, false)
 * @returns a data row component in a specified style (short-text, long-text, tag)
 */
function DataRows({ rowData }) {
    const { label, value, styleClass, last, id } = rowData;

    return (
        <>
            <div className={`data ${styleClass}`}>
                <dt className={`key ${styleClass}`}>{label}</dt>
                <dd className={`value ${styleClass}`}>{value}</dd>
            </div>
            {!last && <hr className="divider" />}
        </>
    );
}


/**
 * FUNCTION: DataSections
 * Takes a list of data sections and creates data section components.
 * 
 * @param {list} sectionData a list of data sections for an item 
 * @returns a data sections of an infobox
 */
function DataSections({ sectionData }) {

    return (
        <div className="info-section">
            <div className="divider-down"></div>
            <dl className="data-info">
                {sectionData.map( row => (<DataRows rowData={row} key={row.id} />) )}
            </dl>
            <div className="divider-up"></div>
        </div>
    );
}


function InfoBox({ item }) {
    const items = {
        ["cart-thill"]: {
            name: 'Cart Thill',
            iconURL: 'src/assets/icons/Cart_Thill_Icon.webp',
            description: 'A heavy argument in any dispute.',
        },
        spade: {
            name: 'Spade',
            iconURL: 'src/assets/icons/Shovel_Icon.webp',
            description: 'If you sharpen the edges, you can quickly fill a freshly dug grave.',
        },
        dagger: {
            name: 'Dagger',
            iconURL: 'src/assets/icons/Dagger_Icon.webp',
            description: 'A small but reliable elper for any swordsman.',
        },
        ["fiery-retribution-shield"]: {
            name: "Fiery Retribution Shield",
            iconURL: 'src/assets/icons/Fiery_Retribution_Shield_Icon.webp',
            description: 'According to legend, the flames will not touch those who are pure of heart.',
            type: 'shield',
            rarity: 'legendary',
            combatMastery: 'Shields',
            armour: 150,
            elemental: "N/A",
            durability: "-",
            itemEffect: "Scares the Night Guest away.",
        },
        ["ice-sword"]: {
            name: 'Ice Sword',
            iconURL: 'src/assets/icons/weapon/Frost_Sword_Icon.webp',
            description: 'The cold of this weapon\'s blade will freeze the fire within your enemies.',
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
            iconURL: 'src/assets/icons/armour/cloth-set/Simple_Hat_Icon.webp',
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
            }
        }
    };

    const i = items[item];


    /* InfoBox data for Shield items */
    const shieldData = [
        [
            {label: "Type",             value: i.type,              styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Rarity",           value: i.rarity,            styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Combat Mastery",   value: i.combatMastery,     styleClass: "long-text",    last: true,     id: crypto.randomUUID() }
        ],
        [
            {label: "Armour",           value: i.armour,            styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Elemental",        value: i.elemental,         styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Durability",       value: i.durability,        styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Effect",           value: i.itemEffect,        styleClass: "long-text",    last: true,     id: crypto.randomUUID() }
        ]
    ]

    /* InfoBox data for Weapon items */
    const weaponData = [
        [
            {label: "Type",             value: i.type,                      styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Rarity",           value: i.rarity,                    styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Sharpen",          value: i.sharpen ? "yes" : "no",    styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Combat Mastery",   value: i.combatMastery,             styleClass: "long-text",    last: true,     id: crypto.randomUUID() }
        ],
        [
            {label: "Damage",           value: i.damage,            styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Elemental",        value: i.elemental.element, styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Attack Speed",     value: i.attackSpeed,       styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Range",            value: i.range,             styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "DPS",              value: i.dps,               styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Durability",       value: i.durability,        styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Effect",           value: i.itemEffect,        styleClass: "long-text",    last: true,     id: crypto.randomUUID() }
        ]
    ]

    /* InfoBox data for Armour items */
    const armourData = [
        [
            {label: "Type",             value: i.type,                      styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Piece",            value: i.piece,                     styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Rarity",           value: i.rarity,                    styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Set",              value: i.set,                       styleClass: "long-text",    last: true,     id: crypto.randomUUID() },
        ],
        [
            {label: "Armour",           value: i.armour,                    styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Elemental",        value: i.elemental.element,         styleClass: "tag",          last: false,    id: crypto.randomUUID() },
            {label: "Durability",       value: i.durability,                styleClass: "short-text",   last: false,    id: crypto.randomUUID() },
            {label: "Effect",           value: i.itemEffect,                styleClass: "long-text",    last: false,    id: crypto.randomUUID() },
            {label: "Full Set Effect",  value: i.fullSetEffect,             styleClass: "long-text",    last: true,     id: crypto.randomUUID() }
        ]
    ]

    return (
        <div className='infobox'>
            <div className="image-section">
                <div className="divider-down"></div>
                <img src={i.iconURL} alt={i.name} className="item-icon" />
                <div className="divider-up"></div>
            </div>

            {/* Will probably have to connect weaponData etc. with useState to actually dynamically switch the InfoBox types */}
            {weaponData.map( (section, idx) => (<DataSections sectionData={section} key={idx} />) )}    
        </div>
    );
}

export { InfoBox };