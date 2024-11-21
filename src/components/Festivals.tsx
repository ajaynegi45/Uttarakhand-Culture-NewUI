import React from 'react';
import {getUpcomingFestival} from "@/utils/festivals";
import SectionCard from "@/components/ui/SectionCard";
import Nanda_Sunanda from "/public/Nanda-Sunanda.webp";


const Festivals: React.FC = () => {
    const upcomingFestival = getUpcomingFestival();  // Get the upcoming festival

    // Function to format a date in DD-MM-YYYY format
    const formatFestivalDate = (festivalDate: string): string => {
        const [day, month] = festivalDate.split('-');
        const currentYear = new Date().getFullYear();
        return `${day}-${month}-${currentYear}`;  // Convert to DD-MM-YYYY format
    };

    return (
        <div>
            <h1>Upcoming Festivals in Uttarakhand</h1>
            {upcomingFestival ? (
                <div>
                    <strong>{upcomingFestival.name}</strong> - {formatFestivalDate(upcomingFestival.date)}
                </div>
            ) : (
                <p>No upcoming festivals</p>
            )}

            <SectionCard cardTitle={"UPCOMING FESTIVAL"} title={upcomingFestival.name}
                         subTitle={formatFestivalDate(upcomingFestival.date)}
                         description={"Egaas Bagwal is a unique festival celebrated 11 days after Diwali in the hilly regions of Uttarakhand. According to local belief, Lord Rama returned from exile late to these areas, which is why people here celebrate Egaas with great enthusiasm. The festival involves preparing traditional delicacies, performing joyful folk dances, and lighting up homes, much like Diwali. A standout tradition is spinning a flaming rope called \"Bhailo\", where villagers twirl a fire-lit rope, creating a mesmerizing display symbolizing light’s triumph over darkness. Egaas Bagwal reflects Uttarakhand’s rich cultural heritage, offering a glimpse into the community’s deep-rooted traditions and festive spirit. For the people of Uttarakhand, it’s not just a festival, but a meaningful tribute to their ancestors and the vibrant life of the hills."}
                         image={Nanda_Sunanda} readMoreLink={""}/>
        </div>
    );
};

export default Festivals;
