
export const Countries: Country[] = [
    { name: 'Palestine', cities: ['Nablus', 'Ramallah', 'Jenin'] },
    { name: 'Jordan', cities: ['Amman', 'Irbid', 'Jarash'] },
    { name: 'Lebanon', cities: ['Beirut'] },
    { name: 'Saudi Arabia', cities: ['Mecca', 'Madina', 'Jaddah'] }
];

export interface Country {
    name: string,
    cities: string[];
}