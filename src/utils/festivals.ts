// Define an interface 'Festival' that represents the structure of a festival object
// This interface ensures that every festival object will have two properties:
// 1. 'name' - a string that stores the name of the festival.
// 2. 'date' - a string that represents the date of the festival (in DD-MM format).
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";
import Ghughutiya from "/public/MakarSankranti.jpg";
import Harela from "/public/festival/harela.jpg"
import DussehraImg from "/public/festival/dussehra.avif";
import DiwaliImg from "/public/festival/diwali.avif";
import EgaasImg from "/public/festival/egaas.jpeg";
import {StaticImageData} from "next/image";


const currentDate = new Date();
currentDate.getFullYear();

export interface Festival {
    date: string; // The date of the festival in DD-MM format, e.g., "16-07".
    title: string;  // The name of the festival, e.g., "Harela".
    subTitle: {
        date: string;
        location: string;
    }
    description: string;
    image: StaticImageData;
    location?: string;
}

// Define a constant 'festivals', which is an array of objects, each object conforming
// to the 'Festival' interface. This array contains details about several Uttarakhand festivals.
export const festivals: Festival[] = [

    // {name: "Phool Dei", date: "14-03", description:" "},
    // {name: "Bikhauti", date: "14-04", description:" "},

    // {name: "Nanda Devi Raj Jat", date: "05-09", description:" "},
    // {name: "Kauthig", date: "22-02", description:" "},


    // {name: "Egaas Bhagwal", date: "12-11",
    //
    // description:"Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called \"Bhailo\", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills."},


    {
        date: "14-01",
        title: "Ghughutiya",
        subTitle: {
            date:`14 JANUARY ${currentDate.getFullYear()}` ,
            location:"UTTARAKHAND"
        },
        description: "It marks the transition of the sun into Capricorn (Makar Rashi) and the start of longer days. In Uttarakhand, it is celebrated with great joy and enthusiasm, especially in the hill areas. People gather in open fields to fly kites, symbolizing the victory of light over darkness. Bonfires are lit, and people prepare traditional sweets like tilgul (made of sesame and jaggery) to share with friends and family. The festival also has agricultural importance, marking the end of winter and the beginning of the harvest season. Devotees take a holy dip in the Ganges or other rivers, believing it cleanses their sins. It’s a time for prayers for a good harvest, prosperity, and happiness in the coming year. People also worship the Sun God for health and well-being." ,
        image: Ghughutiya
    },

    {
        date: "15-03",
        title: "Phool Dei",
        subTitle: {
            date:`15 MARCH ${currentDate.getFullYear()}` ,
            location:"UTTARAKHAND"
        },
        description: "Phool Dei is a traditional harvest festival and folk festival celebrated in the Kumaon and Garhwal regions of Uttarakhand, India. It occurs on the first day of the Hindu calendar month Chaitra season (March-April). The festival symbolizes the arrival of spring and the beginning of the agricultural season. It is the time when flowers blossom and this is accompanied by the ceremonial pudding called dei which is made by the locals using jaggery or gud, curd and flour. This dish is an integral part of the festival. Young girls are an integral part of this festival of Uttarakhand. They go from house to house, singing the folk song of 'Phool Dei' with jaggery, rice, and coconut offering. It is believed that they bless the homes by placing flowers and rice on the doorsteps. In return, the young girls are offered sweets and blessings for their act." ,
        image: Ghughutiya
    },
    {
        date: "16-07",
        title: "Harela",
        subTitle: {
            date:`16 JULY ${currentDate.getFullYear()}` ,
            location:"UTTARAKHAND"
        },
        description: "Among the people of Uttarakhand, every season has some festivals, and each festival is celebrated appropriately. Harela is a festival that marks the beginning of the rainy season or monsoon. The people belonging to the Kumaon community celebrate this festival during the month of Shravana, i.e., July-August. Mythologically, this festival commemorates the wedding of Lord Shiva and Parvati. People make small idols or dikars of gods like Maheshwar, Ganesh. This festival is followed by Bhitauli, which is celebrated in the month of Chaitra, i.e., March - April. It revolves around agriculture where women sow seeds in the soil and by the end of the festival they reap the harvest which is called harela. This allows them to test the quality of their seeds. During this festival, brothers also provide gifts for their sisters.",
        image: Harela

    },
    {
        date: "16-08",
        title: "Ghee Sankranti",
        subTitle: {
            date:`16 AUGUST ${currentDate.getFullYear()}` ,
            location:"UTTARAKHAND"
        },
        description: "Ghee Sankranti is a festival that portrays the gratitude of the locals who earn a living via the occupation of farming by marking the onset of the harvesting season. It is also known as the 'Olgia' festival and is celebrated on the first day of August (Bhado), a time wherein the crops are thriving, and the milk-laden cattle are ready to be milked. In terms of how the celebration has gradually evolved from over the years, the ancient tradition saw nephews and sons-in-laws give presents to their maternal uncles and fathers-in-laws respectively. However, today's context is summarised by the fact that agriculturists and artisans give presents to their landowners. Common presents that are exchanged include axes, ghee, datkhocha (metallic toothpick) and firewood. An important ritual of this festival includes that of eating ghee and chapatis stuffed with urad dal!",
        image: Ghughutiya

    },
    {
        date: "02-10",
        title: "Dussehra (Vijayadashami)",
        subTitle: {
            date: `Tenth day of Navaratri`,
            location: "UTTARAKHAND"
        },
        description:
            "Dussehra (Vijayadashami) commemorates Lord Rama’s victory over Ravana and the triumph of good over evil. In Uttarakhand, it is marked by Ramlila performances (dramatic retellings of the Ramayana), the burning of Ravana effigies, processions, and fairs. Villagers and townsfolk participate in community events, and it’s also a popular time for seasonal markets and family outings. The date moves each year with the lunar calendar.",
        image: DussehraImg
    },
    {
        date: "21-10",
        title: "Diwali (Deepawali)",
        subTitle: {
            date: `21 OCTOBER ${currentDate.getFullYear()}`,
            location: "UTTARAKHAND"
        },
        description:
            "Diwali — the Festival of Lights — is celebrated across Uttarakhand with clay lamps (diyas), rangoli, fireworks, Lakshmi puja, and feasts. Homes and temples are cleaned and decorated, sweets and gifts are exchanged, and families gather for prayers and social visits. In the hills, Diwali is also a time to remember ancestors and celebrate the end of the harvest season. (Date follows the Hindu lunar calendar and changes every year.)",
        image: DiwaliImg
    },
    {
        date: "01-11",
        title: "Egaas Bagwal",
        subTitle: {
            date: `~11 days after Diwali`,
            location: "UTTARAKHAND"
        },
        description: "Egaas Bagwal is a unique Uttarakhand festival observed roughly 11 days after Diwali. It is celebrated with singing, dancing, local delicacies, and a striking fire-rope tradition called 'Bhailo' where villagers spin a flaming rope — a dramatic symbol of light’s triumph over darkness. Homes are decorated, families come together for meals and rituals, and traditional folk performances are common. The festival reflects the region’s ancestral customs and communal spirit.",
        image: EgaasImg
    }
];

// // Define a function 'getUpcomingFestival' which returns the festival happening today or the next upcoming festival,
// // and if all festivals for the current year have passed, it returns the first festival of the next year.
// export const getUpcomingFestival = (): Festival => {
//
//     // Get the current date.
//     const currentDate = new Date();
//     const currentDay = currentDate.getDate();
//     const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed in JS, so add 1.
//
//     // Function to compare festival date with current date, accounting for annual recurrence.
//     const compareDate = (festivalDate: string): number => {
//         const [day, month] = festivalDate.split('-').map(Number);
//
//         // Create date objects with the current year.
//         const festivalThisYear = new Date(currentDate.getFullYear(), month - 1, day);
//         const today = new Date(currentDate.getFullYear(), currentMonth - 1, currentDay);
//
//         // Calculate the difference in time (in milliseconds).
//         return festivalThisYear.getTime() - today.getTime();
//     };
//
//     // Filter the 'festivals' array to only keep future festivals or today's festival.
//     const upcomingFestivals = festivals
//         .filter(festival => compareDate(festival.date) >= 0)
//         .sort((a, b) => compareDate(a.date) - compareDate(b.date));
//
//     // If there are upcoming festivals for the current year, return the first one.
//     if (upcomingFestivals.length > 0) {
//         return upcomingFestivals[0];
//     }
//
//     // If no festivals are left for this year, return the first festival of the next year.
//     // Assume the festivals repeat annually.
//     return festivals.sort((a, b) => compareDate(a.date) - compareDate(b.date))[0];
// };




export const getUpcomingFestival = (): Festival => {
    const now = new Date();
    // Normalize 'today' to midnight so comparisons aren't affected by time-of-day.
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Returns milliseconds until the next occurrence of the festival (>= 0).
    const msUntilNext = (festivalDate: string): number => {
        const [day, month] = festivalDate.split('-').map(Number);
        let fest = new Date(now.getFullYear(), month - 1, day);

        // If this year's date is already past, use next year's date.
        if (fest.getTime() < today.getTime()) {
            fest.setFullYear(fest.getFullYear() + 1);
        }

        return fest.getTime() - today.getTime();
    };

    // Make a shallow copy and sort by time until next occurrence.
    const sorted = festivals.slice().sort((a, b) => msUntilNext(a.date) - msUntilNext(b.date));

    return sorted[0];
};

