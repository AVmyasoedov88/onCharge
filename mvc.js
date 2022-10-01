import onChange from ('on-change')

const foo = onChange({
	a: 0,
	b: 0
}, () => save(foo));



foo.a = 3;
console.log(foo)