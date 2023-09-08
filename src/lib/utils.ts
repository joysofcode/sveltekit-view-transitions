export function formatNumber(number: number) {
	return number.toLocaleString('en-US', { maximumFractionDigits: 0 })
}
