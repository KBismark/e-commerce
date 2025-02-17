import React from "react";
import { configureForReact, createStore, createStoreHook, createStoreUpdater } from "statestorejs";

// Configure store for use in react env 
configureForReact(React);

export const appStoreDatabaseName = 'app';
const storeId = appStoreDatabaseName;

createStore<AppStore>(appStoreDatabaseName, appStoreDatabaseName, {});

export const useAppStore = createStoreHook<AppStore>({ provider: appStoreDatabaseName, storeId });

export const updateAppStore = createStoreUpdater<AppStore>({ provider: appStoreDatabaseName, storeId });

export default {}


interface AppStore{}
