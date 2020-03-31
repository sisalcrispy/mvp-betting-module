import React, {useContext} from 'react';
import context from "../../context/context";
import './bet.component.scss';

const Bet = () => {
  const {state} = useContext(context);
  const {t} = state;

  return (
      <div className="container" id="bet-component">
        <div className="row">
          <div className="col-md-5 offset-2 mt-3 mb-3">
            <h1>{t('module')}</h1>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="p-4">
                {t('you_are_in_the_module')}!
                <br/>
                {t('services_are_libraries')}
                <hr/>
                  {t('examples')}: <br/>
                {t('this_green_is_global')}: <div className={'green-square'} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Bet;