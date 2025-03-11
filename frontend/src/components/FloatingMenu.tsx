import { useRef, useEffect, useState } from 'react';

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
                "flex flex-row gap-2 bg-opacity-20 backdrop-blur-md p-2 rounded-2xl border-[1px] border-transparent-accent " +
                "hover:-translate-y-[10px] ease-in-out duration-150 shadow-transparent-accent shadow-xl"
            }>
                {[1, 2, 3, 4, 5].map((item) => (
                    <button
                        key={item}
                        className="h-10 w-10 bg-transparent-accent hover:bg-accent rounded-lg border-2 border-transparent-accent transition-colors duration-150"
                    >
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FloatingMenu;