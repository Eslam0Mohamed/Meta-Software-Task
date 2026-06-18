const Logo = ({ size = 36 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Shop Now logo">
      <rect x="14" y="34" width="72" height="52" rx="8" fill="#2563eb" />
      <path
        d="M 30 34 L 34 16 Q 36 6 46 6 L 54 6 Q 64 6 66 16 L 70 34"
        fill="none"
        stroke="#2563eb"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#eaf1ff"
      >
        SN
      </text>
    </svg>
  )
}

export default Logo