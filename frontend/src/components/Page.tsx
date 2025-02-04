import CustomTextSection from "./CustomTextSectionProps.tsx";

export default function Page(){

    return (
        <div
            className={"flex flex-col self-stretch rounded-2xl w-full h-full bg-bg border-2 general-shadow-shadow border-border"}>
            <CustomTextSection maxLength={1_000_000} showCounter={true} title={"Title"} subtitle={"Subtitle"}
                               textareaPlaceholder={"Escribe aquí..."}/>

        </div>
    )
}