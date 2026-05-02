import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function LiquidCard({ children, className, ...props }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={cn(
                'relative overflow-hidden rounded-[2.5rem]',
                'bg-primary/40 backdrop-blur-xl border border-white/10',
                'shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.5)]',
                className
            )}
            {...props}
        >
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}
