import { BlogFooter } from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/HeroSection";
import TopArticles from "@/components/home/TopArticles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Stay updated with our latest articles and tutorials.
            </p>
          </div>
          <Suspense fallback={<div className="flex items-center justify-center">Loading...</div>}>
            <TopArticles />
          </Suspense>
          <div className="text-center mt-12 ">
            <Link href="/articles">
              <Button className="rounded-full bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default page;
