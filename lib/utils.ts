export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`
}

export function formatEnergy(kwh: number): string {
  if (kwh >= 1000) {
    return `${(kwh / 1000).toFixed(2)} MWh`
  }
  return `${kwh.toFixed(2)} kWh`
}
