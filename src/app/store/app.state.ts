import { stateName } from "./shared/shared.selector"
import { sharedState } from "./shared/shared.state"
import { getSpinner } from "./shared/shared.reducer"

export interface appState {
    [stateName]: sharedState
}

export const appReducer = {
    [stateName]: getSpinner
}