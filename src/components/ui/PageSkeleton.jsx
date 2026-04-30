export default function PageSkeleton() {
  return (
    <div className="px-4 sm:px-6 pt-28 pb-16 animate-pulse">

      {/* HERO CARD */}
      <div className="max-w-6xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 p-6 sm:p-10 md:p-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="w-[220px] sm:w-[260px] md:w-[300px] h-[220px] sm:h-[260px] md:h-[300px] bg-gray-200 dark:bg-gray-800 rounded-xl" />
          </div>

          {/* TEXT */}
          <div className="text-center md:text-left space-y-4">

            <div className="w-24 h-6 mx-auto md:mx-0 bg-gray-200 dark:bg-gray-800 rounded-full" />

            <div className="h-8 w-3/4 mx-auto md:mx-0 bg-gray-200 dark:bg-gray-800 rounded" />

            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />

          </div>

        </div>
      </div>

    </div>
  );
}