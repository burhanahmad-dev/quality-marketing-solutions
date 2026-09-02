type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={compact ? "brand-symbol compact" : "brand-symbol"} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}
