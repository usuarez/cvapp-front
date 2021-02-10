import React from 'react'
import AppRouter from './routers/AppRouter';
import { store, persistor } from './context/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
function CvPlus() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <AppRouter />
            </PersistGate>
        </Provider>
    )
}

export default CvPlus
