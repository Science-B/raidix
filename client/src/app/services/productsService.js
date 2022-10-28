import httpService from "./httpService";
const productsService = {
  get: async () => {
    const { data } = await httpService.get();
    return data;
  },
  remove: async (id) => {
    const { data } = await httpService.delete(id);
    return data;
  },
  update: async (id, content) => {
    console.log(content);
    const { data } = await httpService.put(id, content);
    return data;
  },
  add: async (content) => {
    const { data } = await httpService.post(
      "http://localhost:8080/api/",
      content
    );
    return data;
  },
};
export default productsService;
