import { useEffect, useRef } from 'react';
import './CircleAnimation.css';

const CircleAnimation = (WrappedComponent) => {
    const Component = (props) => {
        const circleRef = useRef(null);

        useEffect(() => {
            const circle = circleRef.current;

            const moveCircle = (e) => {
                requestAnimationFrame(() => {
                    const { clientX: mouseX, clientY: mouseY } = e;

                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;
                    const circleSize = 50;

                    const maxX = screenWidth - circleSize;
                    const maxY = screenHeight - circleSize;

                    let x = Math.max(0, Math.min(mouseX - circleSize / 2, maxX));
                    let y = Math.max(0, Math.min(mouseY - circleSize / 2, maxY));

                    circle.style.left = x + 'px';
                    circle.style.top = y + 'px';

                    const elementMouseIsOver = document.elementFromPoint(mouseX, mouseY);
                    const validElementTypes = ['A', 'IMG', 'LI', 'H1', 'SPAN', 'P'];

                    const isElementValid = (element) => {
                        let currentNode = element;
                        while (currentNode) {
                            if (validElementTypes.includes(currentNode.nodeName) || currentNode.classList.contains('dark-mode-toggle') || currentNode.classList.contains('card-title')) {
                                return true;
                            }
                            currentNode = currentNode.parentElement;
                        }
                        return false;
                    };

                    circle.style.opacity = isElementValid(elementMouseIsOver) ? '0.3' : '1';
                });
            };

            document.addEventListener('mousemove', moveCircle);

            return () => {
                document.removeEventListener('mousemove', moveCircle);
            };
        }, []);

        return (
            <>
                <WrappedComponent {...props} />
                <div id="circle" ref={circleRef}></div>
            </>
        );
    };

    return Component;
};

export default CircleAnimation;
