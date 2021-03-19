import './App.css';
import {useContext, useState} from 'react';
import {DrizzleContext} from '@drizzle/react-plugin';

function SetString() {

    const [stakeId, setStakeId] = useState(null);
    const drizzleData = useContext(DrizzleContext.Context);
    

    const handleKeyDown = e => {
        if(e.keyCode === 13) {
            setValue(e.target.value);
        }
    };

    const setValue = value => {
        const {drizzle} = drizzleData;
        const contract = drizzle.contracts.MyStringStore;

        const stackId = contract.methods["set"].cacheSend(value,{
            from: drizzleData.drizzleState.accounts[0]
        });
        setStakeId(stackId);
    }

    const getTxStatus = () => {
        const {transactions, transactionStack} = drizzleData.drizzleState;
        const txHash = transactionStack[stakeId];
        if(!txHash)return null;
        return `transaction status: ${transactions[txHash] && transactions[txHash].status}`; 
    }
    
    return(
        <div>
            <input type="text" onKeyDown={handleKeyDown}/>
            <div>{getTxStatus()}</div>
            
        </div>
    );
}

export default SetString;