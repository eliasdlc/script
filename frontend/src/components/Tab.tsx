import HomeIcon from "../assets/icons/home-icon.tsx";
import {ElementType} from "react";

interface TabProps {
    name?: string,
    Icon?: ElementType,
    isSelected?: boolean,
    onClick?: () => void,
    Page?: ElementType
}


const Tab = ({
                 name,
                 Icon = HomeIcon,
                 isSelected = false,
                 onClick,
             }: TabProps) => {


    return (

        <button onClick={onClick}
                className={`ease-in-out duration-100 ${isSelected ? "flex-row flex gap-2.5 px-2.5 text-special-accent font-semibold text-sm font-['Inter'] min-w-[220px] max-w-[280px] h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-accent bg-tab-active justify-start items-center p-2" :
                    "flex-row flex gap-2.5 px-2.5 text-accent font-semibold text-sm font-['Inter'] min-w-[220px] max-w-[280px] h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-lighter-accent bg-tab-inactive justify-start items-center p-2 shadow-shadow overflow-visible"}`}>
            <Icon color={` ${isSelected ? "var(--special-accent)" : "var(--accent)"}`} width={"20"}
                  height={"20"}></Icon>
            <span>{name}</span>
        </button>


    )
}

export default Tab;
