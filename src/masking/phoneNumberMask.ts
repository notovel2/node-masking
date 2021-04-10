interface PhoneNumberMaskOptions {
	startMaskOffset?: number;
	endMaskOffset?: number;
	symbol?: string;
}

const phoneNumberMasking = ({ startMaskOffset, endMaskOffset, symbol = '*' }: PhoneNumberMaskOptions = {}) => <T extends string>(phoneNumber: T): T => {
	const length = phoneNumber.length;
	let masked = '';
	const start = startMaskOffset || 2;
	const end = length - (endMaskOffset || 3);
	for (let i = 0; i < length; i++) {
		if (i >= start && i <= end) {
			masked += symbol;
			continue;
		}
		masked += phoneNumber[i];
	}
	return masked as T;
}

export default phoneNumberMasking;
