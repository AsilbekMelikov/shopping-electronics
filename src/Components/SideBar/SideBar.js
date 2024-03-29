import React, {useEffect, useState} from 'react';
import './sideBar.css'
import {useDispatch, useSelector} from "react-redux";
import {
    deleteAllSmartphones,
    filterBrands,
    filterBrandsAdded,
    filterBrandsDeleted,
    filterFeaturesAdded,
    filterFeaturesDeleted, smartphoneFetched, smartphoneFetching
} from "../../Redux/Actions";
import {useMediaQuery} from "react-responsive";

const SideBar = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    const [isOutAll, setIsOutAll] = useState(false)
    const [isFeaturesOut, setFeaturesOut] = useState(false)

    const brands = useSelector(state => state.filterBrands)
    const dispatch = useDispatch();
    const filteredSmartPhones = useSelector(state => state.filteredSmartphones)
    const filteredFeatures = useSelector(state => state.filteredSmartphoneFeatures)

    useEffect(() => {
        fetch('https://weapon-datas-1.onrender.com/categories')
            .then(res => res.json())
            .then(data => dispatch(filterBrands(data)))
    }, []);


    const updateFilters = (checked, modelFilter) => {
        if (checked) {
            dispatch(filterBrandsAdded(modelFilter))
        }
        else {
             dispatch(filterBrandsDeleted(modelFilter))
       }
    }
    const updateFeatures = (checked, featureFilter) => {
        if (checked) {
            return  dispatch(filterFeaturesAdded(featureFilter))
        }
        else {
            return dispatch(filterFeaturesDeleted(featureFilter))
        }
    }
    console.log(filteredFeatures)
    console.log(filteredSmartPhones)

    const handleShowModels = () => {
        setIsOutAll(!isOutAll)
    }
    const handleShowFeatures = () => {
        setFeaturesOut(!isFeaturesOut)
    }

    const renderBrands = (arr) => {
      return  arr.map((item, index) => {

            if (index < 5) {
                return (
                    <div className="form-check mb-2" key={item.id}>
                        <input className="form-check-input"
                               type="checkbox" id={item.model}
                               checked={filteredSmartPhones.includes((item.model))}
                               onChange={(e) => updateFilters(e.target.checked, item.model)}
                        />
                        <label className="form-check-label text-capitalize" htmlFor={item.model}>
                            {item.model}
                        </label>
                    </div>
                )
            }
            else {
                if (isOutAll) {
                    return (
                        <>
                            <div className="form-check mb-2" key={item.id}>
                                <input className="form-check-input"
                                       type="checkbox" id={item.model}
                                       checked={filteredSmartPhones.includes((item.model))}
                                       onChange={(e) => updateFilters(e.target.checked, item.model)}
                                />
                                <label className="form-check-label text-capitalize" htmlFor={item.model}>
                                    {item.model}
                                </label>
                            </div>
                            {arr.length - 1 === index ? (
                                <p className='text-primary d-inline-block' style={{cursor: 'pointer'}}
                                   onClick={handleShowModels}>Hide some</p>
                            ) : null}
                        </>
                    )
                } else {
                    return arr.length - 1 === index ? (
                        <p className='text-primary d-inline-block' style={{cursor: 'pointer'}}
                           onClick={handleShowModels}>See all</p>
                    ) : null
                }
            }
      })
    }

    const renderFeatures = (arr) => {
        return  arr.map((item, index) => {
            if (index < 5) {
                return (
                    <div className="form-check mb-2" key={item.id}>
                        <input className="form-check-input"
                               type="checkbox" id={item.feature}
                               checked={filteredFeatures.includes(item.feature)}
                               onChange={(e) => updateFeatures(e.target.checked, item.feature)}
                        />
                        <label className="form-check-label text-capitalize" htmlFor={item.feature}>
                            {item.feature}
                        </label>
                    </div>
                )
            }
            else {
                if (isFeaturesOut) {
                    return (
                        <>
                            <div className="form-check mb-2" key={item.id}>
                                <input className="form-check-input"
                                       type="checkbox" id={item.feature}
                                       checked={filteredFeatures.includes(item.feature)}
                                       onChange={(e) => updateFeatures(e.target.checked, null ,item.feature)}
                                />
                                <label className="form-check-label text-capitalize" htmlFor={item.feature}>
                                    {item.feature}
                                </label>

                            </div>
                            {arr.length -1 === index ? (
                                <p className='text-primary d-inline-block' onClick={handleShowFeatures}
                                   style={{cursor: "pointer"}}>Hide some</p>
                            ): null}
                        </>
                    )
                }
                else {
                    return (
                        arr.length - 1 === index ? (
                                <p className='text-primary d-inline-block' onClick={handleShowFeatures}
                                   style={{cursor: "pointer"}}>See all</p>
                            ) : null
                    )
                }
            }
        })
    }

    const brandsElements = renderBrands(brands)
    const featuresElements = renderFeatures(brands)

    return (
        isMobile ? (
                <div className='container mt-3 model-feature'>
                    {brands.map((item, index) => {
                        return (
                            <div className='d-flex model-feature_buttons align-items-start'>
                                <button className='btn me-2 text-primary text-capitalize' onClick={() => {
                                    if (!filteredSmartPhones.includes(item.model)) {
                                        return dispatch(filterBrandsAdded(item.model))
                                    }
                                    else {
                                        return null
                                    }

                                }}
                                        style={{cursor: 'pointer', backgroundColor: "#EFF2F4"}}>{item.model}</button>
                                <button className='btn me-2 text-primary text-capitalize'  onClick={() => {
                                    if (!filteredFeatures.includes(item.feature)) {
                                        dispatch(filterFeaturesAdded(item.feature))
                                    }
                                    else {
                                        return null
                                    }
                                }}
                                        style={{cursor: 'pointer', backgroundColor: "#EFF2F4"}}>{item.feature}</button>
                            </div>
                        )
                    })}
                </div>
        ) : (
            <div className='side-bar d-none d-md-block'>
                <div className='accordion' id='accordionSideBar'>
                    <hr className='text-secondary mb-0'/>
                    <div className='accordion-item'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button'
                                        type='button' data-bs-toggle='collapse'
                                        data-bs-target='#collapseOne' aria-expanded='true' aria-controls='accordionOne'>
                                    <strong>Category</strong>
                                </button>
                            </h2>
                            <div id='collapseOne' className='accordion-collapse collapse show'>
                                <div className='accordion-body'>
                                    <p className='text-secondary mb-2' style={{cursor:'pointer'}} onClick={(e) => {
                                        dispatch(deleteAllSmartphones())
                                        document.body.querySelectorAll('#collapseOne p')[0].classList.remove('text-secondary')
                                        document.body.querySelectorAll('#collapseOne p').forEach(item => item.classList.remove('text-primary'))
                                        document.body.querySelectorAll('#collapseOne p')[0].classList.add('text-primary')

                                    }}>Mobile accessory</p>
                                    <p className='text-secondary mb-2' style={{cursor:'pointer'}} onClick={() => {
                                        dispatch(deleteAllSmartphones())
                                        document.body.querySelectorAll('#collapseOne p')[1].classList.remove('text-secondary')
                                        document.body.querySelectorAll('#collapseOne p').forEach(item => {
                                            item.classList.remove('text-primary')

                                        })
                                        document.body.querySelectorAll('#collapseOne p')[1].classList.add('text-primary')
                                    }}>Electronics</p>
                                    <p className='text-primary mb-2' style={{cursor:'pointer'}} onClick={() => {
                                        dispatch(smartphoneFetching())
                                        document.body.querySelectorAll('#collapseOne p')[2].classList.remove('text-secondary')
                                        document.body.querySelectorAll('#collapseOne p').forEach(item => {
                                            item.classList.remove('text-primary')

                                        })
                                        document.body.querySelectorAll('#collapseOne p')[2].classList.add('text-primary')
                                        fetch("https://weapon-datas-1.onrender.com/electronics")
                                            .then(res => res.json())
                                            .then(data => dispatch(smartphoneFetched(data)))
                                            .catch(err => console.log(err))
                                    }}>Smartphones</p>
                                    <p className='text-secondary mb-2' style={{cursor:'pointer'}} onClick={() =>
                                    {
                                        dispatch(deleteAllSmartphones())
                                        document.body.querySelectorAll('#collapseOne p')[3].classList.remove('text-secondary')
                                        document.body.querySelectorAll('#collapseOne p').forEach(item => {
                                            item.classList.remove('text-primary')

                                        })
                                        document.body.querySelectorAll('#collapseOne p')[3].classList.add('text-primary')
                                    }
                                    }>Modern tech</p>
                                </div>
                            </div>
                        </div>
                        <hr className='text-secondary mb-0'/>
                        <div className='accordion-item'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button'
                                        type='button' data-bs-toggle='collapse'
                                        data-bs-target='#collapseTwo' aria-expanded='true' aria-controls='accordionTwo'>
                                    <strong>Brands</strong>
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse show' id='collapseTwo'>
                                <div className='accordion-body'>
                                    {brandsElements}
                                </div>
                            </div>
                        </div>
                        <hr className='text-secondary mb-0'/>
                        <div className='accordion-item'>
                            <h2 className='accordion-header'>
                                <button className='accordion-button'
                                        type='button' data-bs-toggle='collapse'
                                        data-bs-target='#collapseThree' aria-expanded='true'
                                        aria-controls='accordionThree'>
                                    <strong>Features</strong>
                                </button>
                            </h2>
                            <div className='accordion-collapse collapse show' id='collapseThree'>
                                <div className='accordion-body'>
                                    {featuresElements}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

    );
}

export default SideBar;