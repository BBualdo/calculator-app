import styles from '../scss/Calculator.module.scss';

const Buttons = (props) => {
	return (
		<div className={styles.buttons}>
			<div className={styles.calculation__buttons}>
				<button
					value='7'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					7
				</button>
				<button
					value='8'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					8
				</button>
				<button
					value='9'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					9
				</button>
				<button onClick={props.onDel} className={styles.secondary__button}>
					Del
				</button>
				<button
					value='4'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					4
				</button>
				<button
					value='5'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					5
				</button>
				<button
					value='6'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					6
				</button>
				<button
					value='+'
					onClick={props.onSignClick}
					className={styles.primary__button}
				>
					+
				</button>
				<button
					value='1'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					1
				</button>
				<button
					value='2'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					2
				</button>
				<button
					value='3'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					3
				</button>
				<button
					value='-'
					onClick={props.onSignClick}
					className={styles.primary__button}
				>
					-
				</button>
				<button
					value='.'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					.
				</button>
				<button
					value='0'
					onClick={props.onCalcClick}
					className={styles.primary__button}
				>
					0
				</button>
				<button
					value='/'
					onClick={props.onSignClick}
					className={styles.primary__button}
				>
					/
				</button>
				<button
					value='*'
					onClick={props.onSignClick}
					className={styles.primary__button}
				>
					x
				</button>
			</div>
			<div className={styles.result__buttons}>
				<button onClick={props.onReset} className={styles.secondary__button}>
					Reset
				</button>
				<button onClick={props.onCalculate} className={styles.tertiary__button}>
					=
				</button>
			</div>
		</div>
	);
};

export default Buttons;
