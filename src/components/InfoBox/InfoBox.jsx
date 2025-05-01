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

/**
 * COMPONENT: InfoBox
 * Takes an object from items.js (i = items['object-nam']) and creates the info box component.
 * 
 * @param {object} i an object from items.js 
 * @returns creates an info box component
 */
function InfoBox({ i }) {

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

    const test = shieldData.map( (section, idx) => (<DataSections sectionData={section} key={idx} />) );

    let selection;
    switch(i.type) {
        case 'shield':
            selection = shieldData.map( (section, idx) => (<DataSections sectionData={section} key={idx} />) );
            break;
        case 'weapon':
            selection = weaponData.map( (section, idx) => (<DataSections sectionData={section} key={idx} />) );
            break;
        case 'armour':
            selection = armourData.map( (section, idx) => (<DataSections sectionData={section} key={idx} />) );
            break;
    }

    return (
        <div className='infobox'>
            <div className="image-section">
                <div className="divider-down"></div>
                <img src={i.iconURL} alt={i.name} className="item-icon" />
                <div className="divider-up"></div>
            </div>

            {/* Will probably have to connect weaponData etc. with useState to actually dynamically switch the InfoBox types */}
            {selection}
        </div>
    );
}

export { InfoBox };