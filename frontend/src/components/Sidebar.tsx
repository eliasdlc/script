import AppLogo from "../assets/icons/app-logo.tsx";
import AddSpaceIcon from "../assets/icons/add-space-icon.tsx";
import SavedIcon from "../assets/icons/saved-icon.tsx";
import OptionsIcon from "../assets/icons/options-icon.tsx";
import {useEffect, useState} from "react";


export default function Sidebar(){
    const [isOptionsOpened,setOptionsOpen] = useState(false);
    const [isThemesOpened,setThemesOpen] = useState(false);

    const [theme,setTheme] = useState(
        localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    useEffect(() => {
        // Aplicar la clase de tema al elemento raíz
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        // Guardar el tema en localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const handleOptionsClick = () => {
        setOptionsOpen(!isOptionsOpened);
    }

    const handleThemesClick = () => {
        setThemesOpen(!isThemesOpened);
    }

    return (
        <>
            <aside
                className={"flex flex-start self-stretch w-[3.75rem] h-full flex-shrink-0 rounded-l-xl shadow light-mode-bg "}>{/*sidebar*/}
                <div
                    className={"flex flex-col items-center self-stretch gap-2.5 flex-1-0-0 sidebar-p"}> {/*sidebar-holder*/}
                    <div
                        className={"bg-[#152437] w-[3.125rem] h-[3.125rem] items-center justify-center flex rounded-[1rem] flex-shrink-0"}>{/*Logo holder*/}
                        <AppLogo color={"#FFFFFF"} width={"30"} height={"30"}/>
                    </div>
                    <div className={"flex flex-col items-center gap-2.5 self-stretch"}>
                        <button className={"button-layout button-style"}>
                            <AddSpaceIcon/>
                        </button>
                        <button className={"button-layout button-style"}>
                            <SavedIcon/>
                        </button>
                        <button className={"button-layout button-style"}></button>
                    </div>

                    <div className={" bg-[#D4E9F7] w-full h-[4px] rounded-2xl"}/>

                    <div className={"h-full inline-flex justify-end"}>

                    </div>

                    <div className={" bg-[#D4E9F7] w-full h-[4px] rounded-2xl"}/>

                    <div className={"h-fit flex-col inline-flex justify-end items-center gap-2.5"}>

                        <button onClick={handleOptionsClick} className={"button-layout button-style"}>
                            <OptionsIcon/>
                        </button>
                    </div>

                </div>
            </aside>

            {isOptionsOpened && (
                <div className={"absolute top-0 left-0 h-full w-full bg-black/25 flex items-center justify-center"}>
                    <div className={" w-[60rem] h-[35rem] bg-[#152437] rounded-2xl shadow flex flex-col items-start"}>

                        <div className={"flex flex-row bg-black/25 rounded-t-2xl justify-items-center justify-end w-full"}>
                            <button className={"close-button-layout close-button-style text-white m-2 "}
                                    onClick={() => setOptionsOpen(false)}>
                                X
                            </button>
                        </div>

                        <div className={"w-full h-full flex flex-row"}>

                            <div className={"flex flex-col bg-white/25 rounded-bl-2xl h-full w-1/4"}>
                                <div className={"flex items-start border-b-2 border-white bg-black/25"}>
                                    <label className={"w-full text-white m-2 font-['Inter'] text-xl "}>Settings</label>
                                </div>



                                <div
                                    className={"flex flex-col items-start justify-start w-full h-full overflow-y-auto"}>
                                    <button onClick={handleThemesClick}
                                            className={" text-white m-2  font-['Inter'] text-l"}>Themes
                                    </button>
                                    <button className={" text-white m-2  font-['Inter'] text-l"}>Account</button>
                                    <button className={" text-white m-2  font-['Inter'] text-l"}>Preferences</button>
                                    <button className={" text-white m-2  font-['Inter'] text-l"}>Help</button>
                                    <button className={" text-[red] m-2 font-bold font-['Inter'] text-l"}>Log Out
                                    </button>
                                </div>

                            </div>

                            <div className={"flex w-10/12 h-full "}>
                                {isThemesOpened && (
                                    <div className={"flex flex-col items-start justify-start w-full h-full overflow-y-auto"}>
                                        <div className={"flex flex-col justify-start m-2 items-start w-full"}>
                                            <button onClick={toggleTheme} className={" text-white  font-semibold font-['Inter'] text-l"}>Dark</button>
                                            <p className={" text-white/75 text-sm font-thin font-['Inter']"}>
                                                Enjoy Script with a dark theme that's easy on the eyes.
                                            </p>
                                        </div>

                                        <div className={"flex flex-col justify-start m-2 items-start w-full"}>
                                        <button className={" text-white  font-semibold font-['Inter'] text-l"}>Light</button>
                                        <p className={" text-white/75 text-sm font-thin font-['Inter']"}>
                                            Enjoy Script with a light theme that's both pretty and readable.
                                        </p>
                                    </div>

                                    </div>
                                )}

                            </div>

                        </div>


                    </div>
                </div>
            )}
        </>

    )
}