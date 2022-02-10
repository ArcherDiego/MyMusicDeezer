import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'searchBar',
    initialState: {
        title: 'title',
        autor: 'autor',
        image: null,
        audio: null,
    },
    reducers: {
        atualizar: () => true,
    }
})

export const { atualizar } = slice.actions
export default slice.reducer
