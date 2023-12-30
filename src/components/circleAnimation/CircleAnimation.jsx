/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useEffect, useRef } from 'react';
import './CircleAnimation.css'; 

const CircleAnimation = (WrappedComponent) => {
    const Component = (props) => {
        const circleRef = useRef(null);

        useEffect(() => {
            const circle = circleRef.current;

            const moveCircle = (e) => {
                requestAnimationFrame(() => {
                    circle.style.left = e.pageX + 'px';
                    circle.style.top = e.pageY + 'px';

                    const elementMouseIsOver = e.target;

                    if (
                        ['A', 'IMG', 'LI', 'H1', 'SPAN', 'P'].includes(elementMouseIsOver.nodeName) ||
                        ['A', 'IMG', 'LI', 'H1', 'SPAN', 'P'].includes(elementMouseIsOver.parentElement?.nodeName)
                    ) {
                        circle.style.opacity = '0.5'; 
                    } else {
                        circle.style.opacity = '0.8';
                    }
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

