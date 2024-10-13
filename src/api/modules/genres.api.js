import publicClient from "../client/public.client.js";

const genresEndpoint = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

const genresApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        genresEndpoint.list({ mediaType })
      );

      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default genresApi;
