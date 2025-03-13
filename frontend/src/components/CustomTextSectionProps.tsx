import {ReactNode, useEffect, useRef, useState} from 'react';
import FloatingMenu from "./FloatingMenu.tsx";
import TextWidth from "../assets/icons/text-width.tsx";

interface CustomTextSectionProps {
    title?: string;
    subtitle?: string;
    text?: string;
    textareaPlaceholder?: string;
    children?: ReactNode;
    className?: string;
    maxLength?: number;
    showCounter?: boolean;
}

const CustomTextSection = ({
                               title = "Title",
                               subtitle = "Subtitle",
                               text,
                               textareaPlaceholder = "Escribe aquí...",
                               maxLength = 1_000_000,
                               showCounter,
                               className = ""
                           }: CustomTextSectionProps) => {

    const [titleValue, setTitleValue] = useState(title);
    const [subtitleValue, setSubtitleValue] = useState(subtitle);
    const [textValue, setTextValue] = useState(text || "");
    const [isSubtitle, setIsSubtitle] = useState(false);
    const [isFatWidth, setIsFatWidth] = useState(false);

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const subtitleRef = useRef<HTMLTextAreaElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

    const extendWidth = () => {
        setIsFatWidth(!isFatWidth);
    }

    const adjustHeight = (element: HTMLTextAreaElement | null) => {
        if (element) {
            element.style.height = "auto";
            element.style.height = `${element.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustHeight(titleRef.current);
        adjustHeight(subtitleRef.current);
        adjustHeight(textRef.current);
    }, [titleValue, subtitleValue, textValue]);

    return (
        <div className={`flex flex-col justify-center w-full ${className}`}>
            <div className="relative w-full max-w-6xl mx-auto">
                <FloatingMenu/>
            </div>
            <div className={"w-full min-h-[250px] max-h-[250px] bg-accent"}></div>

            {/* Sección de cabecera */}
            <div
                className={`pl-5 pr-5 pt-5 ${isFatWidth ? "ml-60 mr-60" : "ml-10 mr-10"} mt-5 rounded-xl bg-bg backdrop-blur-xl h-auto `}>
                <button onClick={extendWidth} className={"fixed flex justify-center items-center right-1 top-5 bg-transparent-accent border-accent border-2 w-10 h-10 rounded-xl"}>
                    <TextWidth className={"hover:shadow-accent shadow-accent shadow-2xl "} color={"var(--accent)"}  height={"20px"} width={"20px"}></TextWidth>
                </button>
                <div>
                    <div className="">
                        <label className={"justify-center text-transparent-accent text-sm font-inter font-bold"}>
                            TITLE
                        </label>
                        <textarea
                            ref={titleRef}
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                            placeholder="Título de la página"
                            className="flex flex-row aling-center justify-center w-full font-inter text-5xl text-accent rounded-[5px] font-bold bg-transparent border-0 outline-none resize-none appearance-none
                    p-0 placeholder:text-white/25 focus:p-2 focus:bg-white/5 duration-150 ease-in-out"
                        />
                    </div>

                    {isSubtitle && (
                        <div>
                            <label className={"justify-center text-transparent-accent text-sm font-inter font-bold"}>
                                SUBTITLE
                            </label>
                            <div className={"flex flex-row w-full"}>
                                <label
                                    className={" w-[10%] justify-center text-transparent-accent text-sm font-inter font-thin"}>
                                    1 january 2022
                                </label>
                                <textarea
                                    ref={subtitleRef}
                                    value={subtitleValue}
                                    onChange={(e) => setSubtitleValue(e.target.value)}
                                    placeholder="Subtítulo o descripción"
                                    className="w-full font-inter text-sm text-accent font-thin bg-transparent rounded-sm border-0 outline-none resize-none appearance-none m-0 placeholder:text-gray-400
                            focus:p-2 focus:bg-white/5 duration-150 ease-in-out"
                                    style={{minHeight: '30px'}}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <line className={"m-5"}>
                        <hr className="bg-transparent-accent h-0.5 w-full"></hr>
                    </line>
                </div>
                {/* Área de contenido principal */}
                <textarea
                    ref={textRef}
                    value={textValue}
                    onChange={(e) => {
                        setTextValue(e.target.value);
                        adjustHeight(textRef.current);
                    }}
                    placeholder={textareaPlaceholder}
                    className="w-full h-full bg-transparent border-0 outline-none resize-none appearance-none mb-[75px] text-accent placeholder:text-gray-400"
                    style={{minHeight: '300px'}}
                />


            </div>

            {/*{showCounter && (
                <div
                    className="sticky bottom-0 backdrop-blur-sm flex flex-col justify-end items-end rounded-b-2xl border-t-2 border-special-accent p-2 mt-8">
                    <span className={`text-sm ${textValue.length >= maxLength ? 'text-red-500' : 'text-accent'}`}>
                        {textValue.length}/{maxLength}
                    </span>
                </div>
            )}*/}

        </div>
    );
};

export default CustomTextSection;