import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISongs } from "../../models";
const songAPI = createApi({
  reducerPath: "songs",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    fetSongs: builder.query<ISongs[], void>({
      query: () => "/songs",
    }),
    fetSongsById: builder.query<ISongs, void>({
      query: (id) => `/songs/${id}`,
    }),
    addSong: builder.mutation({
      query: (song: ISongs) => ({
        url: "/songs",
        method: "POST",
        body: song,
      }),
    }),
    updateSong: builder.mutation({
      query: (song: ISongs) => ({
        url: `/songs/${song._id}`,
        method: "PATCH",
        body: song,
      }),
    }),
    deleteSongsById: builder.mutation({
      query: (id) => ({
        url: `/songs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useAddSongMutation,
  useDeleteSongsByIdMutation,
  useFetSongsByIdQuery,
  useFetSongsQuery,
  useUpdateSongMutation,
} = songAPI;
export default songAPI;
