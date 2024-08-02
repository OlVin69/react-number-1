import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.head}>Type</th>
          <th className={s.head}>Amount</th>
          <th className={s.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
return(
  <tr className={s.row} key={item.id}>
              <td className={s.data}>{item.type}</td>
              <td className={s.data}>{item.amount}</td>
              <td className={s.data}>{item.currency}</td>
            </tr>
           ) 
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
