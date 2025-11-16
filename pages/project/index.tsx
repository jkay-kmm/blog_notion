import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProjectPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-5xl px-4 mx-auto mt-10 sm:px-6 lg:px-8">
      <Head>
        <title>Reading List - TrungNguyen Blog</title>
        <meta
          name="description"
          content="Reading List - TrungNguyen Blog"
        />
      </Head>

      <div className="mb-4 text-gray-700 dark:text-gray-100">
        {t("reading_list.description")}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {(t("reading_list.books", { returnObjects: true }) as any[]).map((book: any, index: number) => (
          <div
            key={index}
            className="relative transition-all bg-white border border-gray-200 hover:border-blue-400 dark:hover:border-blue-400 dark:border-gray-700 dark:bg-gray-800"
          >
            <Link href={book.link} target="_blank">
              <a className="block">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center mb-2 text-xs text-gray-500 dark:text-gray-100">
                    <span>{book.author}</span>
                  </div>
                  <div className="flex text-sm">
                    <p className="mb-3 font-medium text-blue-600 dark:text-blue-500">
                      {book.title}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-50">
                    {book.description}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};