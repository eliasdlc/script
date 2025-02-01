import MainStage from "../components/MainStage.tsx";
import Sidebar from "../components/Sidebar.tsx";



export default function Home(){

    return (
        <div className={"flex flex-start p-[15px] gap-4 general-shadow-shadow bg-bg h-full w-full"}>
            <div className={"flex rounded-2xl h-full w-fit flex-shrink-0 border-2 border-border general-shadow-shadow "}>
                <Sidebar/>
            </div>

            <MainStage/>

        </div>
    )
}