export interface Proverb {
    hindi: String,
    english: string,
    meaning?: String
}

export const proverbs: Proverb[] = [
    {
        hindi: "पहाड़ का पानी, पहाड़ की जवानी, पहाड़ के काम नहीं आती",
        english: "The water and the youth of the mountains are never useful to the mountains",
        meaning: "Water flows down in the valley and the youth go out to cities to earn, are not useful to the mountains"
    },
    {
        hindi: "अति रुख्यार रूख हूं छुटुछ अति तैरक गाड़ हूं बगछ",
        english: "Even the most skillful climbers fall and the most skillful swimmers drown."
    }
];


export const getRandomProverb = (): Proverb => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    // return proverbs[randomIndex];

    return proverbs[0];
};