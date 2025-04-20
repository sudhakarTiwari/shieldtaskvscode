export const useSearchFilter = (data, searchTerm) => {
  if (!searchTerm) return data;
  return data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
