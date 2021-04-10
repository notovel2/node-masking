interface EmailMaskOptions {
	startMaskOffset?: number;
	endMaskOffset?: number;
  symbol?: string;
}

const emailMask = ({ startMaskOffset, endMaskOffset, symbol = '*' }: EmailMaskOptions = {}) => <T extends string>(email: T): T => {
  
  const atIndex = email.indexOf('@');
  const domain = email.substr(atIndex);
  const name = email.substring(0, atIndex);
  console.log(name, domain);
  
  const length = name.length;
  const start = startMaskOffset || 1;
	const end = length - (endMaskOffset || 1) - 1;
  let masked = '';
  for (let i = 0; i < length; i++) {
		if (i >= start && i <= end) {
			masked += symbol;
			continue;
		}
		masked += email[i];
	}
  return `${masked}${domain}` as T;
}

export default emailMask;
