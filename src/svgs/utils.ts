export const splitTitle = (title: string): string[] => {
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
