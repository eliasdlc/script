import MainStage from "../components/MainStage.tsx";
import Sidebar from "../components/Sidebar.tsx";
import '../styles/App.css'


export default function Home(){

    return (
        <div className="flex flex-start p-[8px] gap-2 general-shadow-shadow bg-bg h-full w-full">
            <div
                className="flex rounded-2xl h-full w-fit flex-shrink-0 border-2 border-border general-shadow-shadow overflow-hidden">
                <Sidebar/>
            </div>

            <MainStage/>

        </div>
    )
}