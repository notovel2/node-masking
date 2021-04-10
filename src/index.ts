import { allMask, emailMasking, phoneNumberMasking } from "./masking";
import { Pair } from "./types";

interface MaskObjectOptions {
  deep?: boolean;
}

const maskObject = <T extends { [key: string]: any }>(object: T, pairs: Pair, { deep }: MaskObjectOptions = {}): T => {
  let result: T = { ...object };

  for (const key in result) {
    const value = result[key];
    const fn = pairs[key];
    switch (typeof value) {
			case 'string':
				if (fn) {
					result[key] = fn<typeof value>(value);
				}
				break;
			case 'object':
				if (deep) {
					result[key] = maskObject(value, pairs);
				}
		}
	}
	return result;
}

export default maskObject;

console.log(maskObject(
	{
		phoneNumber: '0991112222',
		email: 'node_masking@domain.com',
		password: 'abc123',
    user: {
      phoneNumber: '+66991112222'
    }
	},
	{
		phoneNumber: phoneNumberMasking(),
		email: emailMasking({ startMaskOffset: 2, endMaskOffset: 4}),
		password: allMask({ symbol: '#' }),
	},
	{
		deep: true,
	}
));
