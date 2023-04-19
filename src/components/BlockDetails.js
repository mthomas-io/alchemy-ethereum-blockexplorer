import { useEffect, useState } from "react"
import { alchemyClient } from "../vendor/alchemy";
import { parseBlock } from "../utils/parseBlock";

export const BlockDetails = ({ blockNumber }) => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        alchemyClient.core.getBlockWithTransactions(blockNumber)
            .then(parseBlock)
            .then(setDetails)
            .catch(() => setDetails(null));
    }, [blockNumber]);

    return !details ? <div>Block not found</div> : (
        <div>
            <table>
                {Object.entries(details)
                    .filter(([key]) => key !== 'transactions')
                    .map(([key, value]) => (
                        <tr>
                            <td style={{fontWeight: 'bold', minWidth: '200px'}}><b>{key}</b></td>
                            <td>{value}</td>
                        </tr>
                    ))
                }
                <tr><td style={{fontWeight: 'bold'}}>Transactions:</td></tr>
                <tr><td colSpan="2">
                    <ul>
                        {details.transactions.map(tx => (
                            <li>{tx.hash}</li>
                        ))}
                    </ul>
                </td></tr>
            </table>
        </div>
    );
}