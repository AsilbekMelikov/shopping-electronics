import { createReducer} from "@reduxjs/toolkit";
import {
    smartphoneFetching,
    smartphoneFetched,
    smartphoneFetchingError,
    filterFetching,
    filterFetched,
    filterBrandsAdded,
    filterBrandsDeleted,
    filterBrands,
    findingNumbersOfPages,
    filteringPages,
    filtersChecking,
    filterAllBrandsDeleted,
    smartphonesDetails,
    smartphoneOrders,
    ordersIncrement,
    ordersDecrement,
    removeItemFromOrders,
    rateStars,
    hoverStars,
    mouseEnterStarHovering,
    mouseLeaveStarHovering,
    filterFeaturesAdded,
    filterFeaturesDeleted,
    filterAllFeaturesDeleted, deleteAllSmartphones
} from "./Actions";

const initialValue = {
    //Smartphones
    smartphones: [],
    smartphoneStatusLoading: false,
    // Filters
    filterBrands: [],
    filteredSmartphones: [],
    filterStatusLoading:  false,
    filteredSmartphoneFeatures: [],
    //FilterPages
    smartphoneDetails: [],
    //Orders
    orders: [],
}

const SmartphoneReducer = createReducer(initialValue, builder =>  {
    builder
        //Smartphones

        .addCase(smartphoneFetching, state => {
            state.smartphoneStatusLoading = true
        })
        .addCase(smartphoneFetched, (state, action) => {
            state.smartphoneStatusLoading = false
            state.smartphones = action.payload
        })

        //Filters
        .addCase(filterBrands, (state, action) => {
            state.filterBrands = action.payload
        })
        .addCase(filterFetching, state => {
            state.filterStatusLoading = true
        })
        .addCase(filterBrandsAdded, (state, action) => {
            state.smartphoneStatusLoading = false
            state.filteredSmartphones.push(action.payload)
        })
        .addCase(filterBrandsDeleted, (state, action) => {
            state.smartphoneStatusLoading = false
            const index = state.filteredSmartphones.indexOf(action.payload)
            if (index > -1) {
                state.filteredSmartphones.splice(index, 1)
            }
        })
        .addCase(filterFeaturesAdded, (state, action) => {
            state.smartphoneStatusLoading = false
            state.filteredSmartphoneFeatures.push(action.payload)
        })
        .addCase(filterFeaturesDeleted, (state, action) => {
            state.smartphoneStatusLoading = false
            const index = state.filteredSmartphoneFeatures.indexOf(action.payload)
            if (index > -1) {
                state.filteredSmartphoneFeatures.splice(index, 1)
            }
        })
        .addCase(filterAllBrandsDeleted, (state, action) => {
            state.filteredSmartphones.splice(0, state.filteredSmartphones.length)
        })
        .addCase(filterAllFeaturesDeleted, state => {
            state.filteredSmartphoneFeatures.splice(0, state.filteredSmartphoneFeatures.length)
        })
        //FilterPages
        .addCase(smartphonesDetails, (state, action) => {
            state.smartphoneDetails = action.payload
        })
        //Orders
        .addCase(smartphoneOrders, (state, action) => {
            state.smartphones.map(item => {
                if (item.id === action.payload.id) {
                    return item.liked = false
                }
            })
            const orderIndex = state.orders.findIndex(item => item.id === action.payload.id)
            let newOrder;
            if (orderIndex < 0 ) {
                newOrder = {
                    ...action.payload,
                    quantity: 1
                }
                state.orders.push(newOrder)
            }

        })
        .addCase(ordersIncrement, (state, action) => {
            state.orders.map(item => {
                if (item.id === action.payload.id) {
                   return item.quantity = item.quantity + 1
                }
                else {
                    return item.quantity
                }
            })
        })
        .addCase(ordersDecrement, (state, action) => {
            state.orders.map(item => {
                if (item.id === action.payload.id) {
                   if (item.quantity < 2) {
                       return item.quantity
                   }
                   else {
                       return item.quantity = item.quantity - 1
                   }
                }
                else {
                    return item.quantity
                }
            })
        })
        .addCase(removeItemFromOrders, (state, action) => {
           state.orders = state.orders.filter(item => item.id !== action.payload.id)
        })
        .addCase(deleteAllSmartphones, state => {
           state.smartphones.splice(0, state.smartphones.length)
        })



})

export default SmartphoneReducer