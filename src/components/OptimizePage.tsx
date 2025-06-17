'use client'; // ✅ обязательно для App Router, т.к. используется framer-motion и клиентская логика

/**
 * @file: OptimizePage.tsx
 * @description: Универсальный компонент для SEO-страниц оптимизации изображений (Hero + приложение)
 * @dependencies: pages.config.ts, React, ImageOptimizerApp
 * @created: 2024-06-05
 */
import * as React from "react";
import type { OptimizePageConfig } from '../config/pages.config';
import { ImageOptimizerApp } from './image-optimizer-app';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { AdSlot } from '@/components/AdSlot';
import { HeroSection } from './HeroSection';

export function OptimizePage(props: OptimizePageConfig) {
  return (
    <>
      <HeroSection h1={props.h1} subtitle={props.subtitle} bullets={props.bullets} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-2">
        <AdSlot id="mainTop" className="mb-4" />
      </div>
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <ImageOptimizerApp />
      </motion.div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-2">
        <AdSlot id="mainBottom" className="mb-4" />
      </div>
      <Footer />
    </>
  );
}
