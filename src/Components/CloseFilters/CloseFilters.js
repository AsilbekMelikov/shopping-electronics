import React from 'react';
import "./CloseFilters.css"
import {useDispatch, useSelector} from "react-redux";
import {filterAllBrandsDeleted, filterBrandsDeleted, filterFeaturesDeleted, filterAllFeaturesDeleted} from "../../Redux/Actions";

const CloseFilters = () => {
    const smartphonesModels = useSelector(state => state.filteredSmartphones)
    const smartphonesFeatures = useSelector(state => state.filteredSmartphoneFeatures)
    const dispatch = useDispatch()

    return (
        <div className='close-filters d-flex align-items-center'>
            {smartphonesModels.length === 0 ? (
                smartphonesFeatures.length === 0 ? null : smartphonesFeatures.map(feature => {
                        return (
                            <button key={feature}
                                    className='btn py-1 d-flex justify-content-between align-items-center bg-white'
                                    type='button'>
                                <span className='text-dark d-block text-capitalize' style={{width:"103px"}}>{feature}</span>
                                <span className='btn-close ms-3'
                                      onClick={() => dispatch(filterFeaturesDeleted(feature))}
                                      style={{cursor: "pointer", fontSize: '13px'}}
                                      aria-label='Close'></span>
                            </button>
                        )
                    })
            ) : (
                smartphonesModels.map((model, index) => {
                    if (index < 1) {
                        return (
                            <>
                                <button key={model}
                                        className='btn py-1 d-flex justify-content-between align-items-center bg-white'
                                        type='button'>
                                    <span className='text-dark d-block text-capitalize'>{model}</span>
                                    <span className='btn-close ms-3'
                                          onClick={() => dispatch(filterBrandsDeleted(model))}
                                          style={{cursor: "pointer", fontSize: '13px'}} aria-label='Close'></span>
                                </button>
                                {smartphonesFeatures.length === 0 ? null : smartphonesFeatures.map(feature => {
                                    return (
                                        <button key={feature}
                                                className='btn py-1 d-flex justify-content-between align-items-center bg-white'
                                                type='button'>
                                            <span className='text-dark d-block text-capitalize' style={{width:"103px"}}>{feature}</span>
                                            <span className='btn-close ms-3'
                                                  onClick={() => dispatch(filterFeaturesDeleted(feature))}
                                                  style={{cursor: "pointer", fontSize: '13px'}}
                                                  aria-label='Close'></span>
                                        </button>
                                    )
                                })}
                            </>

                        )
                    } else {
                        return (
                            <>
                                <button key={model}
                                        className='btn py-1 d-flex justify-content-between align-items-center bg-white'
                                        type='button'>
                                    <span
                                        className='text-dark text-capitalize'>{model}</span>
                                    <span className='btn-close ms-3' onClick={() => dispatch(filterBrandsDeleted(model))}
                                          style={{cursor: "pointer", fontSize: '13px'}}
                                          aria-label='Close'></span>
                                </button>
                                {smartphonesModels.length - 1 === index ?
                                    <span className='text-primary ms-2'
                                          onClick={() => {
                                              dispatch(filterAllBrandsDeleted())
                                              dispatch(filterAllFeaturesDeleted())
                                          }}
                                          style={{cursor:'pointer'}}>Clear</span>
                                    : null
                                }
                            </>
                        )
                    }
                })
            )}
        </div>
    );
}

export default CloseFilters;