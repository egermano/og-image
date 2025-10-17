const splitTitle = (title: string): string[] => {
  const maxCharsPerLine = 23;
  const maxLines = 2;
  const maxTotalChars = maxCharsPerLine * maxLines;

  // Crop title if too long
  const croppedTitle =
    title.length > maxTotalChars
      ? title.substring(0, maxTotalChars).trim()
      : title;

  const words = croppedTitle.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;

    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        // Single word longer than max chars
        lines.push(word.substring(0, maxCharsPerLine));
        currentLine = "";
      }
    }

    // Stop if we've reached max lines
    if (lines.length >= maxLines) {
      break;
    }
  }

  // Add remaining text if within line limit
  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines;
};

export const svgTypes = {
  default: (title: string, subtitle: string) => {
    const titleLines = splitTitle(title);
    const subtitleLines = splitTitle(subtitle);

    return `
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#101010" />
        <path
            d="M222.865 133.656L127.235 213.311C122.651 217.13 120 222.787 120 228.753L120 481.904C120 493.003 128.998 502 140.097 502L1059.9 502C1071 502 1080 493.003 1080 481.904V149.099C1080 138 1071 129.002 1059.9 129.002L235.727 129.001C231.027 129.001 226.476 130.648 222.865 133.656Z"
            fill="#101010" stroke="#EDE8E8" stroke-width="2" />

        <text x="172" y="229" fill="#EDE8E8"
            width="267"
            height="72"
            font-family="Sora"
            font-weight="400"
            font-style="normal"
            font-size="17"
            letter-spacing="-0.6084"
            text-anchor="start"
            dominant-baseline="middle">
            ${subtitleLines
              .map(
                (line, index) =>
                  `<tspan x="172" dy="${
                    index === 0 ? "0" : "1.2em"
                  }">${line}</tspan>`
              )
              .join("\n            ")}
        </text>

        <text x="172" y="328" fill="#EDE8E8"
            width="823.2"
            height="146"
            font-family="Sora"
            font-weight="400"
            font-style="normal"
            font-size="72.52"
            letter-spacing="-2.1756"
            text-anchor="start"
            dominant-baseline="middle">
            ${titleLines
              .map(
                (line, index) =>
                  `<tspan x="172" dy="${
                    index === 0 ? "0" : "1em"
                  }">${line}</tspan>`
              )
              .join("\n            ")}
        </text>

        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1098.74 35L1080.5 50.3565L1080 52.9999H1082.63L1096.76 41.1104L1094.48 52.9999H1097.93L1101.37 35H1098.74Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1104.82 35L1104.17 38.4009H1116.08L1101.88 50.3498L1101.37 52.9999H1119.3L1119.95 49.5989H1108.05L1122.24 37.6474L1122.75 35H1104.82Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1126.13 35L1122.75 52.9999H1126.12L1129.5 35H1126.13Z" fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1132.95 35L1129.5 52.9999H1147.43L1150.87 35H1132.95ZM1135.75 38.4007H1146.77L1144.62 49.5989H1133.6L1135.75 38.4007Z"
            fill="#EDE8E8" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M1168.8 35L1167.27 42.985L1170.06 46.4462L1172.25 35H1168.8ZM1154.32 35L1150.87 52.9999H1154.32L1156.69 40.6603L1166.65 52.9999H1168.8L1169.23 50.7963L1156.48 35H1154.32Z"
            fill="#EDE8E8" />
        <path
            d="M1030.77 231.026L1007.38 213.881V196.273L1030.77 179.129L1040 195.501L1021.23 203.224V206.931L1040 214.499L1030.77 231.026ZM1008.77 166L1005.69 194.883L990.462 203.687L964 191.949L973.538 175.885L989.538 188.242L992.769 186.388L990 166.309L1008.77 166ZM964 218.051L990.462 206.313L1005.69 215.117L1008.77 244L990 243.846L992.769 223.766L989.538 221.913L973.692 234.269L964 218.051Z"
            fill="#FE601F" />
    </svg>
    `;
  },
};
