const query = {
  operation: {
    name: "coffees",
    fields: ["name", "id", "imageUrl"],
  },
};

const options = {
  headers: {
    Authorization: "Bearer <token>",
  },
  debug: true,
  useHttp2: false,
};

export { query, options };
