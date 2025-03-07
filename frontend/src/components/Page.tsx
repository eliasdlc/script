import CustomTextSection from "./CustomTextSectionProps.tsx";
import {ElementType} from "react";

interface PageProps {
    id?: number;
    title?: string;
    subtitle?: string;
    text?: string;
    className?: string;
    maxLength?: number;
    showCounter?: boolean;
    Icon?: ElementType;
}

export default function Page({
                                 title = "Title",
                                 subtitle = "Subtitle",
                                 text,
                                 maxLength = 5000,
                                 showCounter,
                                 className = ""
                             }: PageProps) {

    return (
        <div className={`flex flex-col self-stretch rounded-2xl w-full h-full bg-bg border-2 general-shadow-shadow border-border overflow-auto ${className}`}>
            <CustomTextSection
                maxLength={maxLength}
                showCounter={showCounter}
                title={title}
                subtitle={subtitle}
                textareaPlaceholder="Escribe aquí..."
                text={text}
            />
        </div>
    )
}