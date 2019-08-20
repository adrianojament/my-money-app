import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducers'
import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer