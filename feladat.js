function feladat01(szinek) {
	const result = [];

	function backtrack(temp, start) {
		if (temp.length > 1) {
			result.push(temp.join(""));
		}

		for (let i = start; i < szinek.length; i++) {
			temp.push(szinek[i]);
			backtrack(temp.slice(), i + 1);
			temp.pop();
		}
	}

	backtrack([], 0);
	return result.length;
}
