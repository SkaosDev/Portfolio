import { useEffect, useState } from 'react';
import "../../assets/css/global/custom-cursor.css";

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const checkIsDesktop = () => {
            const hasPointer = window.matchMedia('(pointer: fine)').matches;
            const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
            setIsDesktop(hasPointer && isLargeScreen);
        };

        checkIsDesktop();
        window.addEventListener('resize', checkIsDesktop);

        return () => {
            window.removeEventListener('resize', checkIsDesktop);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const updateCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            if (!isVisible) setIsVisible(true);

            let element = e.target;
            let isClickable = false;

            for (let i = 0; i < 10 && element && element !== document.body; i++) {
                const tagName = element.tagName;
                const classes = element.classList;
                if (tagName === 'A' || tagName === 'BUTTON' || classes.contains('page-button')) {
                    isClickable = true;
                    break;
                }
                if (element.getAttribute('role') === 'button') {
                    isClickable = true;
                    break;
                }
                element = element.parentElement;
            }

            setIsPointer(isClickable);
        };

        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 || e.clientX <= 0 ||
                e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
                setIsVisible(false);
            }
        };

        const handleBlur = () => setIsVisible(false);
        const handleFocus = () => setIsVisible(true);

        const handleVisibilityChange = () => {
            if (document.hidden) {
                setIsVisible(false);
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseout', handleMouseLeave);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseout', handleMouseLeave);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isDesktop, isVisible]);

    return (
        <>
            {isDesktop && (
                <div
                    className={`custom-cursor ${isPointer ? 'pointer' : ''} ${!isVisible ? 'hidden' : ''}`}
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                />
            )}
        </>
    );
}

export default CustomCursor;
