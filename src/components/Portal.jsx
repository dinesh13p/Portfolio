import React from 'react'
import { motion } from 'framer-motion'

export default function Portal() {
    return (
        <div className="container flex items-center justify-center min-h-full relative" style={{
            paddingTop: 'clamp(16px, 4vh, 32px)',
            paddingBottom: 'clamp(16px, 4vh, 32px)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center w-full max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8"
                >
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6"
                        >
                            <div>
                                <motion.h2
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Portal of Surprise
                                </motion.h2>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg lg:mx-0 mx-auto leading-relaxed"
                        >
                            Clicking the button will take you to my Secondary Domain. <br></br> A surprise awaits you there.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center w-full sm:w-auto"
                    >
                        <motion.a
                            href="https://www.dinesh2004.com.np"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 btn-secondary rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg text-white w-full sm:w-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                borderColor: '#ff3c3c'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Visit Website
                        </motion.a>
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    )
}