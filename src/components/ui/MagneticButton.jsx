import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function MagneticButton({ children, className, onClick, ...props }) {
    const boundingRef = useRef(null);

    return (
        <motion.button
            ref={boundingRef}
            onMouseMove={(e) => {
                if (!boundingRef.current) return;
                const { left, top, width, height } = boundingRef.current.getBoundingClientRect();
                const x = e.clientX - (left + width / 2);
                const y = e.clientY - (top + height / 2);
                boundingRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
            }}
            onMouseLeave={() => {
                if (!boundingRef.current) return;
                boundingRef.current.style.transform = 'translate(0px, 0px)';
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={onClick}
            className={cn(
                'relative inline-flex items-center justify-center px-8 py-4 font-sans font-medium',
                'rounded-full overflow-hidden transition-colors duration-300',
                'bg-foreground text-background hover:bg-zinc-200',
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
