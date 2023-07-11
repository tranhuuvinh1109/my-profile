import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ActiveState {
	active: string
}


const initialState: ActiveState = {
	active: '#home'
}

const activeSlice = createSlice({
	name: 'active',
	initialState,
	reducers: {
		changeActive: (state, action: PayloadAction<string>) => {
			state.active = action.payload;
		},
	}
})

export const { changeActive } = activeSlice.actions
export default activeSlice.reducer