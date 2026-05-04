export default function Grain() {
    return (
        /* z-[1] posiziona la grana sopra lo sfondo ma sotto i componenti principali */
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="opacity-40">
                <filter id="noise">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="2.5" 
                        numOctaves="4" 
                        stitchTiles="stitch" 
                    />
                    <feComponentTransfer>
                        <feFuncR type="linear" slope="3" intercept="-1" />
                        <feFuncG type="linear" slope="3" intercept="-1" />
                        <feFuncB type="linear" slope="3" intercept="-1" />
                    </feComponentTransfer>
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
}