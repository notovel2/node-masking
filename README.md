# Node masking

module for masking data

- support javascript and typescript

## Installation

```
npm install node-masking // npm
yarn add node-masking // yarn
```

## Usages

```javascript
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
		email: emailMasking({ startMaskOffset: 2, endMaskOffset: 4 }),
		password: allMask({ symbol: '#' }),
	},
	{
		deep: true,
	}
)
```

#### Result

```javascript
{
  phoneNumber: '09******22',
  email: 'no******king@domain.com',
  password: 'a####3',
  user: { phoneNumber: '+6********22' }
}
```

## API

phoneNumberMasking

|Parameters|Type|Default value|
|-|-|-|
|startMaskOffset|string?|2|
|endMaskOffset|number?|2|
|symbol|string?|*|

emailMasking

|Parameters|Type|Default value|
|-|-|-|
|startMaskOffset|string?|1|
|endMaskOffset|number?|1|
|symbol|string?|*|

allMask

|Parameters|Type|Default value|
|-|-|-|
|startMaskOffset|string?|0|
|endMaskOffset|number?|0|
|symbol|string?|*|

