export function StaticBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: '#F8F7F2' }}
    >
      {/* Blue radial — top right, very subtle */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(37,99,235,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Copper radial — bottom left, minimal */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(169,116,90,0.05) 0%, transparent 65%)',
        }}
      />
      {/* Grid lines — barely visible */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(7,17,31,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,17,31,0.025) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />
    </div>
  )
}
