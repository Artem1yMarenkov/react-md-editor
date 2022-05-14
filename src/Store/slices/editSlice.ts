import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditSliceState {
    markdown: string
}

const initialState: EditSliceState = {
    markdown: "# Sample header...",
};

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        setValue: (state: EditSliceState, action: PayloadAction<string>) => {
            state.markdown = action.payload;
        }
    }
});

export const { setValue } = editSlice.actions;
export default editSlice.reducer;