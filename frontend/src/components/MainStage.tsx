import HomeIcon from "../assets/icons/home-icon.tsx";
import Page from "./Page.tsx";
import Tab from "./Tab.tsx";
import FolderIcon from "../assets/icons/folder-icon.tsx";
import PageIcon from "../assets/icons/page-icon.tsx";
import {useState} from "react";

export default function MainStage(){

    const [selectedTab, setSelectedTab] = useState<number>(0);

    let tabs = [
        {id: 0, name: "The Jovian Fighter", Icon: FolderIcon},
        {id: 1, name: "Character Idea", Icon: PageIcon},
        {id: 2, name: "Calculus", Icon: FolderIcon},
        {id: 3, name: "Homework #1", Icon: PageIcon},
        {id: 4, name: "The Jovian Fighter", Icon: FolderIcon},
        {id: 5, name: "Character Idea", Icon: PageIcon},
        {id: 6, name: "Homework #2", Icon: PageIcon},
    ]



    return (
        <div className={"flex flex-col flex-start self-stretch rounded-2xl overflow-hidden w-full h-full"}>
            <div className={"flex flex-row w-full h-[3.125rem] rounded-2xl gap-1 pl-3 pr-3"}>
                <button
                    className={"min-w-[55px]  h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-accent bg-tab-active flex p-2 justify-center items-center"}>
                    <HomeIcon color={"var(--special-accent)"}></HomeIcon>
                </button>

                <div className={"flex flex-start rounded-t-2xl w-full h-[3.125rem] pl-3 pr-3 gap-2.5 overflow-auto example"}>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            name={tab.name}
                            Icon={tab.Icon}
                            isSelected={selectedTab === tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                        />
                    ))}
                </div>
            </div>

            <Page/>
        </div>
    )
}