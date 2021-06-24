import React, {useEffect, forwardRef} from "react";

const SourcePreloader = forwardRef((_: any, ref: React.ForwardedRef<HTMLDivElement>) => {

    useEffect(() => {
        const reference = ref as React.RefObject<HTMLDivElement>;
        const sourcePreloader = reference.current as HTMLElement;
        const animatePreloader = sourcePreloader.animate([
            {
                filter: "hue-rotate(0)"
            },
            {
                filter: "hue-rotate(360deg)"
            }
        ], {
            duration: 2500,
            fill: "forwards",
            easing: "linear",
            iterations: Infinity,
            direction: "alternate"
        });

        return () => {
            animatePreloader.cancel();
        }
    }, []);

    return (
        <div className="sourcePreloader" ref={ref} style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(254,252,249,1) 0%, rgba(123,238,199,1) 0%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Montserrat",
            fontSize: "36px",
            lineHeight: "48px",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#60606e",
            zIndex: 200
        }}>
            Loading...
        </div>
    )
});

export default SourcePreloader;