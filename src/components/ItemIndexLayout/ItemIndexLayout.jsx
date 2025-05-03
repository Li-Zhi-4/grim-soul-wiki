import './ItemIndexLayout.css'
import { AllData } from '../../data/AllData';

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;

function ItemIndexLayout() {
    const entries = useMemo(() => Object.entries(AllData), []);     // Creates an array consisting of [ {<name>, <value>}, ...]
    const pageCount = Math.ceil(entries.length / ITEMS_PER_PAGE);   // Calculates total number of pages required

    const [currentPage, setCurrentPage] = useState(1);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentEntries = useMemo(() => {                          // Creates a list of entries for the current page selected
        return entries.slice(start, start + ITEMS_PER_PAGE);
      }, [entries, currentPage]);

    return (
        <div className="content-parent">
            <a href="/" className="back-link">&lt; Back</a>
            <h1 className="item-title">Items</h1>
            
            <div className='item-index'>
                <div className="divider-down"></div>
                <div className="item-list">
                    {/* {Object.entries(AllData).map( ([slug, item]) => (
                        <Link to={`/items/${slug}`} className='item-link' key={slug}>
                            <img className="link-image" src={item.iconURL} alt="shield" />
                            <span className="link-label">{item.name}</span>
                        </Link>
                    ))} */}
                    {currentEntries.map(([slug, item]) => (
                        <Link to={`/items/${slug}`} className="item-link" key={slug}>
                        <img className="link-image" src={item.iconURL} alt={item.name} />
                        <span className="link-label">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="divider-up"></div>
            </div>

            {/* Pagination goes here. */}
            <div className="pagination">
                <button className='paginationButton' onClick={() => setCurrentPage(prev => prev === 1 ? prev : prev - 1)}>&lt; Back</button>
                <button className='paginationButton' onClick={() => setCurrentPage(prev => prev === pageCount ? prev : prev + 1)}>Next &gt;</button>
            </div>
            <p className="pagination">{start+1} - {start+12 < entries.length ? start+12 : entries.length} of {entries.length} results</p>
        </div>
    );
}

export { ItemIndexLayout };