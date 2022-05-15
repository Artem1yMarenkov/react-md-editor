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
        setMarkdown: (state: EditSliceState, action: PayloadAction<string>) => {
            state.markdown = action.payload;
        },
        setMarkdownAsync: (state: EditSliceState, action: PayloadAction<string>) => {}
    }
});

export const { setMarkdown, setMarkdownAsync } = editSlice.actions;
export default editSlice.reducer;