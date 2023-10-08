import styles from '../scss/Calculator.module.scss';

const Calculator = () => {
	return (
		<main className={styles['theme-three']}>
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
								<div className={styles.circle} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.screen}>
					<div className={styles.result}>399,981</div>
				</div>
				<div className={styles.buttons}>
					<div className={styles.calculation__buttons}>
						<button className={styles.primary__button}>7</button>
						<button className={styles.primary__button}>8</button>
						<button className={styles.primary__button}>9</button>
						<button className={styles.secondary__button}>Del</button>
						<button className={styles.primary__button}>4</button>
						<button className={styles.primary__button}>5</button>
						<button className={styles.primary__button}>6</button>
						<button className={styles.primary__button}>+</button>
						<button className={styles.primary__button}>1</button>
						<button className={styles.primary__button}>2</button>
						<button className={styles.primary__button}>3</button>
						<button className={styles.primary__button}>-</button>
						<button className={styles.primary__button}>.</button>
						<button className={styles.primary__button}>0</button>
						<button className={styles.primary__button}>/</button>
						<button className={styles.primary__button}>x</button>
					</div>
					<div className={styles.result__buttons}>
						<button className={styles.secondary__button}>Reset</button>
						<button className={styles.tertiary__button}>=</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Calculator;
