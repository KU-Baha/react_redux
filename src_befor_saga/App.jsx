import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers";

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={'app'}>
            <div style={{fontSize: '3rem', marginBottom: 10}}>Баланс: {cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt("Сумма")))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt("Сумма")))}>Снять со счёта</button>
                <button onClick={() => addCustomer(prompt("ФИО"))}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов с БД</button>
            </div>
            <div>
                {customers.length > 0 ?
                    <div>
                        <h2>Клиенты</h2>
                        {customers.map(customer =>
                            <div
                                onClick={() => removeCustomer(customer)}
                                style={{
                                    fontSize: "1.5rem",
                                    marginBottom: 15,
                                    border: "1px solid black",
                                }}
                            >{customer.name}</div>
                        )}
                    </div>
                    :
                    <div style={{fontSize: "2rem", marginTop: 20}}>
                        Клиенты отсутствуют
                    </div>
                }
            </div>
        </div>
    );
};

export default App;