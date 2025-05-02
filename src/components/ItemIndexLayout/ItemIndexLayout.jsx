import './ItemIndexLayout.css'


function ItemIndexLayout() {

    /* Figure out how to display use. */
    return (
        <div className="content-parent">
            <a href="" className="back-link">&lt; Back</a>
            <h1 className="item-title">Items</h1>
            
            <a href="" className="test-link">
                <img src="src/assets/icons/Fiery_Retribution_Shield_Icon.webp" alt="shield" />
            </a>
        </div>
    );
}

export { ItemIndexLayout };