

export interface City {
    name: string;
    id: number;
    population: number;
    province: string;
    tourismRating: number;
    temperatureRange: string[];
    foundedYear: number;
  }
  
  export const cubanCitiesData: City[] = [
    {
      name: "La Habana",
      id: 1,
      population: 2106146,
      province: "La Habana",
      tourismRating: 9,
      temperatureRange: ["24°C", "28°C"],
      foundedYear: 1514
    },
    {
      name: "Trinidad",
      id: 2,
      population: 45041,
      province: "Sancti Spíritus",
      tourismRating: 8.5,
      temperatureRange: ["25°C", "30°C"],
      foundedYear: 1514
    },
    {
      name: "Santiago de Cuba",
      id: 3,
      population: 431272,
      province: "Santiago de Cuba",
      tourismRating: 8,
      temperatureRange: ["26°C", "31°C"],
      foundedYear: 1515
    },
    {
      name: "Cienfuegos",
      id: 4,
      population: 147110,
      province: "Cienfuegos",
      tourismRating: 8,
      temperatureRange: ["25°C", "30°C"],
      foundedYear: 1819
    },
    {
      name: "Varadero",
      id: 5,
      population: 25000,
      province: "Matanzas",
      tourismRating: 9.5,
      temperatureRange: ["24°C", "28°C"],
      foundedYear: 1889
    },
    {
      name: "Santa Clara",
      id: 6,
      population: 211925,
      province: "Villa Clara",
      tourismRating: 7.5,
      temperatureRange: ["24°C", "28°C"],
      foundedYear: 1689
    },
    {
      name: "Holguín",
      id: 7,
      population: 287881,
      province: "Holguín",
      tourismRating: 8,
      temperatureRange: ["25°C", "30°C"],
      foundedYear: 1720
    },
    {
      name: "Viñales",
      id: 8,
      population: 27000,
      province: "Pinar del Río",
      tourismRating: 8.5,
      temperatureRange: ["24°C", "28°C"],
      foundedYear: 1879
    },
    {
      name: "Baracoa",
      id: 9,
      population: 43062,
      province: "Guantánamo",
      tourismRating: 8,
      temperatureRange: ["26°C", "31°C"],
      foundedYear: 1511
    },
    {
      name: "Matanzas",
      id: 10,
      population: 133769,
      province: "Matanzas",
      tourismRating: 8,
      temperatureRange: ["24°C", "28°C"],
      foundedYear: 1693
    },
    {
      name: "Bayamo",
      id: 11,
      population: 238544,
      province: "Granma",
      tourismRating: 7.5,
      temperatureRange: ["26°C", "31°C"],
      foundedYear: 1513
    }
  ];
  