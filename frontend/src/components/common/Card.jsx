function Card({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur-md
        shadow-lg
        p-6
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-xl
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

export default Card;