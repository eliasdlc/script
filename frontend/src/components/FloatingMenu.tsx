import { useRef, useEffect, useState } from 'react';
import AlingCenter from "../assets/icons/align-center.tsx";
import AlignJustify from "../assets/icons/align-justify.tsx";
import AlignLeft from "../assets/icons/align-left.tsx";
import Bold from "../assets/icons/bold.tsx";
import MessageText from "../assets/icons/message-text.tsx";
import Underline from "../assets/icons/underline.tsx";

const FloatingMenu = () => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [leftPosition, setLeftPosition] = useState('50%');

    useEffect(() => {
        const updatePosition = () => {
            if (menuRef.current?.parentElement) {
                const parentRect = menuRef.current.parentElement.getBoundingClientRect();
                const parentCenterX = parentRect.left + (parentRect.width / 2);
                setLeftPosition(`${parentCenterX}px`);
            }
        };

        const scrollHandler = () => {
            updatePosition();
            requestAnimationFrame(updatePosition);
        };

        updatePosition();

        // Configurar listeners
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', scrollHandler, true);

        // Observer para cambios en el padre
        const observer = new ResizeObserver(updatePosition);
        // @ts-ignore
        if (menuRef.current.parentElement) {
            // @ts-ignore
            observer.observe(menuRef.current.parentElement);
        }

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', scrollHandler);
            observer.disconnect();
        };
    }, []);

    const floatingMenuButtons = [
        // TODO: Mi idea aqui es hacer que un solo boton contenga los diferentes tipos de aling,
        //  y que al hacer click en el boton, se muestren los diferentes tipos de aling o
        // talvez que al hacer un scroll se vaya mostrando los diferentes tipos de aling

        {id: 0, Icon: Bold},
        {id: 1, Icon: MessageText},
        {id: 2, Icon: Underline},

    ];

    return (
        <div
            ref={menuRef}
            className="fixed bottom-5 z-[9999] transition-all duration-300 "
            style={{
                left: leftPosition,
                transform: 'translateX(-50%)'
            }}
        >
            <div className={
                "flex flex-row justify-center items-center gap-2 bg-opacity-20 backdrop-blur-md p-2 rounded-2xl border-[1px] border-transparent-accent " +
                "hover:-translate-y-[10px] ease-in-out duration-100 "
            }>
                <div className="flex flex-col gap-2 overflow-y-auto h-10 w-10 rounded-xl snap-y snap-mandatory example">
                    <button
                        className="h-10 w-10 flex flex-shrink-0 justify-center items-center backdrop-blur-xl hover:bg-transparent-accent ease-in-out duration-100 rounded-xl border-2 border-transparent-accent transition-colors snap-start">
                        <AlingCenter className="hover:shadow-accent shadow-accent shadow-2xl" color="var(--accent)"
                                     height="20px" width="20px"/>
                    </button>
                    <button
                        className="h-10 w-10 flex flex-shrink-0 justify-center items-center backdrop-blur-xl hover:bg-transparent-accent ease-in-out duration-100 rounded-xl border-2 border-transparent-accent transition-colors snap-start">
                        <AlignLeft className="hover:shadow-accent shadow-accent shadow-2xl" color="var(--accent)"
                                   height="20px" width="20px"/>
                    </button>
                    <button
                        className="h-10 w-10 flex flex-shrink-0 justify-center items-center backdrop-blur-xl hover:bg-transparent-accent ease-in-out duration-100 rounded-xl border-2 border-transparent-accent transition-colors snap-start">
                        <AlignJustify className="hover:shadow-accent shadow-accent shadow-2xl" color="var(--accent)"
                                      height="20px" width="20px"/>
                    </button>
                </div>

                {floatingMenuButtons.map(({id, Icon}) => (
                    <button
                        key={id}
                        className="h-10 w-10 flex justify-center items-center backdrop-blur-xl hover:bg-transparent-accent ease-in-out duration-100 rounded-xl border-2 border-transparent-accent transition-colors"
                    >
                        <Icon className={"hover:shadow-accent shadow-accent shadow-2xl"} color={"var(--accent)"}
                              height={"20px"} width={"20px"}/>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FloatingMenu;