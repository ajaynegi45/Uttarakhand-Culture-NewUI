import React from 'react';
import Style from "./Proverbs.module.css";
import {getRandomProverb} from "@/utils/proverbs";

/**
 * Render a proverb card displaying random Uttarakhandi proverbs.
 * @example
 * renderProverbCard()
 * <JSX snippet displaying a proverb>
 * @returns {JSX.Element} A JSX element containing the styled proverb card.
 * @description
 *   - The function retrieves a random proverb using the `getRandomProverb()` method.
 *   - Displays both Hindi and English versions of the proverb.
 *   - Adds the meaning if available.
 */
const Proverbs = () => {
    const Proverb = getRandomProverb();
    return (
        <>
            <section className={Style.sectionCardContainer}>

                <div className={Style.sectionCardTitle}>
                    <div className={Style.sectionCardTitleLine}></div>
                    <p>UTTARAKHANDI PROVERBS</p>
                </div>


                <div className={Style.sectionCard}>

                    <div className={Style.hindiTextContainer}>
                        <p className={Style.hindiText}>“{Proverb.hindi}”</p>
                    </div>

                    <div className={Style.englishTextContainer}>
                        <p className={Style.englishText}>{Proverb.english}</p>
                    </div>

                    {Proverb.meaning ?
                        <div className={Style.meaningTextContainer}>
                            <p className={Style.englishText}>{Proverb.meaning}</p>
                        </div>
                        : " "}


                </div>
            </section>

        </>
    );
};

export default Proverbs;