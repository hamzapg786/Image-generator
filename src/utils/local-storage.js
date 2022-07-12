const local_storage = () => {
  return {
    get: (item) => {
      return JSON.parse(localStorage.getItem(item)) || [];
    },
    set: (item, data) => {
      localStorage.setItem(
        item,
        JSON.stringify([...local_storage().get("todo"), data])
      );
    },
    delete: (item, data) => {
      localStorage.setItem(item, JSON.stringify(data));
    },
  };
};

export default local_storage;
