import './ItemIndexLayout.css'

import { Link } from 'react-router-dom';

function ItemIndexLayout() {

    /* Figure out how to display use. */
    return (
        <div className="content-parent">
            <a href="" className="back-link">&lt; Back</a>
            <h1 className="item-title">Items</h1>
            
            <div className='item-list'>
                <Link to="/items/fiery-retribution-shield" className='test-link'>
                    <img src="/src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
                </Link>
                <Link to="/items/bonnet-cap" className='test-link'>
                    <img src="/src/assets/icons/armour/cloth-set/Simple_Hat_Icon.webp" alt="armour" />
                </Link>
                <Link to="/items/fiery-retribution-shield" className='test-link'>
                    <img src="/src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
                </Link>
                <Link to="/items/fiery-retribution-shield" className='test-link'>
                    <img src="/src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
                </Link>
                <Link to="/items/fiery-retribution-shield" className='test-link'>
                    <img src="/src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
                </Link>
                <Link to="/items/fiery-retribution-shield" className='test-link'>
                    <img src="/src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
                </Link>
            </div>
        </div>
    );
}

export { ItemIndexLayout };