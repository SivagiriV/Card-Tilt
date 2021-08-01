import CreditCard from './components/CreditCard'
import MainCard from './components/MainCard'
import Input  from './components/Input/';
import Payment from './components/Payment'
import RecentPayment from './components/RecentPayments';
import './App.css'
function App() {
  return (
    <div className="App">
      <Input />
      <div className="top">
        <div>
          <div className="main">
            <MainCard />
            <CreditCard />
          </div>
          <RecentPayment />
        </div>
        <Payment />
      </div>
    </div>
  );
}
export default App;
