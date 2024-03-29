import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {smartphoneFetched, smartphoneFetching} from "../../Redux/Actions";
import ElectronicsListItem from "../ElectronicsListItem";
import './ElectronicsList.css'
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import CloseFilters from "../CloseFilters";

const ElectronicsList = () => {
    const [currentPage, setCurretPage] = useState(1)
    const [recordsPerPage] = useState(9)

    const loading = useSelector(state => state.smartphoneStatusLoading)
    const state = useSelector(state => state.smartphones)
    const modelFilters = useSelector(state => state.filteredSmartphones)
    const featureFilters = useSelector(state => state.filteredSmartphoneFeatures )
    const dispatch = useDispatch()

    console.log(state)

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const currentRecords = state.slice(indexOfFirstRecord, indexOfLastRecord)
    const nPagesOfAllRecords = Math.ceil(state.length / recordsPerPage)
    const nPagesOfFilteredModels = Math.ceil(state.filter(s => modelFilters.includes(s.model)).length / recordsPerPage)
    const nPagesOfFilteredFeatures = Math.ceil(state.filter(s => featureFilters.includes(s.feature)).length / recordsPerPage)
    const nPagesOfFilteredFeaturesModels = Math.ceil(state.filter(s => modelFilters.includes(s.model) && featureFilters.includes(s.feature)).length / recordsPerPage)

    useEffect(() => {
        dispatch(smartphoneFetching())
        fetch("https://weapon-datas-1.onrender.com/electronics")
            .then(res => res.json())
            .then(data => dispatch(smartphoneFetched(data)))
            .catch(err => console.log(err))
    }, []);



    const renderElem = (arr) => {
        if (arr.length === 0) {
            return <h1 className='text-center'>Sorry, nothing found</h1>
        }
        else {
            return (
                arr.map(item => {
                    return  <ElectronicsListItem key={item.id} {...item} />
                })
            )
        }
    }

    const modelsFilters =  state.filter(s => modelFilters.includes(s.model)).slice(indexOfFirstRecord, indexOfLastRecord)
    const featuresFilters =  state.filter(s => featureFilters.includes(s.feature)).slice(indexOfFirstRecord, indexOfLastRecord)
    const modelFeatureFilters = state.filter(s => modelFilters.includes(s.model) && featureFilters.includes(s.feature)).slice(indexOfFirstRecord, indexOfLastRecord)


    const element = renderElem(
        modelFilters.length === 0 && featureFilters.length === 0 ? currentRecords :
            modelFilters.length !== 0 && featureFilters.length === 0 ? modelsFilters :
                modelFilters.length === 0 && featureFilters.length !== 0 ? featuresFilters : modelFeatureFilters
            // state.filter(s => {
            //
            //         if (modelFilters.includes(s.model) && modelFilters.includes(s.feature)) {
            //             console.log('asilbek')
            //             return modelFilters.includes(s.model) && modelFilters.includes(s.feature)
            //         } else {
            //             if (modelFilters.every(el => el === s.model)) {
            //                 console.log('sdf')
            //                 return modelFilters.includes(s.model)
            //             } else if (modelFilters.every(el => el === s.feature)) {
            //                 console.log('23')
            //                 return modelFilters.includes(s.feature)
            //             } else {
            //                 return false
            //             }
            //         }
            //     }
            // ).slice(indexOfFirstRecord, indexOfLastRecord)
    )

    return (
        <div className='container'>
            <CloseFilters />
            <div className='cards ms-0 ms-md-5'>{loading ? <Spinner /> : element}</div>
            <div className='d-flex justify-content-md-end justify-content-center mb-5'>
                <Pagination nPagesOfAllRecords={nPagesOfAllRecords} nPagesOfFilteredFeatures = {nPagesOfFilteredFeatures}
                            nPagesOfFilteredRecords={nPagesOfFilteredModels} nPagesOfFilteredFeaturesModels = {nPagesOfFilteredFeaturesModels}
                            currentPage={currentPage} setCurrentPage={setCurretPage} />
            </div>
        </div>
    );
}

export default ElectronicsList;