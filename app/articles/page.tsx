import AllArticlesPage from "@/components/articles/AllArticlesPage";
import ArticleSarchInput from "@/components/articles/ArticleSarchInput";
import ArticlesLoading from "@/components/articles/ArticlesLoading";
import { Suspense } from "react";

type PageProps = {
    searchParams: {
        search?: string;
        page?: string;
    };
};

const page:React.FC<PageProps> = ({searchParams}) => {
  const search = searchParams.search || "";
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            All Articles
          </h1>
          <ArticleSarchInput />
        </div>
        <Suspense fallback={<ArticlesLoading />}>
          <AllArticlesPage searchParams={search}/>
        </Suspense>
      </main>
    </div>
  );
};

export default page;
