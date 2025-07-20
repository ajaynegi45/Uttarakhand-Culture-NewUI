import styles from "./DropDownMenu.module.css";

type DropDownMenuProps = {
    title: string,
}

/**
* Renders a dropdown menu with items like difficulty level, location, and altitude.
* @example
* DropDownMenu(props)
* <DropDownMenu props={sampleProps} />
* @param {DropDownMenuProps} props - Properties for configuring the component style and items.
* @returns {JSX.Element} A React component for a styled dropdown menu.
* @description
*   - Uses SVG icons to visually indicate dropdown functionality.
*   - Encapsulates each dropdown item in a styled 'div'.
*   - Assumes `styles` object contains CSS class definitions corresponding to component structure.
*/
export default function DropDownMenu(props: DropDownMenuProps) {
    return (
        <>
            <section className={styles["search-section"]}>
                <div className={styles["search-container"]}>

                    <div className={styles["item"]}>
                        <p>Difficulty level</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>

                        <div></div>
                    </div>

                    <div className={styles["item"]}>
                        <p>Location</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>
                    </div>

                    <div className={styles["item"]}>
                        <p>Altitude</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 height="24px"
                                 viewBox="0 -960 960 960"
                                 width="24px" fill="#A0A5AC"><path
                                d="M480-360 280-560h400L480-360Z"/>
                            </svg>
                        </span>
                    </div>

                </div>
            </section>

            <div className={styles["dropdown-menu-container"]}>
                <ul>
                    <li>hi Hello</li>
                </ul>

            </div>
        </>
    );
}