// Guide verticali sottilissime, come le guide di un impaginato. Solo decorative.
export default function Guides({ className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <div className="mx-auto grid h-full max-w-[1600px] grid-cols-2 px-6 md:grid-cols-4 lg:px-12">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`border-l border-[#364b9b]/[0.09] last:border-r ${i > 1 ? 'hidden md:block' : ''} ${i === 1 ? 'border-r md:border-r-0' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
