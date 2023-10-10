import { useState } from 'react';

import Buttons from './Buttons';
import styles from '../scss/Calculator.module.scss';

const Calculator = () => {
	const [theme, setTheme] = useState('one');

	const themeSwitchHandler = () => {
		if (theme === 'one') {
			setTheme('two');
		} else if (theme === 'two') {
			setTheme('three');
		} else {
			setTheme('one');
		}
	};

	const circlePosition = () => {
		if (theme === 'one') {
			return '0';
		} else if (theme === 'two') {
			return '130%';
		} else {
			return '280%';
		}
	};

	const [calculation, setCalculation] = useState('');

	const onNumClick = (event) => {
		const newValue = event.target.value;

		const parts = calculation.split(/[+\-*/]/);
		const lastPart = parts[parts.length - 1];

		if (lastPart.includes('.') && newValue === '.') {
			return;
		}

		if (lastPart === '' && newValue === '.') {
			return;
		}

		if (calculation === '0' && newValue !== '0') {
			setCalculation(newValue);
		} else if (calculation !== '0') {
			setCalculation((prevCalc) => prevCalc + newValue);
		}
	};

	const onSignClick = (event) => {
		const newValue = event.target.value;
		const lastChar = calculation.charAt(calculation.length - 1);

		if (['+', '*', '/'].includes(lastChar) && newValue !== '-') {
			setCalculation((prevCalc) => prevCalc.slice(0, -1) + newValue);
		} else {
			setCalculation((prevCalc) => prevCalc + newValue);
		}
	};

	const onResetClick = () => {
		setCalculation('');
	};

	const calculate = () => {
		setCalculation(String(eval(calculation)));
	};

	const onDelete = () => {
		setCalculation(calculation.slice(0, -1));
	};

	return (
		<main className={styles[`theme-${theme}`]}>
			<div className={styles.calculator}>
				<div className={styles.header}>
					<div className={styles.logo}>calc</div>
					<div className={styles.theme__switcher}>
						<p>Theme</p>
						<div className={styles.slider}>
							<div className={styles.theme__numbers}>
								<p>1</p>
								<p>2</p>
								<p>3</p>
							</div>
							<div className={styles.slider__container}>
								<div
									onClick={themeSwitchHandler}
									className={styles.circle}
									style={{ translate: circlePosition() }}
								/>
							</div>
						</div>
					</div>
				</div>
				<div id='display' className={styles.screen}>
					<div className={styles.result}>{calculation || 0}</div>
				</div>
				<Buttons
					onCalcClick={onNumClick}
					onSignClick={onSignClick}
					onReset={onResetClick}
					onCalculate={calculate}
					onDel={onDelete}
				/>
			</div>
		</main>
	);
};

export default Calculator;
