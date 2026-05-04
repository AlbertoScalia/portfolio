import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function LiquidCard({ children, className, ...props }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={cn(
                'relative overflow-hidden rounded-[2.5rem] transition-colors duration-300',
                'bg-white border border-blue group-hover:border-accent',
                className
            )}
            {...props}
        >
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}