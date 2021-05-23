import React, {useEffect} from "react";

export default function SourcePreloader(props: any) {

    useEffect(() => {
        const sourcePreloader = props.refProp.current as HTMLElement;

        const animatePreloader = sourcePreloader.animate([
            {
                background: "linear-gradient(135deg, rgba(254,252,249,1) 0%, rgba(123,238,199,1) 0%)"
            },
            {
                background: "linear-gradient(135deg, rgba(254,252,249,1) 100%, rgba(123,238,199,1) 100%)"
            }
        ], {
            duration: 500,
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
        <div className="sourcePreloader" ref={props.refProp} style={{
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
            color: "#60606e"
        }}>
            Loading...
        </div>
    )
}