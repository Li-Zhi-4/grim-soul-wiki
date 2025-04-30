/**
 * Data will have to be collected as shown below.
 * Improvements:
 * Try to come up with a better way of displaying repetitive dl/dt in the following (and also the sections).
 * There's probably a way to add loops or something to reduce repetitiveness.
 * Some of the CSS can be grouped better. Also think better about how to group certain style className tags for ease of use.
 */

import './InfoBox.css'

function ShieldInfoBox({ item }) {
    const shields = {
        ["cart-thill"]: {
            name: 'Cart Thill',
            imgURL: 'src/assets/icons/Cart_Thill_Icon.webp',
            description: 'A heavy argument in any dispute.',
        },
        spade: {
            name: 'Spade',
            imgURL: 'src/assets/icons/Shovel_Icon.webp',
            description: 'If you sharpen the edges, you can quickly fill a freshly dug grave.',
        },
        dagger: {
            name: 'Dagger',
            imgURL: 'src/assets/icons/Dagger_Icon.webp',
            description: 'A small but reliable elper for any swordsman.',
        },
        ["fiery-retribution-shield"]: {
            name: "Fiery Retribution Shield",
            imgURL: 'src/assets/icons/Fiery_Retribution_Shield_Icon.webp',
            description: 'According to legend, the flames will not touch those who are pure of heart.',
            type: 'shield',
            rarity: 'legendary',
            combatMastery: 'Shields',
            armour: 150,
            elemental: "N/A",
            durability: "-",
            itemEffect: "Scares the Night Guest away.",
        }
    };

    const shield = shields[item];

    return (
        <div className='infobox'>
            <div className="image-section">
                <div className="divider-down"></div>
                <img src={shield.imgURL} alt={shield.name} className="item-icon" />
                <div className="divider-up"></div>
            </div>

            <div className="info-section">
                <div className="divider-down"></div>
                    <dl className="data-info">
                        <div className="data tag">
                            <dt className="key tag">Type</dt>
                            <dd className="value tag">{shield.type}</dd>
                        </div>
                        <hr className="divider" />
                        <div className="data tag">
                            <dt className="key tag">Rarity</dt>
                            <dd className="value tag">{shield.rarity}</dd>
                        </div>
                        <hr className="divider" />
                        <div className="data long-text">
                            <dt className="key long-text">Combat Mastery</dt>
                            <dd className="value long-text">{shield.combatMastery}</dd>
                        </div>
                    </dl>
                <div className="divider-up"></div>
            </div>

            <div className="info-section">
                <div className="divider-down"></div>
                    <dl className="data-info">
                        <div className="data short-text">
                            <dt className="key short-text">Armour</dt>
                            <dd className="value short-text">{shield.armour}</dd>
                        </div>
                        <hr className="divider" />
                        <div className="data tag">
                            <dt className="key tag">Elemental</dt>
                            <dd className="value tag">{shield.elemental}</dd>
                        </div>
                        <hr className="divider" />
                        <div className="data short-text">
                            <dt className="key short-text">Durability</dt>
                            <dd className="value short-text">{shield.durability}</dd>
                        </div>
                        <hr className="divider" />
                        <div className="data long-text">
                            <dt className="key long-text">Effect</dt>
                            <dd className="value long-text">{shield.itemEffect}</dd>
                        </div>
                    </dl>
                <div className="divider-up"></div>
            </div>
        </div>
    );
}

export { ShieldInfoBox };
