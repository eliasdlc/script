import {ReactNode, useEffect, useRef, useState} from 'react';

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

// CustomTextSection.tsx
// CustomTextSection.tsx
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

    const titleRef = useRef<HTMLTextAreaElement>(null);
    const subtitleRef = useRef<HTMLTextAreaElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

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
        <div className={`flex flex-col gap-10 w-full ${className}`}>
            <div className={"w-full min-h-[250px] max-h-[250px] bg-accent"}></div>
            {/* Sección de cabecera */}
            <div className={"pl-20 pr-20"}>
                <div className="">
                <textarea
                    ref={titleRef}
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    placeholder="Título de la página"
                    className="flex flex-row aling-center justify-center w-full font-inter text-5xl text-accent  rounded-lg font-bold bg-transparent border-0 outline-none resize-none appearance-none
                    m-0 placeholder:text-gray-400 focus:bg-white/15 duration-150 ease-in-out"
                />

                    <textarea
                        ref={subtitleRef}
                        value={subtitleValue}
                        onChange={(e) => setSubtitleValue(e.target.value)}
                        placeholder="Subtítulo o descripción"
                        className="w-full font-inter text-sm text-accent font-thin bg-transparent border-0 outline-none resize-none appearance-none m-0 placeholder:text-gray-400"
                        style={{minHeight: '40px'}}
                    />
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
                    className="w-full bg-transparent border-0 outline-none resize-none appearance-none m-0 text-accent placeholder:text-gray-400"
                    style={{minHeight: '300px'}}
                />


            </div>

            {showCounter && (
                <div className="sticky bottom-0 backdrop-blur-sm flex flex-col justify-end items-end rounded-b-2xl border-t-2 border-special-accent p-2 mt-8">
                    <span className={`text-sm ${textValue.length >= maxLength ? 'text-red-500' : 'text-accent'}`}>
                        {textValue.length}/{maxLength}
                    </span>
                </div>
            )}

        </div>
    );
};

export default CustomTextSection;