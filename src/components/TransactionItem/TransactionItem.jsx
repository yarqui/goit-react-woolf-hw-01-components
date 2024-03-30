import s from './TransactionItem.module.css';

const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <tr className={s.transactionRow}>
      <td className={s.transactionCell}>{type}</td>
      <td className={s.transactionCell}>{amount}</td>
      <td className={s.transactionCell}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
