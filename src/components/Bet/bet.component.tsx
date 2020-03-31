import React, {useContext} from 'react';
import context from "../../context/context/context";
import { Link } from 'react-router-dom';
import './bet.component.scss';

const Bet = () => {
  const {state} = useContext(context);
  const {t} = state;

  return (
      <div className="container" id="bet-component">
        <div className="row">
          <div className="col-md-8 offset-2 mt-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">
                    {t('back')}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{t('module')}</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="p-4">
                {t('you_are_in_the_module')}.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Bet;