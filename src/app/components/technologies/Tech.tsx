'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import exp from '@/assets/express.png'
import js from '@/assets/javascript.png'
import mongo from '@/assets/mongodb.png'
import node from '@/assets/nodejs.png'
import react from '@/assets/react-logo.png'
import ts from '@/assets/typescript.png'
import next from '@/assets/nextjs.png'

export function Tech() {
  return (
    <div className="h-[40rem] flex flex-col antialiased bg-black/[0.96] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

const testimonials = [
  {
    img: exp,
  },
  {
    img: js,
  },
  {
    img: mongo,
  },
  {
    img: ts,
  },
  {
    img: node,
  },
  {
    img: react,
  },
  {
    img: next,
  },
]
