export default function MainStage(){
    return (
        <div className={"flex flex-col flex-start self-stretch shadow-shadow overflow-hidden w-full h-full"}>
            <div className={"flex flex-start w-full h-[3.125rem] pl-3 pr-3 gap-2 self-stretch overflow-hidden"}>
                <button
                    className={"w-[55px]  h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-accent bg-tab-active flex justify-center items-center"}>

                </button>
                <button
                    className={"w-[200px]  h-[50px] rounded-t-2xl border-l-2 border-r-2 border-t-2 border-accent bg-tab-active flex justify-center items-center"}>

                </button>
            </div>
            <div className={"flex flex-col self-stretch rounded-2xl w-full h-full bg-bg border-2 general-shadow-shadow border-border"}>
                <div className={"flex flex-col p-10"}>
                    <label className={"pr-20 pl-20  font-inter text-5xl text-accent font-bold"}>
                        Title
                    </label>
                    <label className={"pr-20 pl-20 font-inter text-l text-accent font-light"}>
                        Subtitle
                    </label>
                </div>
                <textarea className={" w-full h-full bg-transparent border-0 outline-none resize-none appearance-none p-3 pl-20 pr-20 m-0 text-accent"}>

                </textarea>
            </div>
        </div>
    )
}