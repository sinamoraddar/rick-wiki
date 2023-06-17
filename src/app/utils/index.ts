export interface CharacterShape {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export const categorizeByStatus = (characters: CharacterShape[]) => {
  const result = { alive: 0, dead: 0, unknown: 0 };

  characters.forEach((character) => {
    switch (character.status) {
      case "Alive": {
        result.alive++;

        break;
      }
      case "Dead": {
        result.dead++;
        break;
      }
      case "unknown": {
        result.unknown++;
        break;
      }
    }
  });

  return result;
};
