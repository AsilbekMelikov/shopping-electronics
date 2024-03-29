import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Pagination = (props) => {
    const modelFilters = useSelector(state => state.filteredSmartphones)
    const featureFilters = useSelector(state => state.filteredSmartphoneFeatures)

    const {nPagesOfAllRecords, currentPage, setCurrentPage, nPagesOfFilteredRecords,
        nPagesOfFilteredFeatures, nPagesOfFilteredFeaturesModels} = props

    const allPageNumbers = [...Array(nPagesOfAllRecords + 1).keys()].slice(1)
    const filteredModelsPages = [...Array(nPagesOfFilteredRecords + 1).keys()].slice(1)
    const filteredFeaturesPages = [...Array(nPagesOfFilteredFeatures + 1).keys()].slice(1)
    const  filteredFeaturesModelsPages = [...Array(nPagesOfFilteredFeaturesModels + 1).keys()].slice(1)


    const goToNextPage = () => {
        if (modelFilters.length === 0 ? currentPage !== nPagesOfAllRecords : currentPage !== nPagesOfFilteredRecords) {
            return setCurrentPage((prev) => prev + 1)
        }
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) {
            return setCurrentPage((prev) => prev - 1)
        }
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link px-3" onClick={goToPrevPage} href='#' aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            {modelFilters.length === 0 && featureFilters.length === 0 ? (
                allPageNumbers.map(pgNumber => (
                        <li className={`page-item ${currentPage === pgNumber ? 'active' : ''}`} key={pgNumber}>
                            <a onClick={() => setCurrentPage(pgNumber)} className="page-link px-3" href='#'>
                                {pgNumber}
                            </a>
                        </li>
                    ))
            ) : modelFilters.length !== 0 && featureFilters.length === 0 ? (
                filteredModelsPages.map(pgNumber =>  (
                <li className={`page-item ${currentPage === pgNumber ? 'active' : ''}`} key={pgNumber}>
                    <a onClick={() => setCurrentPage(pgNumber)} className="page-link px-3" href='#'>
                        {pgNumber}
                    </a>
                </li>
             ))
            ) : modelFilters.length === 0 && featureFilters.length !== 0 ? (
                filteredFeaturesPages.map(pgNumber => (
                    <li className={`page-item ${currentPage === pgNumber ? 'active' : ''}`} key={pgNumber}>
                        <a onClick={() => setCurrentPage(pgNumber)} className="page-link px-3" href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))
            ) : filteredFeaturesModelsPages.map(pgNumber => (
                <li className={`page-item ${currentPage === pgNumber ? 'active' : ''}`} key={pgNumber}>
                    <a onClick={() => setCurrentPage(pgNumber)} className="page-link px-3" href='#'>
                        {pgNumber}
                    </a>
                </li>
            ))}

            <li className="page-item">
                <a className="page-link px-3" onClick={goToNextPage} href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    );
}

export default Pagination;