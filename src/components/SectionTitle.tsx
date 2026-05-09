interface Props {
  eyebrow?: string;
  children: React.ReactNode;
  align?: "center" | "left";
}

const SectionTitle = ({ eyebrow, children, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center mb-14" : "mb-14"}>
    {align === "center" && <div className="star-accent" />}
    {eyebrow && (
      <p className="text-gold tracking-[0.4em] text-xs uppercase mb-4">{eyebrow}</p>
    )}
    <h2 className="text-4xl md:text-5xl font-serif-display text-foreground">{children}</h2>
    <div className={`divider-gold w-40 mt-6 ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);

export default SectionTitle;
