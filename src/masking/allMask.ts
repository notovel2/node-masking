interface AllMaskOptions {
	startMaskOffset?: number;
	endMaskOffset?: number;
  symbol?: string;
}

const allMark = ({ startMaskOffset, endMaskOffset, symbol = '*' }: AllMaskOptions = {}) => <T extends string>(str: T): T => {
  const length = str.length;
  const start = startMaskOffset || 0;
	const end = length - (endMaskOffset || 0) - 1;
  let masked = '';
  for (let i = 0; i < length; i++) {
		if (i >= start && i <= end) {
			masked += symbol;
			continue;
		}
		masked += str[i];
	}
  return masked as T;
}

export default allMark;
