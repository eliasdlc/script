import SearchIcon from "../assets/icons/search-icon.tsx";
import AddPageIcon from "../assets/icons/add-page-icon.tsx";
import AddFolderIcon from "../assets/icons/add-folder-icon.tsx";
import HideSidebarIcon from "../assets/icons/hide-sidebar-icon.tsx";
import SpaceHierachyIcon from "../assets/icons/space-hierachy-icon.tsx";
import StarIcon from "../assets/icons/star-icon.tsx";
import InboxIcon from "../assets/icons/inbox-icon.tsx";
import LastProjectsIcon from "../assets/icons/last-projects-icon.tsx";

export default function ExtendedSidebar(){

    const addPage = () => {
        // Add a page

    }

    /*
    * When a page or folder is gonna be added, it should automatically open it and add a default title
    * allowing the user change it if they want to.
    * */

    return (
        <div className={"flex flex-col  rounded-r-2xl flex-start p-2.5 gap-2.5 h-full w-full "}>
            <div className={"h-[57.50px] w-full justify-center items-center gap-2.5 inline-flex flex-shrink-0"}>
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

                <button
                    className={"hover:shadow-hover-shadow extended-sidebar-buttons-layout border-2 border-border bg-bg general-shadow-shadow"}>
                    <HideSidebarIcon color={"icon-color"}/>
                </button>

            </div>
            <div
                className={"w-full h-full flex-col justify-start items-start gap-2.5 inline-flex rounded-2xl overflow-y-auto example"}>
                <div
                    className={" min-h-[300px] w-full p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <SpaceHierachyIcon color={"var(--accent)"}/>
                        <label className={" font-semibold text-accent font-['Inter']"}>Space Hierachy</label>
                    </div>
                    <div> {/*hierachy table*/}

                    </div>

                </div>
                <div
                    className={"w-full h-fit p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-center items-start gap-1 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <StarIcon color={"var(--accent)"}/>
                        <label className={" font-semibold text-accent font-['Inter']"}>Favorite

                        </label>
                    </div>
                </div>
                <div
                    className={"w-full h-fit p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-center items-start gap-1 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <InboxIcon color={"var(--accent)"}/>
                        <label className={" font-semibold text-accent font-['Inter']"}>Inbox

                        </label>
                    </div>
                </div>

                <div
                    className={" min-h-[233.75px] w-full p-2.5 bg-bg border-2 border-border rounded-2xl general-shadow-shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <LastProjectsIcon color={"var(--accent)"}/>
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
    );
}