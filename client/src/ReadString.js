import './App.css';
import {useState, useEffect, useContext} from 'react';
import {DrizzleContext} from '@drizzle/react-plugin';

function ReadString() {

    const [dataKey, setDataKey] = useState(null);
    const drizzleData = useContext(DrizzleContext.Context);

    useEffect(()=>{
        const {drizzle} = drizzleData;
        const contract = drizzle.contracts.MyStringStore;

        const dataKey = contract.methods["myString"].cacheCall();
        setDataKey(dataKey);
    },[])

    const {MyStringStore} = drizzleData.drizzleState.contracts;
    const myString = MyStringStore.myString[dataKey];
    return(
        <div>
            <div>Hello in readString</div>
            <p>My stored string: {myString && myString.value}</p>
        </div>
    );
}

export default ReadString;