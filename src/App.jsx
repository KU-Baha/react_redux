import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementAction, asyncIncrementAction} from "./store/countReducer";
import {fetchUsersAction} from "./store/userReducer";

const App = () => {
    const dispatch = useDispatch();

    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)

    return (
        <div className={'app'}>
            <div className="count">{count}</div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch(asyncIncrementAction())}>Increment ++</button>
                <button className="btn" onClick={() => dispatch(asyncDecrementAction())}>Decrement --</button>
                <button className="btn" onClick={() => dispatch(fetchUsersAction())}>Get Users</button>
            </div>
            <div className="users">
                {users.map(user =>
                    <div
                        className="user"
                        key={user.id}
                    >
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;