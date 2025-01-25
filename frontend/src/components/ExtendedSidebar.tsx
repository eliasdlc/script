import SearchIcon from "../assets/icons/search-icon.tsx";
import AddPageIcon from "../assets/icons/add-page-icon.tsx";
import AddFolderIcon from "../assets/icons/add-folder-icon.tsx";
import HideSidebarIcon from "../assets/icons/hide-sidebar-icon.tsx";
import SpaceHierachyIcon from "../assets/icons/space-hierachy-icon.tsx";
import StarIcon from "../assets/icons/star-icon.tsx";
import InboxIcon from "../assets/icons/inbox-icon.tsx";
import LastProjectsIcon from "../assets/icons/last-projects-icon.tsx";

export default function ExtendedSidebar(){
    return (
        <div className={"flex flex-col flex-start p-2.5 gap-2.5 h-full w-full "}>
            <div className={"h-[57.50px] w-full justify-center items-center gap-2.5 inline-flex flex-shrink-0"}>
                <button
                    className={"extended-sidebar-buttons-layout extended-sidebar-buttons-style-special"}>
                    <SearchIcon color={"#FFFFFF"}/>
                </button>
                <button
                    className={"extended-sidebar-buttons-layout extended-sidebar-buttons-style"}>
                    <AddPageIcon/>
                </button>

                <button
                    className={"extended-sidebar-buttons-layout extended-sidebar-buttons-style"}>
                    <AddFolderIcon/>
                </button>

                <button
                    className={"extended-sidebar-buttons-layout extended-sidebar-buttons-style"}>
                    <HideSidebarIcon/>
                </button>

            </div>
            <div
                className={"w-full h-full flex-col justify-start items-start gap-2.5 inline-flex rounded-2xl overflow-y-auto example"}>
                <div
                    className={" min-h-[300px] w-full p-2.5 bg-[#f7fcff] rounded-2xl shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <SpaceHierachyIcon/>
                        <label className={" font-bold text-[#152437] font-['Inter']"}>Space Hierachy

                        </label>
                    </div>
                    <div> {/*hierachy table*/}

                    </div>

                </div>
                <div
                    className={"w-full h-fit flex p-2.5 light-mode-bg rounded-2xl shadow flex-col justify-center items-start gap-1 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <StarIcon/>
                        <label className={" font-bold text-[#152437] font-['Inter']"}>Favorite

                        </label>
                    </div>
                </div>
                <div
                    className={"w-full h-fit flex p-2.5 light-mode-bg rounded-2xl shadow flex-col justify-center items-start gap-1 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <InboxIcon/>
                        <label className={" font-bold text-[#152437] font-['Inter']"}>Inbox

                        </label>
                    </div>
                </div>

                <div
                    className={" min-h-[233.75px] w-full p-2.5 bg-[#f7fcff] rounded-2xl shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>
                        <LastProjectsIcon/>
                        <label className={" font-bold text-[#152437] font-['Inter']"}>Last Projects

                        </label>
                    </div>
                    <div> {/*latest porjects*/}

                    </div>

                </div>

                <div
                    className={" min-h-[233.75px] w-full p-2.5 bg-[#f7fcff] rounded-2xl shadow flex-col justify-start items-start gap-2.5 inline-flex"}>
                    <div className={"justify-start items-center flex gap-1"}>

                        <label className={" font-bold text-[#152437] font-['Inter']"}>Last Projects

                        </label>
                    </div>
                    <div> {/*latest porjects*/}

                    </div>

                </div>
            </div>
        </div>
    )
}