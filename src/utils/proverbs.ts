export interface Proverb {
    hindi: string;
    english: string;
    meaning?: string;
}

export const proverbs: Proverb[] = [
    {
        hindi: "पहाड़ का पानी, पहाड़ की जवानी, पहाड़ के काम नहीं आती",
        english: "The water and the youth of the mountains are never useful to the mountains",
        meaning: "Water flows down in the valley and the youth go out to cities to earn, are not useful to the mountains"
    },
    {
        hindi: "अति रुख्यार रूख हूं छुटुछ अति तैरक गाड़ हूं बगछ",
        english: "Even the most skillful climbers fall and the most skillful swimmers drown.",
        meaning: "No matter how talented or experienced, anyone can face failure or danger."
    },
    {
        hindi: "बोली बात बीती रात दुबरा नि आन्द।",
        english: "Spoken words and past nights never return.",
        meaning: "Words once spoken and time once passed can never be taken back—use both wisely."
    },
    {
        hindi: "जैकू भात नि खाण, विकू गीत क्या गाण।",
        english: "One who doesn’t eat rice, how can they sing its praise?",
        meaning: "Only those who experience something can truly speak about it."
    }
];

export const getRandomProverb = (): Proverb => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    return proverbs[randomIndex];
};
