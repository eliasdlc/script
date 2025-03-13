import AppLogo from "../assets/icons/app-logo.tsx";
import AddSpaceIcon from "../assets/icons/add-space-icon.tsx";
import SavedIcon from "../assets/icons/saved-icon.tsx";
import OptionsIcon from "../assets/icons/options-icon.tsx";
import {useEffect, useState} from "react";
import HideSidebarIcon from "../assets/icons/hide-sidebar-icon.tsx";
import SearchIcon from "../assets/icons/search-icon.tsx";
import AddPageIcon from "../assets/icons/add-page-icon.tsx";
import AddFolderIcon from "../assets/icons/add-folder-icon.tsx";
import SpaceHierachyIcon from "../assets/icons/space-hierachy-icon.tsx";
import StarIcon from "../assets/icons/star-icon.tsx";
import InboxIcon from "../assets/icons/inbox-icon.tsx";
import LastProjectsIcon from "../assets/icons/last-projects-icon.tsx";
import '../styles/App.css'

export default function Sidebar(){
    const [isOptionsOpened, setOptionsOpen] = useState(false);
    const [isThemesOpened, setThemesOpen] = useState(false);
    const [isSidebarExtended, setSidebarExtended] = useState(false);
    const [isExtendedVisible, setIsExtendedVisible] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    const extendSidebar = () => {
        if (!isSidebarExtended) {
            setIsExtendedVisible(true);
        }
        setSidebarExtended(!isSidebarExtended);

        if (isSidebarExtended) {
            setTimeout(() => setIsExtendedVisible(false), 300);
        }
    };

    const addPage = () => {
        // Add a page
    }

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", theme === "dark");
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
            <div className={`flex rounded-2xl h-full flex-shrink-0 bg-extended-sidebar-bg 
                transition-all duration-300 overflow-hidden ${
                isSidebarExtended ? "w-[340px]" : "w-[3.75rem]"
            }`}>

                {/* Main Sidebar */}
                <aside className={`flex flex-col items-center self-stretch h-full flex-shrink-0 rounded-2xl bg-bg 
                    transition-all duration-300 ${
                    isSidebarExtended ? "w-[3.75rem] z-10" : "w-[3.75rem] z-10"
                }`}>

                    <div className="flex flex-col items-center self-stretch gap-2.5 flex-1 p-2">
                        <div className="bg-accent w-[3.125rem] h-[3.125rem] flex items-center justify-center rounded-[1rem]">
                            <AppLogo color="special-icon-color" width="30" height="30"/>
                        </div>

                        {isSidebarExtended ? (
                            <div className="flex flex-col items-center gap-2.5 self-stretch">
                                <button className="button-layout border-2 border-border bg-bg hover:shadow-shadow">
                                    <AddSpaceIcon color="icon-color"/>
                                </button>
                                <button className="button-layout border-2 border-border bg-bg hover:shadow-shadow">
                                    <SavedIcon color="icon-color"/>
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2.5 self-stretch">
                                <button
                                    className="hover:shadow-hover-shadow button-layout border-2 border-widgets-border bg-accent general-shadow-shadow">
                                    <SearchIcon color="special-icon-color"/>
                                </button>
                                <button
                                    className="hover:shadow-hover-shadow button-layout border-2 border-border bg-bg general-shadow-shadow">
                                    <AddPageIcon color="icon-color"/>
                                </button>
                                <button
                                    className="hover:shadow-hover-shadow button-layout border-2 border-border bg-bg general-shadow-shadow">
                                    <AddFolderIcon color="icon-color"/>
                                </button>
                                <button onClick={extendSidebar}
                                        className="hover:shadow-hover-shadow button-layout border-2 border-border bg-bg general-shadow-shadow">
                                    <HideSidebarIcon color="icon-color"/>
                                </button>
                                <button className="button-layout border-2 border-border bg-bg hover:shadow-shadow">
                                    <AddSpaceIcon color="icon-color"/>
                                </button>
                                <button className="button-layout border-2 border-border bg-bg hover:shadow-shadow">
                                    <SavedIcon color="icon-color"/>
                                </button>
                            </div>
                        )}

                        <div className="bg-border w-full h-[4px] rounded-2xl"/>

                        <div className="flex-1"/>

                        <div className="bg-border w-full h-[4px] rounded-2xl"/>

                        <div className="h-fit flex-col inline-flex justify-end items-center gap-2.5">
                            <button onClick={handleOptionsClick} className="button-layout border-2 border-border bg-bg hover:shadow-shadow">
                                <OptionsIcon color="icon-color"/>
                            </button>
                        </div>
                    </div>
                </aside>

                {isExtendedVisible && (
                    <div className={"flex flex-col  rounded-r-2xl flex-start p-2.5 gap-2.5 h-full w-full " +
                        `${isSidebarExtended ? "sidebar-extended" : "sidebar-collapsed"}`}>
                        <div
                            className={"h-[57.50px] w-full justify-center items-center gap-2.5 inline-flex flex-shrink-0"}>
                            <button
                                className={"hover:shadow-hover-shadow extended-sidebar-buttons-layout border-2 border-widgets-border bg-accent general-shadow-shadow"}>
                                <SearchIcon color={"special-icon-color"}/>
                            </button>
                            <button onClick={addPage}
                                    className={"hover:shadow-hover-shadow extended-sidebar-buttons-layout border-2 border-border bg-bg general-shadow-shadow"}>
                                <AddPageIcon color={"icon-color"}/>
                            </button>

                            <button
                                className={"hover:shadow-hover-shadow extended-sidebar-buttons-layout border-2 border-border bg-bg general-shadow-shadow"}>
                                <AddFolderIcon color={"icon-color"}/>
                            </button>

                            <button onClick={extendSidebar}
                                    className={"hover:shadow-hover-shadow extended-sidebar-buttons-layout border-2 border-border bg-bg general-shadow-shadow"}>
                                <HideSidebarIcon color={"icon-color"}/>
                            </button>

                        </div>
                        <div
                            className={"w-full h-full flex-col justify-start items-start gap-2.5 inline-flex rounded-2xl overflow-y-auto snap-y snap-mandatory example"}>
                            <div
                                className={" min-h-[300px] w-full p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                                <div className={"justify-start items-center flex gap-1"}>
                                    <SpaceHierachyIcon color={"icon-color"}/>
                                    <label className={" font-semibold text-accent font-['Inter']"}>Space
                                        Hierachy</label>
                                </div>
                                <div> {/*hierachy table*/}

                                </div>

                            </div>
                            <div
                                className={"w-full h-fit p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-center items-start gap-1 inline-flex"}>
                                <div className={"justify-start items-center flex gap-1"}>
                                    <StarIcon color={"icon-color"}/>
                                    <label className={" font-semibold text-accent font-['Inter']"}>Favorite

                                    </label>
                                </div>
                            </div>
                            <div
                                className={"w-full h-fit p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-center items-start gap-1 inline-flex"}>
                                <div className={"justify-start items-center flex gap-1"}>
                                    <InboxIcon color={"icon-color"}/>
                                    <label className={" font-semibold text-accent font-['Inter']"}>Inbox

                                    </label>
                                </div>
                            </div>

                            <div
                                className={" min-h-[233.75px] w-full p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                                <div className={"justify-start items-center flex gap-1"}>
                                    <LastProjectsIcon color={"icon-color"}/>
                                    <label className={" font-semibold text-accent font-['Inter']"}>Last Projects

                                    </label>
                                </div>
                                <div> {/*latest porjects*/}

                                </div>

                            </div>

                            <div
                                className={" min-h-[233.75px] w-full p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                                <div className={"justify-start items-center flex gap-1"}>

                                    <label className={" font-bold text-[#152437] font-['Inter']"}>Last Projects

                                    </label>
                                </div>
                                <div> {/*latest porjects*/}

                                </div>

                            </div>
                        </div>
                    </div>
                )}

            </div>

            {isOptionsOpened && (
                <div
                    className={"absolute top-0 left-0 h-full w-full bg-black/25 backdrop-blur-sm flex items-center justify-center"}>
                    <div className={" w-[60rem] h-[35rem] bg-[#152437] rounded-2xl flex flex-col items-start"}>

                        <div
                            className={"flex flex-row bg-black/25 rounded-t-2xl justify-items-center justify-end w-full"}>
                            <button
                                className={"close-button-layout close-button-style text-white m-2 font-['Inter'] text-xl"}
                                onClick={() => setOptionsOpen(false)}>
                                X
                            </button>
                        </div>

                        <div className={"w-full h-full flex flex-row"}>

                            <div className={"flex flex-col bg-white/25 rounded-bl-2xl h-full w-1/4"}>
                                <div className={"flex items-start border-b-2 border-border bg-black/25"}>
                                    <label className={"w-full text-accent m-2 font-['Inter'] text-xl "}>Settings</label>
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
                                    <div
                                        className={"flex flex-col items-start justify-start w-full h-full overflow-y-auto"}>
                                        <div className={"flex flex-col justify-start m-2 items-start w-full"}>
                                            <button onClick={toggleTheme}
                                                    className={" text-white  font-semibold font-['Inter'] text-l"}>Dark
                                            </button>
                                            <p className={" text-white/75 text-sm font-thin font-['Inter']"}>
                                                Enjoy Script with a dark theme that's easy on the eyes.
                                            </p>
                                        </div>

                                        <div className={"flex flex-col justify-start m-2 items-start w-full"}>
                                            <button
                                                className={" text-white  font-semibold font-['Inter'] text-l"}>Light
                                            </button>
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