let n = 1;
for (; ;) {
	console.log(n++)
	if (n > 50) break
}

for (i = 50; i > 24; i--) {
	console.log(i)
}

for (let j = 2500; j < 5000; j++) {
	if (j % 2 == 0) continue
	console.log(j)
}