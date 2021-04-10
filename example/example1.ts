import maskObject from "../src";
import { allMask, emailMasking, phoneNumberMasking } from "../src/masking";

maskObject(
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
);