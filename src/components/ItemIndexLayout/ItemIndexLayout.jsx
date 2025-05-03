import './ItemIndexLayout.css'
import { AllData } from '../../data/AllData';

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 12;
const FILTER_LIST = [];

/**
 * Filters data by filter tags first, then filters using search if applicable
 * @param {string} filter string filter
 * @param {function} onChange useState change state function
 */
function filterData( type, filter, onChange ) {

    if (type === 'tag') {
        // If a filter is selected, add or remove it from the filter list (depending on the tag state)
        if (filter === 'All items') {
            FILTER_LIST.length = 0;
        } else {
            const idx = FILTER_LIST.indexOf(filter.toLowerCase());
            FILTER_LIST.includes(filter.toLowerCase()) ? FILTER_LIST.splice(idx,1) : FILTER_LIST.push(filter.toLowerCase());
        }
    }

    // Filter AllData based off the current FILTER_LIST
    let filtered = Object.fromEntries(
        Object.entries(AllData).filter(
        ([, item]) =>
            FILTER_LIST.length === 0 || FILTER_LIST.includes(item.type)
        )
    ); 

    // Filter with search
    if (type === 'search') {
        filtered = Object.fromEntries(
            Object.entries(filtered).filter(
            ([, item]) =>
                item.name.toLowerCase().includes(filter.toLowerCase())
            )
        ); 
    }

    // Change the current data used to a filtered version
    onChange(filtered);  
}



/**
 * COMPONENT: ItemIndexLayout
 * Takes data in a js form and displays the items
 * 
 * @returns Formats layout of js objects
 */
function ItemIndexLayout() {
    const [currentFilter, setCurrentFilter] = useState(AllData);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState(['All items']);

    const entries = useMemo(() => Object.entries(currentFilter), [currentFilter]);     // Creates an array consisting of [ {<name>, <value>}, ...]
    const pageCount = Math.ceil(entries.length / ITEMS_PER_PAGE);   // Calculates total number of pages required

    const [currentPage, setCurrentPage] = useState(1);

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentEntries = useMemo(() => {                          // Creates a list of entries for the current page selected
        return entries.slice(start, start + ITEMS_PER_PAGE);
    }, [entries, currentPage]);

    const handleFilter = (type, filter) => {
        setCurrentPage(1);
        filterData(type, filter, setCurrentFilter);
    };

    function toggleTag(tag) {
        if (tag === 'All items') {
            allTags.length = 0;
            setSelectedTags('All items');
        } else {
            setSelectedTags(prev => 
                prev.includes(tag)
                    ? prev.filter(t => t !== tag) // remove it
                    : [...prev, tag]              // add it
            );
        }
    }

    const allTags = ['All items', 'Armour', 'Weapon', 'Shield'];

    return (
        <div className="content-parent">
            <a href="/" className="back-link">&lt; Back</a>
            <h1 className="item-title">Items</h1>
            
            <div className="filters">
                {/* Filter Tags */}
                <div className="filter-tags">
                    {allTags.map(tag => {
                        const isPressed = selectedTags.includes(tag);
                        return (
                        <button
                            key={tag}
                            role="button"
                            aria-pressed={isPressed}
                            onClick={() => {toggleTag(tag); handleFilter('tag', tag)}}
                            className={`${isPressed ? 'active-tag' : 'tag'}`}
                        >
                            {tag}
                        </button>
                        );
                    })}
                </div>

                {/* Search Bar */}
                <input
                    type="search"
                    placeholder="Search items…"
                    value={searchTerm}
                    onChange={e => {
                        handleFilter('search', e.target.value);
                        setSearchTerm(e.target.value);
                    }}
                    className="search-input"
                />
            </div>

            {/* Item Index list goes here */}
            <div className='item-index'>
                <div className="divider-down"></div>
                <div className="item-list">
                    {currentEntries.map(([slug, item]) => (
                        <Link to={`/items/${slug}`} className="item-link" key={slug}>
                        <img className="link-image" src={item.iconURL} alt={item.name} />
                        <span className="link-label">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="divider-up"></div>
            </div>

            {/* Pagination goes here. This could probably be its' own component. */}
            <div className="pagination">
                <button className='paginationButton' onClick={() => setCurrentPage(prev => prev === 1 ? prev : prev - 1)}>&lt; Back</button>
                <button className='paginationButton' onClick={() => setCurrentPage(prev => prev === pageCount ? prev : prev + 1)}>Next &gt;</button>
            </div>
            <p className="pagination">{start+1} - {start+12 < entries.length ? start+12 : entries.length} of {entries.length} results</p>
        </div>
    );
}

export { ItemIndexLayout };