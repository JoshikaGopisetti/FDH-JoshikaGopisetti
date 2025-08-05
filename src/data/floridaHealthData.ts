export interface HealthMetrics {
  maternalMortality: { [year: number]: number };
  lowBirthWeight: { [year: number]: number };
  pretermBirth: { [year: number]: number };
  teenBirthRate: { [year: number]: number };
}

export interface Demographics {
  [race: string]: {
    lowBirthWeight: number;
    preterm: number;
    teenBirthRate: number;
  };
}

export interface CountyData {
  county: string;
  population: number;
  metrics: HealthMetrics;
  demographics: Demographics;
}

export const floridaHealthData: CountyData[] = [
  {
    county: "Miami-Dade",
    population: 2701767,
    metrics: {
      maternalMortality: { 2021: 23.1, 2022: 21.8, 2023: 20.5 },
      lowBirthWeight: { 2021: 9.8, 2022: 10.1, 2023: 9.6 },
      pretermBirth: { 2021: 11.2, 2022: 11.5, 2023: 11.0 },
      teenBirthRate: { 2021: 15.3, 2022: 14.8, 2023: 14.2 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 7.2, preterm: 8.9, teenBirthRate: 8.1 },
      "Black NH": { lowBirthWeight: 13.4, preterm: 12.1, teenBirthRate: 22.3 },
      "Hispanic": { lowBirthWeight: 8.9, preterm: 10.2, teenBirthRate: 18.7 },
      "Asian/PI": { lowBirthWeight: 6.8, preterm: 7.5, teenBirthRate: 4.2 },
      "Other": { lowBirthWeight: 9.1, preterm: 9.8, teenBirthRate: 12.4 }
    }
  },
  {
    county: "Broward",
    population: 1942389,
    metrics: {
      maternalMortality: { 2021: 19.8, 2022: 18.5, 2023: 17.2 },
      lowBirthWeight: { 2021: 8.9, 2022: 9.2, 2023: 8.7 },
      pretermBirth: { 2021: 10.1, 2022: 10.4, 2023: 9.9 },
      teenBirthRate: { 2021: 12.8, 2022: 12.3, 2023: 11.7 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 6.8, preterm: 8.2, teenBirthRate: 7.2 },
      "Black NH": { lowBirthWeight: 12.1, preterm: 11.3, teenBirthRate: 19.8 },
      "Hispanic": { lowBirthWeight: 8.2, preterm: 9.5, teenBirthRate: 16.1 },
      "Asian/PI": { lowBirthWeight: 6.2, preterm: 6.9, teenBirthRate: 3.8 },
      "Other": { lowBirthWeight: 8.5, preterm: 9.1, teenBirthRate: 10.9 }
    }
  },
  {
    county: "Orange",
    population: 1393452,
    metrics: {
      maternalMortality: { 2021: 18.2, 2022: 17.1, 2023: 16.3 },
      lowBirthWeight: { 2021: 8.4, 2022: 8.7, 2023: 8.2 },
      pretermBirth: { 2021: 9.8, 2022: 10.1, 2023: 9.6 },
      teenBirthRate: { 2021: 11.9, 2022: 11.4, 2023: 10.8 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 6.5, preterm: 7.8, teenBirthRate: 6.8 },
      "Black NH": { lowBirthWeight: 11.8, preterm: 10.9, teenBirthRate: 18.2 },
      "Hispanic": { lowBirthWeight: 7.9, preterm: 9.1, teenBirthRate: 15.3 },
      "Asian/PI": { lowBirthWeight: 5.9, preterm: 6.6, teenBirthRate: 3.5 },
      "Other": { lowBirthWeight: 8.1, preterm: 8.7, teenBirthRate: 9.8 }
    }
  },
  {
    county: "Hillsborough",
    population: 1471968,
    metrics: {
      maternalMortality: { 2021: 20.1, 2022: 19.2, 2023: 18.4 },
      lowBirthWeight: { 2021: 9.1, 2022: 9.4, 2023: 8.9 },
      pretermBirth: { 2021: 10.5, 2022: 10.8, 2023: 10.3 },
      teenBirthRate: { 2021: 13.2, 2022: 12.7, 2023: 12.1 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 7.1, preterm: 8.5, teenBirthRate: 7.5 },
      "Black NH": { lowBirthWeight: 12.8, preterm: 11.7, teenBirthRate: 20.1 },
      "Hispanic": { lowBirthWeight: 8.5, preterm: 9.8, teenBirthRate: 17.2 },
      "Asian/PI": { lowBirthWeight: 6.4, preterm: 7.1, teenBirthRate: 3.9 },
      "Other": { lowBirthWeight: 8.8, preterm: 9.4, teenBirthRate: 11.2 }
    }
  },
  {
    county: "Palm Beach",
    population: 1496770,
    metrics: {
      maternalMortality: { 2021: 17.5, 2022: 16.8, 2023: 16.1 },
      lowBirthWeight: { 2021: 8.2, 2022: 8.5, 2023: 8.0 },
      pretermBirth: { 2021: 9.5, 2022: 9.8, 2023: 9.3 },
      teenBirthRate: { 2021: 11.2, 2022: 10.8, 2023: 10.2 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 6.2, preterm: 7.5, teenBirthRate: 6.5 },
      "Black NH": { lowBirthWeight: 11.5, preterm: 10.6, teenBirthRate: 17.8 },
      "Hispanic": { lowBirthWeight: 7.8, preterm: 9.0, teenBirthRate: 14.9 },
      "Asian/PI": { lowBirthWeight: 5.7, preterm: 6.4, teenBirthRate: 3.3 },
      "Other": { lowBirthWeight: 7.9, preterm: 8.5, teenBirthRate: 9.5 }
    }
  },
  {
    county: "Pinellas",
    population: 959107,
    metrics: {
      maternalMortality: { 2021: 16.8, 2022: 16.1, 2023: 15.4 },
      lowBirthWeight: { 2021: 7.9, 2022: 8.2, 2023: 7.7 },
      pretermBirth: { 2021: 9.2, 2022: 9.5, 2023: 9.0 },
      teenBirthRate: { 2021: 10.8, 2022: 10.4, 2023: 9.8 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 5.9, preterm: 7.2, teenBirthRate: 6.2 },
      "Black NH": { lowBirthWeight: 11.2, preterm: 10.3, teenBirthRate: 16.9 },
      "Hispanic": { lowBirthWeight: 7.5, preterm: 8.7, teenBirthRate: 13.8 },
      "Asian/PI": { lowBirthWeight: 5.4, preterm: 6.1, teenBirthRate: 3.1 },
      "Other": { lowBirthWeight: 7.6, preterm: 8.2, teenBirthRate: 9.1 }
    }
  },
  {
    county: "Duval",
    population: 995567,
    metrics: {
      maternalMortality: { 2021: 22.3, 2022: 21.5, 2023: 20.8 },
      lowBirthWeight: { 2021: 10.2, 2022: 10.5, 2023: 10.0 },
      pretermBirth: { 2021: 11.8, 2022: 12.1, 2023: 11.6 },
      teenBirthRate: { 2021: 16.1, 2022: 15.6, 2023: 15.0 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 7.8, preterm: 9.1, teenBirthRate: 8.8 },
      "Black NH": { lowBirthWeight: 14.2, preterm: 13.1, teenBirthRate: 24.5 },
      "Hispanic": { lowBirthWeight: 9.1, preterm: 10.4, teenBirthRate: 19.2 },
      "Asian/PI": { lowBirthWeight: 6.9, preterm: 7.6, teenBirthRate: 4.5 },
      "Other": { lowBirthWeight: 9.4, preterm: 10.1, teenBirthRate: 13.1 }
    }
  },
  {
    county: "Lee",
    population: 760822,
    metrics: {
      maternalMortality: { 2021: 15.9, 2022: 15.2, 2023: 14.6 },
      lowBirthWeight: { 2021: 7.6, 2022: 7.9, 2023: 7.4 },
      pretermBirth: { 2021: 8.9, 2022: 9.2, 2023: 8.7 },
      teenBirthRate: { 2021: 10.2, 2022: 9.8, 2023: 9.3 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 5.6, preterm: 6.9, teenBirthRate: 6.0 },
      "Black NH": { lowBirthWeight: 10.8, preterm: 9.9, teenBirthRate: 15.7 },
      "Hispanic": { lowBirthWeight: 7.2, preterm: 8.4, teenBirthRate: 12.6 },
      "Asian/PI": { lowBirthWeight: 5.1, preterm: 5.8, teenBirthRate: 2.9 },
      "Other": { lowBirthWeight: 7.3, preterm: 7.9, teenBirthRate: 8.7 }
    }
  },
  {
    county: "Polk",
    population: 724777,
    metrics: {
      maternalMortality: { 2021: 18.7, 2022: 17.9, 2023: 17.2 },
      lowBirthWeight: { 2021: 8.7, 2022: 9.0, 2023: 8.5 },
      pretermBirth: { 2021: 10.1, 2022: 10.4, 2023: 9.9 },
      teenBirthRate: { 2021: 12.5, 2022: 12.0, 2023: 11.4 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 6.7, preterm: 8.0, teenBirthRate: 7.3 },
      "Black NH": { lowBirthWeight: 12.4, preterm: 11.5, teenBirthRate: 19.2 },
      "Hispanic": { lowBirthWeight: 8.1, preterm: 9.3, teenBirthRate: 15.8 },
      "Asian/PI": { lowBirthWeight: 6.1, preterm: 6.8, teenBirthRate: 3.6 },
      "Other": { lowBirthWeight: 8.3, preterm: 8.9, teenBirthRate: 10.5 }
    }
  },
  {
    county: "Sarasota",
    population: 434006,
    metrics: {
      maternalMortality: { 2021: 14.2, 2022: 13.6, 2023: 13.0 },
      lowBirthWeight: { 2021: 7.1, 2022: 7.4, 2023: 6.9 },
      pretermBirth: { 2021: 8.4, 2022: 8.7, 2023: 8.2 },
      teenBirthRate: { 2021: 9.5, 2022: 9.1, 2023: 8.6 }
    },
    demographics: {
      "White NH": { lowBirthWeight: 5.3, preterm: 6.6, teenBirthRate: 5.8 },
      "Black NH": { lowBirthWeight: 10.2, preterm: 9.3, teenBirthRate: 14.8 },
      "Hispanic": { lowBirthWeight: 6.8, preterm: 8.0, teenBirthRate: 11.9 },
      "Asian/PI": { lowBirthWeight: 4.9, preterm: 5.6, teenBirthRate: 2.7 },
      "Other": { lowBirthWeight: 7.0, preterm: 7.6, teenBirthRate: 8.2 }
    }
  }
];

export const getMetricDescription = (metric: string): string => {
  const descriptions: { [key: string]: string } = {
    maternalMortality: "Deaths per 100,000 live births within 42 days of pregnancy termination",
    lowBirthWeight: "Percentage of live births weighing less than 2,500 grams (5.5 pounds)",
    pretermBirth: "Percentage of live births occurring before 37 weeks of gestation",
    teenBirthRate: "Births per 1,000 females aged 15-19 years"
  };
  return descriptions[metric] || "";
};

export const getMetricUnit = (metric: string): string => {
  const units: { [key: string]: string } = {
    maternalMortality: "per 100,000 births",
    lowBirthWeight: "%",
    pretermBirth: "%",
    teenBirthRate: "per 1,000 teens"
  };
  return units[metric] || "";
}; 