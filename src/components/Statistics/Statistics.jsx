import React from 'react';
import StatsItem from '../StatsItem/StatsItem';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(statItem => (
          <StatsItem key={statItem.id} stat={statItem} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
