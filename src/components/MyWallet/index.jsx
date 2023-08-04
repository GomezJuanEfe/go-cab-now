import './MyWallet.scss';

const MyWallet = () => (
  <div className="form__payment">

    <div className="card__wallet">

      <form className="wallet-section">

        <h6>SELECT YOUR WALLET</h6>

        <div className="row_wallet">

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Adyen
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Airtel Money
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Airtel Wallet
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Apple Pay
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Brinks
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              CardFree
            </div>
          </div>

        </div>
        <div className="form-group mt-3">
          <div htmlFor="net-b">
            Select Bank
            <select className="form-control">
              <option selected>Choose Bank...</option>
            </select>
          </div>
        </div>
        <div className="payment-btn">
          <button type="button" className="btn_payment">
            MAKE PAYMENT
          </button>
        </div>
      </form>
    </div>
  </div>
);

// const MyWallet = () => (
//   <div className="form__payment">
//     <div className="card__wallet">
//       <form className="wallet-section">
//         <h6>SELECT YOUR WALLET</h6>

//         <div className="row">

//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               Adyen
//             </label>
//           </div>
//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               Airtel Wallet
//             </label>
//           </div>
//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               Apple Pay
//             </label>
//           </div>
//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               Brinks
//             </label>
//           </div>
//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               CardFree
//             </label>
//           </div>
//           <div className="form-check_col-md-6">
//             <label className="form-check-label" htmlFor="Radios1">
//               <div className="input_radio_payment_2">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   value="option1"
//                   checked
//                   name="radiocls"
//                 />
//               </div>
//               JPMorgan Chase & Co.
//             </label>
//           </div>
//         </div>

//         <div className="form-group mt-3">
//           <label htmlFor="net-b">
//             Select Bank
//             <select className="form-control">
//               <option selected>Choose Bank...</option>
//             </select>
//           </label>
//         </div>
//         <div className="payment-btn">
//           <button type="button" className="btn_payment">
//             MAKE PAYMENT
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

export default MyWallet;
