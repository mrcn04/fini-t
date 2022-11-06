import classes from '../../../../styles/CohortPage.module.css';

export interface IStatistics {
  avSpending: number | undefined;
  dat: string | undefined;
  lpm: number | undefined;
  cScore: number | undefined;
  type?: 'current' | 'rest';
}

export default function StatisticsTable({
  avSpending,
  dat,
  lpm,
  cScore,
  type,
}: IStatistics) {
  return (
    <div className={classes.wrapper}>
      <div>
        <p>Average Spendings</p>
        <span style={{ color: type === 'current' ? 'red' : 'green' }}>
          ${avSpending}
        </span>
      </div>
      <div>
        <p>Daily active time</p>
        <span style={{ color: type === 'current' ? 'red' : 'green' }}>
          {dat} min
        </span>
      </div>
      <div>
        <p>Logins per month</p>
        <span style={{ color: type === 'current' ? 'red' : 'green' }}>
          {lpm}
        </span>
      </div>
      <div>
        <p>Churn score</p>
        <span style={{ color: type === 'current' ? 'red' : 'green' }}>
          {cScore}%
        </span>
      </div>
    </div>
  );
}
