import TransactionItem from 'components/TransactionItem/TransactionItem';

import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transactionHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map(item => <TransactionItem key={item.id} item={item} />)}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
