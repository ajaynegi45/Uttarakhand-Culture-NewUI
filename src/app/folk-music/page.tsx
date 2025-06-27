import styles from './page.module.css';

const folkMusicForms = [
    {
        name: "🎙️ Jagar",
        description:
            "A spiritual musical ritual that invokes local deities and ancestors. It is performed at night using repetitive chanting and music to enter a trance-like state. Jagar is often led by a 'Jagariya' (ritual singer) and holds deep cultural and religious importance.",
        instruments: ["Dhol", "Damau", "Thali", "Hurka"]
    },
    {
        name: "🎵 Jhoda",
        description:
            "A group folk song sung in a rhythmic call-and-response style during festivals and social gatherings. Jhoda reflects themes of love, harmony, and rural life, usually sung by both men and women while dancing in a circular formation.",
        instruments: ["Dhol", "Damau", "Hudka"]
    },
    {
        name: "🎶 Chhopati",
        description:
            "A romantic duet-style folk song sung between men and women in remote mountain villages, often during harvest season or village fairs. Lyrics are witty and conversational.",
        instruments: ["Hudka", "Manjira", "Flute"]
    },
    {
        name: "🌸 Basanti",
        description:
            "These songs are sung during the spring festival of Basant Panchami. Basanti songs celebrate renewal, fertility, and love, and are often performed by women in colorful attire.",
        instruments: ["Dholki", "Thali"]
    },
    {
        name: "🪕 Bhagna",
        description:
            "Emotional ballads of migration, separation, and longing—often sung by women when their husbands migrate for work. These songs capture the pain of waiting and the deep emotional ties to home.",
        instruments: ["Flute", "Thali"]
    }
];

export default function FolkMusic() {
    return (
        <main className={styles.pageContainer}>
            <h1 className={styles.heading}>Folk Music of Uttarakhand</h1>
            <p className={styles.paragraph}>
                Discover the rich tapestry of Uttarakhand&#39;s folk music—each form carrying the voice of the hills, traditions, and timeless stories of its people.
            </p>

            <div className={styles.musicCard}>
                <h2 className={styles.musicTitle}>🌺 Māngal Geet (मांगल गीत)</h2>
                <p className={styles.musicDescription}>
                    Māngal Geet are traditional ceremonial songs sung during marriages and sacred occasions in Uttarakhand. These lyrical blessings are performed primarily by women, expressing joy, love, spiritual symbolism, and invoking divine grace through poetic storytelling.
                </p>

                <h4 className={styles.musicTitle}>🎶 सगुन बोल</h4>
                <p className={styles.musicDescription}>
                    औ बैठ कागा हरिया बिरीछ<br />
                    बोल बोल कागा चौंदिसि सगुन<br />
                    बिचारा बरमा जी तैं कागा की बोली<br />
                    बेदमुखि बरमा जी बेद पढ़ला<br />
                    सगुनी कागा सगून बोललो
                </p>

                <h4 className={styles.musicTitle}>🎶 सगुन न्युतो गीत</h4>
                <p className={styles.musicDescription}>
                    पिंजरी का सूवा अटारी का सूवा<br />
                    दे औ सूवा तू स्वागिण्यूँ न्यूतो<br />
                    सोना पंखी सूवा तू लाल ठोंट सूवा<br />
                    दे औ सूवा तू स्वागिण्यूँ न्यूतो<br />
                    जण्दो नि छौं मैं पछण्दो नि छौं मैं<br />
                    कै घर कैं देबि न्यूतिकि औलो?<br />
                    बरमा जी का घर होली साबित्री देबि<br />
                    वे घर वीं देबि न्यूतिकि ऐई<br />
                    बिस्णु जी का घर होली लछमि देबि<br />
                    वे घर वीं देबि न्यूतिकि ऐई<br />
                    सिवजी का घर होली पारबति देबि<br />
                    वे घर वीं देबि न्यूतिकि ऐयी<br />
                    दे औ सूवा तू स्वागिण्यूँ न्यूत
                </p>

                <h4 className={styles.musicTitle}>🎶 हल्दी बान गीत</h4>
                <p className={styles.musicDescription}>
                    दे द्यावा दे द्यावा मेरा बरमा जी, दे द्यावा हल़दी का बान हे<br />
                    जिया रेयाँ जिया मेरा बरमा जी, जौन दीनि हल़दी का बान हे<br />
                    दे द्यावा दे द्यावा मेरी माँजी हे, दे द्यावा हल़दी का बान हे<br />
                    जिया रेयाँ जिया मेरी बड़ी जी, जौन दीनि दै दूध का बान हे<br />
                    दे द्यावा दे द्यावा मेरी चची जी, दे द्यावा घ्यू तेल़ का बान हे<br />
                    जिया रेयाँ जिया मेरा पुफू जी, जौन दीनि चन्दन का बान हे<br />
                    दे द्यावा दे द्यावा मेरी भाभी जी, दे द्यावा समोया का बान हे<br />
                    दे द्यावा दे द्यावा मेरी दीदी जी, दे द्यावा कचूर का बान हे<br />
                    दे द्यावा कचूर का बान हे...
                </p>

                <h4 className={styles.musicTitle}>🎶 मंगल स्नान गीत</h4>
                <p className={styles.musicDescription}>
                    क्यान होये क्यान होये, कुण्ड कौज्याल़?<br />
                    क्यान होये होलो सूरिज धूमैलो?<br />
                    उबादेसु उबादेसु गौरा जी नहेन्दी<br />
                    तब होये तब होये कुण्ड कौज्याल़<br />
                    क्यान आई क्यान आई सिन्धु छलार?<br />
                    क्यान होये होलो सूरिज धुमैलो?<br />
                    नहेण लागी लछमी की लाडी<br />
                    तब आये तब आये सिन्धु छलार<br />
                    तब होये होलो सूरिज धुमैलो<br />
                    क्यान होई क्यान होई, धौली पिंगली?<br />
                    क्यान होये होलो सूरिज धुमैलो?<br />
                    नहेण लागी सीता जी सरूपा<br />
                    तब होई तब होई धौली पिंगली<br />
                    तब होये होलो सूरिज धुमैलो
                </p>

                <h4 className={styles.musicTitle}>🎶 कपड़ा पैरवाण गीत</h4>
                <p className={styles.musicDescription}>
                    न्हाई ध्वेकी, लाडी मेरी, फुरपूर्या ह्वेगे<br />
                    पैर पैर, लाडी मेरी, रेसमी कपड़ी<br />
                    बाबाजी तुम्हारा लैन बाजारू मोल्येकी<br />
                    माँजीन तुम्हारी पिटारी सजैई<br />
                    पैर पैर लाडी़ मेरी जरीन्द कपड़ी<br />
                    बडाजी तुम्हारा लैन हाटन मोल्येकी<br />
                    बडीजीन तुम्हारी पिटारी खोल्याली<br />
                    पैर पैर लाडी मेरी मोत्युँ जड़ित कपड़ी<br />
                    चचाजी तुम्हारा लैन देसून मोल्येकी<br />
                    चचीजीन तुम्हारी पिटारी सजाई<br />
                    न्हाई ध्वेकी, लाडी मेरी, फुरपूर्या ह्वेगे
                </p>

                <h4 className={styles.musicTitle}>🎶 धूलि अर्घ गीत</h4>
                <p className={styles.musicDescription}>
                    को होलो मेरी धिया को जनीत?<br />
                    कै द्योला आज धूलि़ अरघ?<br />
                    जैका अंग होलो पीताम्बरी चोला<br />
                    स्यूयी होलो तेरी धिया को जनीत<br />
                    जणदो नि छौं मैं पछणदो नि छौं मैं<br />
                    कै द्योला आज धूलि़ अरघ<br />
                    जैका सिर होली सजीली पगड़ी<br />
                    जैका अंग होलो झिलमिल जामो<br />
                    जैका होला जैका होला कान कुण्डल<br />
                    जैका होला जैका होला हाथू कंगण<br />
                    तैई द्येण तैई द्येण धूलि़ अरघ<br />
                    तैई द्येण आज संख की पूजा<br />
                    जैका सिर होलो सोना को मुकुट<br />
                    जैका अंग होली पीताम्बरी धोती<br />
                    तैई द्येण आज धूलि़ अरघ<br />
                    स्यूयी होलो तेरी धिया को बर<br />
                    हेरी फेरी बइयाँ पकड़ ले<br />
                    पैलो फेरो फेर लाडी, कन्या छै कुँवारी<br />
                    दूजो फेरो फेर लाडी, ब्वे बाबु की प्यारी<br />
                    हेरी फेरी बइयाँ पकड़ ले<br />
                    तीजो फेरो फेर लाडी, भै बैण्यूँ की प्यारी<br />
                    चैथो फेरो फेर लाडी, सौंजड़्यों की दुलारी<br />
                    हेरी फेरी बइयाँ पकड़ ले
                </p>

                <h4 className={styles.musicTitle}>🎶 फेरा भौंरा</h4>
                <p className={styles.musicDescription}>
                    पाँचो फेरो फेर छोड़, ब्वे बाबू की गोद<br />
                    छठो फेरो फेर छोड़, सौंजड़्या दगड़ो<br />
                    सातों फेरो फेर लाडी, कन्या ह्वे तू नारी<br />
                    राजी खुसी रै तू लाडी, सदा स्वागिण नारी<br />
                    हेरी फेरी बइयाँ पकड़ ले..
                </p>

                <h4 className={styles.musicTitle}>🎶 बिदै (विदाई गीत)</h4>
                <p className={styles.musicDescription}>
                    काला़ डाण्डा पार बाबा काली़ च कुयेड़ी<br />
                    यखुली यखुली लगली मैं डर<br />
                    काला़ डाण्डा पार बाबा<br />
                    पैली द्योलो लाडी त्वे सकिल जनित<br />
                    तब द्योलो लाडी त्वे हाथी अर घोड़ा<br />
                    यखूली नि भेजलो
                </p>

                <p className="mt-3 text-sm italic text-gray-400">
                    🪕 इन गीतों के माध्यम से विवाह समारोह को सांस्कृतिक, आध्यात्मिक और भावनात्मक रूप से संजोया जाता है। उत्तराखंड की महिलाएं पीढ़ियों से इन गीतों को आत्मा की तरह निभाती आ रही हैं।
                </p>
            </div>



            {folkMusicForms.map((music, index) => (
                <div key={index} className={styles.musicCard}>
                    <h2 className={styles.musicTitle}>{music.name}</h2>
                    <p className={styles.musicDescription}>{music.description}</p>

                    <div>
                        {music.instruments.map((inst, idx) => (
                            <span key={idx} className={styles.instrumentTag}>{inst}</span>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}
