import { useEffect, useRef } from "react";
import "./ScrollEnd.css"

/**
 * Helper component that should be displayed at the end of the scroll. Also,
 * this component appears it will trigger the `callback` function.
 * @constructor
 * @param {object} options - IntersectionObserver options:
 * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
 * @param {CallableFunction} callback - function triggered when the component
 * intersects the supplied root component.
 * @param {string} message - message to display (e.g. Loading...).
 */
function ScrollEnd({options, callback, message}) {

    const ref = useRef(null);

    const handleIntersect = (entries) => {
        const [entrie] = entries
        if(entrie.isIntersecting) {
            callback()
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        if(ref.current) observer.observe(ref.current)

        return () => {
            if(ref.current) observer.unobserve(ref.current)
        }
    }, [ref, options])

    return (
        <div className="scroll-end" ref={ref}>
            <h3>{message}</h3>
        </div>
    );
}

export default ScrollEnd;
