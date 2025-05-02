'use client'

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <main className="h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center">
      <motion.h1
        className="text-white text-center text-3xl sm:text-5xl font-bold"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        NR style'ni <br className="sm:hidden" /> portfolio sahifasi
      </motion.h1>
    </main>
  )
}

export default Home
