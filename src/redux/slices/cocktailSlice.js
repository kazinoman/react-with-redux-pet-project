import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
};

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka");
  const data = await response.json();

  return data.drinks;
});

export const fetchCocktail = createAsyncThunk("cocktails/fetchCocktail", async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();

  return data.drinks[0];
});

const cocktailSlice = createSlice({
  name: "cocktailReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          cocktail: action.payload,
        };
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;
