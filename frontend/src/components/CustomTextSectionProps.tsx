import React, {ReactNode, useState} from 'react';

interface CustomTextSectionProps {
    title?: string;
    subtitle?: string;
    textareaPlaceholder?: string;
    children?: ReactNode;
    className?: string;
    maxLength?: number;
    showCounter?: boolean;
}

const CustomTextSection = ({
                                title = "Title",
                                subtitle = "Subtitle",
                                textareaPlaceholder = "Escribe aquí...",
                                children,
                                maxLength = 5,
                                showCounter,
                                className = ""
                           }: CustomTextSectionProps) => {

    const [characterCount, setCharacterCount] = useState(0);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = e.target.value;
        if (maxLength && inputValue.length > maxLength) {
            setCharacterCount(inputValue.length);
        }
    }

    return (
        <div className={`flex flex-col self-stretch rounded-2xl w-full h-full overflow-auto general-shadow-shadow border-border ${className}`}>
            <div className="flex flex-col h-auto pt-10 gap-2">
                <textarea maxLength={40}
                          onChange={handleTextChange}
                          placeholder={"Escribe el titulo..."} className="pr-20 pl-20 font-inter text-5xl text-accent font-bold bg-transparent border-0 outline-none resize-none appearance-none m-0">
                    {title}
                </textarea>
                <textarea maxLength={200}
                          onChange={handleTextChange}
                          placeholder={"Escribe un subtitulo..."} className="pr-20 pl-20 font-inter text-sm text-accent font-thin bg-transparent border-0 outline-none resize-none appearance-none m-0">
                    {subtitle}
                </textarea>
            </div>
            <textarea
                maxLength={maxLength}
                onChange={handleTextChange}
                className="w-full h-full bg-transparent border-0 outline-none resize-none appearance-none p-3 pl-20 pr-20 m-0 text-accent"
                placeholder={textareaPlaceholder}
            >
                {children}
            </textarea>

            {showCounter && (
                <div className="flex justify-end px-5 pb-2">
                    <span className={`text-sm ${
                        characterCount >= maxLength ? 'text-red-500' : 'text-accent'
                    }`}>
                        {characterCount}/{maxLength}
                    </span>
                </div>
            )}
        </div>
    );
};

export default CustomTextSection;