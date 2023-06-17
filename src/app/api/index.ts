import { endpoints } from "./endpoints";

export const fetchCharacters = async (page: number) => {
  try {
    const result = await fetch(`${endpoints.characters}?page=${page}`);

    return result.json();
  } catch (e) {}
};
