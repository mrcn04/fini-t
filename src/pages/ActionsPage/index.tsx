import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import classes from '../../styles/ActionsPage.module.css';
import Item from './components/Item';

export const ActionsPage = () => {
  const location = useLocation();
  // fetch data with the given id from location.state.id

  return (
    <div className="w-full">
      <Header title="Actions" />
      <div className="bg-gray-100 h-full">
        <section className={classes.wrapper}>
          <h6>Action Name</h6>
          <h6>Triggering path</h6>
          <h6>Action Type</h6>
          <h6>Impact</h6>
        </section>
        <section>
          <div className={classes.wrapperItems}>
            <div>Inform of fault txn</div>
            <div>
              <Item label="purchase_item_x" backgroundColor="#ce6f6f" />
              <Item label="transaction_failed" backgroundColor="#ce6f6f" />
            </div>
            <div>Send email</div>
            <div>3.8% increase in</div>
            <Item label="user_login" backgroundColor="#25ba1d" fontSize={16} />
          </div>
          <div className={classes.wrapperItems}>
            <div>Inform Alternative bank</div>
            <div>
              <Item label="add_card" backgroundColor="#ce6f6f" />
              <Item label="user_error_treshold" backgroundColor="#ce6f6f" />
            </div>
            <div>Send email</div>
            <div>7.9% increase in</div>
            <Item label="user_login" backgroundColor="#25ba1d" fontSize={16} />
          </div>
          <div className={classes.wrapperItems}>
            <div>Inform fraud team</div>
            <div>
              <Item label="fraud_deactivation" backgroundColor="#ce6f6f" />
            </div>
            <div>Send email</div>
            <div>No change on</div>
            <Item label="user_login" backgroundColor="#25ba1d" fontSize={16} />
          </div>
        </section>
      </div>
    </div>
  );
};
