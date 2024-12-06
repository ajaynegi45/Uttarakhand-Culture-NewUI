// Define an interface 'Festival' that represents the structure of a festival object
// This interface ensures that every festival object will have two properties:
// 1. 'name' - a string that stores the name of the festival.
// 2. 'date' - a string that represents the date of the festival (in DD-MM format).
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";

export interface Festival {
    name: string;  // The name of the festival, e.g., "Harela".
    date: string;  // The date of the festival in DD-MM format, e.g., "16-07".
    description: string;
    location?: string;
    image?: string;
}

// Define a constant 'festivals', which is an array of objects, each object conforming
// to the 'Festival' interface. This array contains details about several Uttarakhand festivals.
export const festivals: Festival[] = [
    {name:"Makar Sankranti", date:"14-01",description:"It marks the transition of the sun into Capricorn (Makar Rashi) and the start of longer days. In Uttarakhand, it is celebrated with great joy and enthusiasm, especially in the hill areas. People gather in open fields to fly kites, symbolizing the victory of light over darkness. Bonfires are lit, and people prepare traditional sweets like tilgul (made of sesame and jaggery) to share with friends and family. The festival also has agricultural importance, marking the end of winter and the beginning of the harvest season. Devotees take a holy dip in the Ganges or other rivers, believing it cleanses their sins. It’s a time for prayers for a good harvest, prosperity, and happiness in the coming year. People also worship the Sun God for health and well-being."},
    {name: "Ghee Sankranti", date: "17-02", description:" "},
    {name: "Phool Dei", date: "14-03", description:" "},
    {name: "Bikhauti", date: "14-04", description:" "},
    {name: "Harela", date: "16-07", description:" "},
    {name: "Nanda Devi Raj Jat", date: "05-09", description:" "},
    {name: "Kauthig", date: "22-02", description:" "},
    {name: "Egaas Bhagwal", date: "12-11", description:"Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called \"Bhailo\", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills."},
];

// Define a function 'getUpcomingFestival' which returns the festival happening today or the next upcoming festival,
// and if all festivals for the current year have passed, it returns the first festival of the next year.
export const getUpcomingFestival = (): Festival => {

    // Get the current date.
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed in JS, so add 1.

    // Function to compare festival date with current date, accounting for annual recurrence.
    const compareDate = (festivalDate: string): number => {
        const [day, month] = festivalDate.split('-').map(Number);

        // Create date objects with the current year.
        const festivalThisYear = new Date(currentDate.getFullYear(), month - 1, day);
        const today = new Date(currentDate.getFullYear(), currentMonth - 1, currentDay);

        // Calculate the difference in time (in milliseconds).
        return festivalThisYear.getTime() - today.getTime();
    };

    // Filter the 'festivals' array to only keep future festivals or today's festival.
    const upcomingFestivals = festivals
        .filter(festival => compareDate(festival.date) >= 0)
        .sort((a, b) => compareDate(a.date) - compareDate(b.date));

    // If there are upcoming festivals for the current year, return the first one.
    if (upcomingFestivals.length > 0) {
        return upcomingFestivals[0];
    }

    // If no festivals are left for this year, return the first festival of the next year.
    // Assume the festivals repeat annually.
    return festivals.sort((a, b) => compareDate(a.date) - compareDate(b.date))[0];
};


