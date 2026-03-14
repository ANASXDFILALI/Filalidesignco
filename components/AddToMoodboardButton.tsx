import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useMoodboard, MoodboardItem } from '../context/MoodboardContext';

interface AddToMoodboardButtonProps {
    item: MoodboardItem;
    size?: number;
    className?: string;
}

const AddToMoodboardButton: React.FC<AddToMoodboardButtonProps> = ({
    item,
    size = 24,
    className = ''
}) => {
    const { addItem, removeItem, isInMoodboard } = useMoodboard();
    const isSelected = isInMoodboard(item.id);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        if (isSelected) {
            removeItem(item.id);
        } else {
            addItem(item);
        }
    };

    return (
        <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative group ${className}`}
            aria-label={isSelected ? "Remove from moodboard" : "Add to moodboard"}
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isSelected ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.3 }}
            >
                <Heart
                    size={size}
                    className={`transition-all duration-300 ${isSelected
                            ? 'fill-riad-gold stroke-riad-gold'
                            : 'fill-transparent stroke-white group-hover:stroke-riad-gold-light'
                        }`}
                    strokeWidth={2}
                />
            </motion.div>

            {/* Subtle glow effect when selected */}
            {isSelected && (
                <motion.div
                    className="absolute inset-0 bg-riad-gold blur-lg opacity-30 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </motion.button>
    );
};

export default AddToMoodboardButton;
