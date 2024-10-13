import privateClient from "../client/private.client.js";

const favouriteEndpoint = {
  list: "user/favourites",
  add: "user/favourites",
  remove: ({ favouriteId }) => `user/favourites/${favouriteId}`,
};

const favouriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favouriteEndpoint.list);

      return { response };
    } catch (error) {
      return { error };
    }
  },
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, mediaRate }) => {
    try {
      const response = await privateClient.post(
        favouriteEndpoint.list({
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate,
        })
      );

      return { response };
    } catch (error) {
      return { error };
    }
  },
  remove: async ({ favouriteId }) => {
    try {
      const response = await privateClient.delete(
        favouriteEndpoint.remove({ favouriteId })
      );

      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default favouriteApi;
