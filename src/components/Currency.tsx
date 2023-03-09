import React, { useState, useEffect } from 'react'
import { CurrencyProps } from '../types'
import { CURRENCIES } from '../constants'

function Currency({ activeCurrency, onCurrency }: CurrencyProps) {
	return (
		<div className="">
			<label
				htmlFor=""
				className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
				Currency
			</label>
			{Object.keys(CURRENCIES).map((currency) => (
				<span
					key={currency}
					className={`chip ${currency === activeCurrency && 'active'}`}
					onClick={onCurrency(currency)}>
					{currency}
				</span>
			))}
		</div>
	)
}

export default Currency
