// Define an interface 'Festival' that represents the structure of a festival object
// This interface ensures that every festival object will have two properties:
// 1. 'name' - a string that stores the name of the festival.
// 2. 'date' - a string that represents the date of the festival (in DD-MM format).
import GheeSankranti from "/public/Ghee_Sankranti.jpeg";
import Ghughutiya from "/public/MakarSankranti.jpg";
import Run from "/public/fair/RUN.avif"
import Harela from "/public/festival/harela.jpg"
import {StaticImageData} from "next/image";
import MakarSankranti from "/public/MakarSankranti.jpg";
import UttarayaniMela from "/public/UttarayaniMela.jpg"


const currentDate = new Date();
currentDate.getFullYear();

export interface Fair {
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
export const fair: Fair[] = [
    {
        date: "14-01",
        title: "Uttarayani Mela",
        subTitle: {
            date:`JANUARY ${currentDate.getFullYear()}` ,
            location:"UTTARAKHAND"
        },
        description:"The Uttarayani Fair, celebrated on Makara Sankranti in January, is a vibrant cultural festival in Uttarakhand, with the grandest celebrations in Bageshwar. Held at the confluence of the Sarayu, Gomti, and Sunder Bhagirathi rivers, the fair draws thousands of devotees and tourists. Devotees take a holy dip, seeking blessings for a prosperous year, while the air resonates with folk songs like Jhoras, Chancharis, and Bairas. The mela showcases colorful traditional attire, captivating folk performances, and a culinary paradise of sweet and savory delicacies. Celebrations also thrive in Almora, Nainital, and Haridwar.",
        image: UttarayaniMela
    },
    {
        date: "14-09",
        title: "14th Nainital Monsoon Mountain Marathon",
        subTitle: {
            date:`14 SEPTEMBER ${currentDate.getFullYear()} - 7:00 AM` ,
            location:"DSA GROUND, NAINITAL, UTTARAKHAND"
        },
        description: `Gear up for the 14th Nainital Monsoon Mountain Marathon — “Run for Uttarakhand”, celebrating 25 years of Prosperity, Progress & Pride! Join us on 14th September at 7:00 AM at the DSA Ground, Nainital, and let every step you take echo the spirit of our hills. Don’t miss this chance to be part of a legacy of strength, unity, and determination. The last date to register is 28th August 2025. For more details or to register, scan the QR code, call us at +91 97587 27564, or email us at run2live.in@gmail.com.`,
        image: Run
    }

];

// Define a function 'getUpcomingFestival' which returns the festival happening today or the next upcoming festival,
// and if all festivals for the current year have passed, it returns the first festival of the next year.
export const getUpcomingFair = (): Fair => {

    // Get the current date.
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed in JS, so add 1.

    // Function to compare festival date with current date, accounting for annual recurrence.
    const compareDate = (fairDate: string): number => {
        const [day, month] = fairDate.split('-').map(Number);

        // Create date objects with the current year.
        const festivalThisYear = new Date(currentDate.getFullYear(), month - 1, day);
        const today = new Date(currentDate.getFullYear(), currentMonth - 1, currentDay);

        // Calculate the difference in time (in milliseconds).
        return festivalThisYear.getTime() - today.getTime();
    };

    // Filter the 'festivals' array to only keep future festivals or today's festival.
    const upcomingFestivals = fair
        .filter(fair => compareDate(fair.date) >= 0)
        .sort((a, b) => compareDate(a.date) - compareDate(b.date));

    // If there are upcoming festivals for the current year, return the first one.
    if (upcomingFestivals.length > 0) {
        return upcomingFestivals[0];
    }

    // If no festivals are left for this year, return the first festival of the next year.
    // Assume the festivals repeat annually.
    return fair.sort((a, b) => compareDate(a.date) - compareDate(b.date))[0];
};