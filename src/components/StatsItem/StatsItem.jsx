import React from 'react';
import s from './StatsItem.module.css';
import { getRandomHexColor } from 'components/utils/utils';
const StatsItem = ({ stat: { label, percentage } }) => {
  return (
    <li style={{ backgroundColor: getRandomHexColor() }} className={s.statItem}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatsItem;
