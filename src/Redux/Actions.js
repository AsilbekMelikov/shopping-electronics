import { createAction } from "@reduxjs/toolkit";

export const smartphoneFetching = createAction("SMARTPHONE_FETCHING");
export const smartphoneFetched = createAction("SMARTPHONE_FETCHED");
export const smartphoneFetchingError = createAction(
  "SMARTPHONE_FETCHING_ERROR"
);
export const filterBrands = createAction("FILTERS_BRANDS");
export const filterFetching = createAction("FILTER_FETCHING");
export const filterBrandsAdded = createAction("FILTER_BRANDS_ADDED");
export const filterAllBrandsDeleted = createAction("FILTER_ALL_BRANDS_DELETED");
export const filterBrandsDeleted = createAction("FILTER_BRANDS_DELETED");
export const filterFeaturesAdded = createAction("FILTER_FEATURES_ADDED");
export const filterFeaturesDeleted = createAction("FILTER_FEATURES_DELETED");
export const filterAllFeaturesDeleted = createAction(
  "FILTER_ALL_FEATURES_DELETED"
);
export const smartphonesDetails = createAction("SMARTPHONES_DETAILS");
export const smartphoneOrders = createAction("SMARTPHONE_ORDERS");
export const ordersIncrement = createAction("ORDERS_INCREMENT");
export const ordersDecrement = createAction("ORDERS_DECREMENT");
export const removeItemFromOrders = createAction("REMOVE_ITEM_FROM_ORDERS");
export const deleteAllSmartphones = createAction("DELETE_ALL_SMARTPHONES");
