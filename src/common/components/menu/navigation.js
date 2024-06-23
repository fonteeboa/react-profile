import * as React from "react";
import { motion } from "framer-motion";

const variantsItem = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
};

const variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const itemIds = ['0', '1', '2', '3', '4'];

const MenuItem = () => {
    const style = { border: `2px solid #74512D` };
    return (
        <motion.li
            variants={variantsItem}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style} />
            <div className="text-placeholder" style={style} />
        </motion.li>
    );
};

const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(i => (
            <MenuItem key={i} />
        ))}
    </motion.ul>
);

export default Navigation;
