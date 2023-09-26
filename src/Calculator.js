import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setNum1,
    setNum2,
    setResult,
    setError,
    clearError,
    clearResult,
} from './reducer';
import './App.css'

const Calculator = () => {
    const num1 = useSelector((state) => state.calculator.num1);
    const num2 = useSelector((state) => state.calculator.num2);
    const result = useSelector((state) => state.calculator.result);
    const error = useSelector((state) => state.calculator.error);

    const dispatch = useDispatch();

    const handleNum1Change = (e) => {
        dispatch(setNum1(e.target.value));
        dispatch(clearError());
        dispatch(clearResult());
    };

    const handleNum2Change = (e) => {
        dispatch(setNum2(e.target.value));
        dispatch(clearError());
        dispatch(clearResult());
    };

    const handleOperation = (operator) => {
        if (num1 === '' || num2 === '') {
            dispatch(setError('Поле пустое'));
            dispatch(clearResult());
            return;
        }

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let resultValue;

        switch (operator) {
            case '+':
                resultValue = n1 + n2;
                break;
            case '-':
                resultValue = n1 - n2;
                break;
            case '*':
                resultValue = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    dispatch(setError('Деление на ноль невозможно'));
                    dispatch(clearResult());
                    return;
                }
                resultValue = n1 / n2;
                break;
            default:
                break;
        }

        dispatch(setResult(resultValue));
    };

    return (
        <div className='container'>
            <h1>Калькулятор</h1>
            <input
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Введите число 1"
            />
            <input
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Введите число 2"
            />
            <div className='btns'>
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
            </div>
            {error && <div className='result'>{error}</div>}
            {result !== null && <div>Результат: {result}</div>}
        </div>
    );
};

export default Calculator;
