import './ItemIndexLayout.css'

import { Link } from 'react-router-dom';

import { AllData } from '../../data/AllData';

function ItemIndexLayout() {

    return (
        <div className="content-parent">
            <a href="/" className="back-link">&lt; Back</a>
            <h1 className="item-title">Items</h1>
            
            <div className='item-index'>
                <div className="divider-down"></div>
                <div className="item-list">
                    {Object.entries(AllData).map( ([slug, item]) => (
                        <Link to={`/items/${slug}`} className='item-link' key={slug}>
                            <img className="link-image" src={item.iconURL} alt="shield" />
                            <span className="link-label">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="divider-up"></div>
            </div>
        </div>
    );
}

export { ItemIndexLayout };