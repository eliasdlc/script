export default function Home(){

    return (
        <div className={"flex flex-start p-[15px] gap-4 rounded-2xl shadow light-mode-bg h-full w-full"}>
            <div className={"flex rounded-2xl h-full w-[23.125rem] flex-shrink-0 border-2 border-white shadow sidebar-bg "}>
                <aside className={"flex flex-start self-stretch w-[3.75rem] h-full flex-shrink-0 rounded-l-xl shadow light-mode-bg "}>{/*sidebar*/}
                    <div className={"flex flex-col items-center self-stretch gap-2.5 flex-1-0-0 sidebar-p"}> {/*sidebar-holder*/}
                        <div className={"bg-[#152437] w-[3.125rem] h-[3.125rem] rounded-[1rem]"}>{/*Logo holder*/}

                        </div>
                        <div className={"flex flex-col items-center gap-2.5 self-stretch"}>
                            <button className={"button-layout button-style"}></button>
                            <button className={"button-layout button-style"}></button>
                            <button className={"button-layout button-style"}></button>
                        </div>
                        <div className={"h-svh flex-col inline-flex justify-end items-center gap-2.5 border-2 border-red"}>
                            <button className={"button-layout button-style"}>

                            </button>
                        </div>

                    </div>
                </aside>
                <div className={""}>

                </div>
            </div>
            <div className={"flex flex-col flex-start self-stretch w-full h-full"}>
                <div className={"flex flex-start w-full h-[3.125rem] pl-1 pr-1 gap-1 self-stretch"}>

                </div>
                <div className={"flex self-stretch rounded-2xl w-full h-full light-mode-bg border-2 shadow border-white"}>

                </div>
            </div>
        </div>
    )
}