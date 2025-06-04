import { ReactNode } from "react";

type ArticleProps = {
  image: string;     // image src
  imageAlt: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Article({
  image,
  imageAlt,
  title,
  subtitle,
  children,
}: ArticleProps) {
  return (
    <article className="w-full flex flex-col-reverse md:flex-row md:items-start gap-8">
      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h1 className="text-3xl font-bold text-green-200 mb-2">{title}</h1>
        {subtitle && (
          <div className="text-lg text-green-100 mb-6">{subtitle}</div>
        )}
        <div className="text-gray-100 text-[17px] leading-relaxed">{children}</div>
      </div>
      {/* Image Card: Top-right on desktop, top-center on mobile */}
      <div className="w-full md:w-[320px] md:ml-6 flex md:block justify-center">
        <div
          className="relative rounded-2xl overflow-hidden w-full max-w-[320px] aspect-[5/7] shadow-xl bg-[#182B35]/75"
        >
          <img
            src={image}
            alt={imageAlt}
            className="object-cover w-full h-full absolute inset-0 z-0"
            style={{ opacity: 1 }}
            draggable={false}
          />
          <div className="relative z-20 w-full p-4 flex flex-col items-center justify-end text-center">
            <span className="text-2xl font-bold text-white drop-shadow-md">{title}</span>
            {subtitle && (
              <span className="text-md text-gray-200 mt-1">{subtitle}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}