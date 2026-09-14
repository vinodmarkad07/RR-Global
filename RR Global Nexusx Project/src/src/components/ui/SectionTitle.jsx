export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-[#D4AF37] font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mt-3">
        {title}
      </h2>

      <p className="text-gray-600 mt-5 leading-8">
        {description}
      </p>
    </div>
  );
}