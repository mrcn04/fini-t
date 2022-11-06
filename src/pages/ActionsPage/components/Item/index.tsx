export default function Item({
  label,
  backgroundColor,
  fontSize,
}: {
  label: string;
  backgroundColor: string;
  fontSize?: number;
}) {
  return (
    <span
      style={{
        backgroundColor,
        color: '#fff',
        padding: '0.4rem',
        borderRadius: '0.4rem',
        margin: '0 2px',
        fontSize: fontSize || 11,
        textAlign: 'center',
      }}>
      {label}
    </span>
  );
}
